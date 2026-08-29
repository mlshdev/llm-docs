> Release-pinned source for Grafana v13.2.0: [docs/sources/setup-grafana/configure-access/configure-authentication/saml/configure-saml-single-logout/_index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/setup-grafana/configure-access/configure-authentication/saml/configure-saml-single-logout/_index.md)

# Configure SAML Single Logout

The single logout feature allows users to log out from all applications associated with the current IdP session established via SAML SSO. If the `single_logout` option is set to `true` and a user logs out, Grafana requests IdP to end the user session which in turn triggers logout from all other applications the user is logged into using the same IdP session (applications should support single logout). Conversely, if another application connected to the same IdP logs out using single logout, Grafana receives a logout request from IdP and ends the user session.

> **Note**
>
> The improved SLO features, including proper handling of the IdP's SessionIndex, are currently behind the `improvedExternalSessionHandlingSAML` feature toggle. When this feature toggle is enabled, Grafana will correctly handle session-specific logouts. If the feature toggle is not enabled, logging out will end all of the user's sessions.
