> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/get-started/install/android-tv.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/get-started/install/android-tv.mdx)

# Install NetBird on an Android TV

The Android TV app supports devices running Android 8.0 or later.

> **Note**
>
> Android TV support is currently in beta.

## Where to Download

NetBird has an official Android application that you can download at Google Play Store:

[![playstore](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/get-started/android/google-play-badge.png)](https://play.google.com/store/apps/details?id=io.netbird.client)

APK releases are also available to install directly on your Android device via the [NetBird Android GitHub repository](https://github.com/netbirdio/android-client/releases).

## Configure Netbird on Android TV

### First Launch

Upon first launch, NetBird will inform you that it's using the default managemet server.

![firstinstall](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/get-started/android/first-install-dialog.png)

Select 'Continue' to ackownledge and you'll be greeted with the app's main screen.

![android-tv-main-screen](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/get-started/android-tv/main-screen.png)

### Management Server Configuration

> **Note**
>
> This step only applies to self-hosted users, or cloud users enrolling the device with a setup key. If you're a cloud user and are *not* enrolling the device with a setup key, you can safely skip to [Connecting to Your Network](#connecting-to-your-network)

Select the hamburger menu on the top left of the main screen (or hold the left directional button) and navigate to the 'Change Server' menu.

![android-tv-main-menu](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/get-started/android-tv/main-menu-change-server.png)

Changing servers erases the device's current NetBird config, so you'll need to confirm the action before proceeding:

![confirm-erase-cponfig](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/get-started/android-tv/change-server.png)

Enter your management server endpoint. For cloud users, this is `https://api.netbird.io:443`. For self-hosted users, it's usually `https://your_management_server_url:443`, but you can refer to the `exposedAddress` field in your `config.yaml` (or `management.json` for older multi-container setups) if you're unsure.

If enrolling the device with a setup key, select '+ Add this device with a setup key' and enter your setup key. Select 'change' to apply your new management server config, and if successful you'll see the following:

![serverchanged](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/get-started/android/server-changed.png)

You're now ready to connect to your Netbird network!

#### Connecting to Your Network

Select the NetBird logo button to connect. The app will request permission to create a VPN connection:

![vpnconnectionrequest](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/get-started/android/vpn-connection-request.png)

Select 'OK'. If you didn't enter a setup key in the 'Change Server' menu, then you'll need to authenticate with your SSO provider. NetBird will open a browser window where you'll be instructed to sign in to your SSO provider.

After logging in, NetBird will confirm your authentication. Once you close the browser window, your device should be connected!

#### Authenticating

> **Note**
>
> For self-hosted users *not* enrolling the device with a setup key, Device Authentication needs to be enabled in the management server config.

Since Android TV doesn't ship with a built-in browser, and entering credentials with a remote may be less than ideal, the TV client uses a slightly different authentication flow to the mobile app. If you're not using a setup key, then after you grant the app permission
to create a VPN connection, you'll be presented a QR code and device ID:

![tvssoqr](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/get-started/android/tv-sso-qr-dialog.png)

Scan the QR code with your phone and you'll be able to sign in to your SSO provider there. If asked to confirm your device code, confirm that the code underneath the QR code matches the one presented by your SSO provider. Once you've completed
the SSO flow, the QR code dialog in the NetBird app will automatically dismiss itself, and your device should now be connected!

## What's next?

- Manage your device's [access](https://docs.netbird.io/manage/access-control/manage-network-access) to the network
- Use your device for [remote access to your home network](https://docs.netbird.io/use-cases/remote-access/access-home-devices)
- Use your device as an [exit node](https://docs.netbird.io/use-cases/remote-access/exit-nodes#make-the-peer-an-exit-node-routing-peer)
