> Commit-pinned source for Docker main: [content/manuals/enterprise/enterprise-deployment/pkg-install-and-configure.md](https://github.com/docker/docs/blob/ff96ad1711065cf2e9c3f1d701dad04775834f70/content/manuals/enterprise/enterprise-deployment/pkg-install-and-configure.md)

# PKG installer

**PKG installer requirements**

- Subscription: Business
- For: Administrators

The PKG package supports various MDM (Mobile Device Management) solutions, making it ideal for bulk installations and eliminating the need for manual setups by individual users. With this package, IT administrators can ensure standardized, policy-driven installations of Docker Desktop, enhancing efficiency and software management across their organizations.

## Install interactively

1. In [Docker Home](http://app.docker.com), choose your organization.
2. Select **Docker Desktop**, then **Deploy**.
3. From the **macOS** tab, select the **Download PKG installer** button.
4. Once downloaded, double-click `Docker.pkg` to run the installer.
5. Follow the instructions on the installation wizard to authorize the installer and proceed with the installation.
   - **Introduction**: Select **Continue**.
   - **License**: Review the license agreement and select **Agree**.
   - **Destination Select**: This step is optional. It is recommended that you keep the default installation destination (usually `Macintosh HD`). Select **Continue**.
   - **Installation Type**: Select **Install**.
   - **Installation**: Authenticate using your administrator password or Touch ID.
   - **Summary**: When the installation completes, select **Close**.

> \[!NOTE]
>
> When installing Docker Desktop with the PKG, in-app updates are automatically disabled. This ensures organizations can maintain version consistency and prevent unapproved updates. For Docker Desktop installed with the `.dmg` installer, in-app updates remain supported.
>
> Docker Desktop notifies you when an update is available. To update Docker Desktop, download the latest installer from the Docker Home. Navigate to the **Deploy** page.
>
> To keep up to date with new releases, check the [release notes](https://docs.docker.com/desktop/release-notes/) page.

## Install from the command line

1. In [Docker Home](http://app.docker.com), choose your organization.
2. Select **Docker Desktop**, then **Deploy**.
3. From the **macOS** tab, select the **Download PKG installer** button.
4. From your terminal, run the following command:

   ```console
   $ sudo installer -pkg "/path/to/Docker.pkg" -target /Applications
   ```

## Additional resources

- See how you can deploy Docker Desktop for Mac using [Intune](https://docs.docker.com/enterprise/enterprise-deployment/use-intune/) or [Jamf Pro](https://docs.docker.com/enterprise/enterprise-deployment/use-jamf-pro/)
- Explore how to [Enforce sign-in](https://docs.docker.com/enterprise/security/enforce-sign-in/methods/#plist-method-mac-only) for your users.
