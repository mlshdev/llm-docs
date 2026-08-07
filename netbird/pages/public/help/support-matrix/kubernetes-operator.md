> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/help/support-matrix/kubernetes-operator.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/help/support-matrix/kubernetes-operator.mdx)

# Kubernetes Operator Support Matrix

## Kubernetes compatibility

The NetBird Kubernetes operator targets the Kubernetes minor versions that are currently receiving patch releases from upstream. The [Kubernetes release policy](https://kubernetes.io/releases/) keeps release branches active for the three most recent minor versions, with roughly one year of patch support each — the operator tracks that same window.

In practice this means the operator avoids depending on Kubernetes APIs or features that are not yet available across every supported minor version. When upstream drops a minor version from patch support, the operator may begin adopting capabilities that became generally available during that version's lifetime.

## NetBird control-plane compatibility

The operator is developed against the latest NetBird control-plane release. Older control-plane versions may continue to work, but compatibility is not actively verified outside the current release.

## Reporting compatibility issues

If you hit a problem on a supported combination, see [Report bugs and issues](https://docs.netbird.io/help/report-bug-issues). Include your operator version, Kubernetes version (`kubectl version`), and NetBird control-plane version.
