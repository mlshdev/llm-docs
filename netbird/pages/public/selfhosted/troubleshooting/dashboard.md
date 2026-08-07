> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/selfhosted/troubleshooting/dashboard.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/selfhosted/troubleshooting/dashboard.mdx)

# Dashboard issues

Problems with the self-hosted dashboard. For other areas, start from [Troubleshooting](https://docs.netbird.io/selfhosted/troubleshooting).

## Dashboard shows blank page

**Symptom**: The dashboard loads but renders a blank page, sometimes with errors in the browser console.

**Likely causes and fixes** (most common first):

1. **The dashboard can't reach the Management API.** Open the browser console (F12 → Console) and look for failed requests. Confirm the dashboard's configured API URL is correct and reachable from the browser.
2. **CORS (Cross-Origin Resource Sharing) is blocking the API behind a custom reverse proxy.** Serve the API on the same origin as the dashboard, or set the correct CORS headers on your proxy.
3. **A stale cached bundle.** Hard-reload the page or clear the browser cache.

**Confirm**: Reload the dashboard. The login or peers view renders, and the console shows no failed API requests.

## "Unauthorized" or "403" errors

**Symptom**: API calls return 401 Unauthorized or 403 Forbidden.

**Likely causes and fixes** (most common first):

1. **An expired or invalid token.** Re-authenticate. For direct API access, use a valid Personal Access Token (PAT).
2. **The user lacks permission** for the action. Check the user's role in the dashboard.
3. **Management can't validate the token.** Review `docker compose logs management` for token-validation errors.

**Confirm**: Re-run the action. It succeeds, and the Management logs show no auth errors.
