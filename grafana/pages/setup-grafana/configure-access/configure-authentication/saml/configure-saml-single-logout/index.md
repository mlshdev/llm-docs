> Pinned source for Grafana v13.3.1: [docs/sources/setup-grafana/configure-access/configure-authentication/saml/configure-saml-single-logout/_index.md](https://github.com/grafana/grafana/blob/5db6ba887630c7fa12e5bfd063f2fa854025468c/docs/sources/setup-grafana/configure-access/configure-authentication/saml/configure-saml-single-logout/_index.md)

# Configure SAML Single Logout

The single logout feature allows users to log out from all applications associated with the current IdP session established via SAML SSO. If the `single_logout` option is set to `true` and a user logs out, Grafana requests IdP to end the user session which in turn triggers logout from all other applications the user is logged into using the same IdP session (applications should support single logout). Conversely, if another application connected to the same IdP logs out using single logout, Grafana receives a logout request from IdP and ends the user session.
