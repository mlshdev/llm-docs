> Pinned source for ZITADEL v4.19.2: [apps/docs/content/self-hosting/deploy/kubernetes/uninstalling.mdx](https://github.com/zitadel/zitadel/blob/2c37c4176ad51c3db0354122e06af53a88d30d4e/apps/docs/content/self-hosting/deploy/kubernetes/uninstalling.mdx)
> Canonical documentation: https://zitadel.com/docs/self-hosting/deploy/kubernetes/uninstalling

This guide covers how to remove Zitadel from your Kubernetes cluster.

## Uninstall the Helm Release

```bash
helm uninstall my-zitadel
```

## Clean Up Helm Hooks

> ⚠️ **Important:** The Zitadel chart uses Helm hooks, which are [not garbage collected by helm uninstall](https://helm.sh/docs/topics/charts_hooks/#hook-resources-are-not-managed-with-corresponding-releases).

Remove hook resources manually:

```bash
for k8sresourcetype in job configmap secret rolebinding role serviceaccount; do
  kubectl delete $k8sresourcetype \
    --selector app.kubernetes.io/name=zitadel,app.kubernetes.io/managed-by=Helm
done
```

## Complete Namespace Teardown

To remove everything including the namespace and any Persistent Volume Claims:

```bash
kubectl delete namespace zitadel
```

> ⚠️ **Warning:** This permanently deletes all data in the namespace, including any PVCs. Ensure you have backups if needed.

## Verify Removal

Confirm all resources have been removed.

Check for remaining Zitadel resources:

```bash
kubectl get all --selector app.kubernetes.io/name=zitadel
```

Check for remaining secrets:

```bash
kubectl get secrets --selector app.kubernetes.io/name=zitadel
```

If you did not delete the namespace, check for remaining PVCs:

```bash
kubectl get pvc --selector app.kubernetes.io/name=zitadel
```
