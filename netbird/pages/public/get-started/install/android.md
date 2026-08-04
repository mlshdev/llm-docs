> Release-pinned source for NetBird v0.76.1: [netbirdio/docs@14375a092774f250d45a85f6d5f3c524d99fd111:src/pages/get-started/install/android.mdx](https://github.com/netbirdio/docs/blob/14375a092774f250d45a85f6d5f3c524d99fd111/src/pages/get-started/install/android.mdx)

# Install NetBird on an Android

The Android supports mobile devices, tablets and [Android TV](https://docs.netbird.io/get-started/install/android-tv) devices running Android 8.0 or later.

## Where to Download

NetBird has an official Android application that you can download at Google Play Store:

[![playstore](https://raw.githubusercontent.com/netbirdio/docs/14375a092774f250d45a85f6d5f3c524d99fd111/public/docs-static/img/get-started/android/google-play-badge.png)](https://play.google.com/store/apps/details?id=io.netbird.client)

APK releases are also available to install directly on your Android device via the [NetBird Android GitHub repository](https://github.com/netbirdio/android-client/releases).

## Configure Netbird on Android

### First Launch

Upon first launch, NetBird will inform you that it's using the default managemet server.

![firstinstall](https://raw.githubusercontent.com/netbirdio/docs/14375a092774f250d45a85f6d5f3c524d99fd111/public/docs-static/img/get-started/android/first-install-dialog.png)

Select 'Continue' to ackownledge and you'll be greeted with the app's main screen.

![mainscreen](https://raw.githubusercontent.com/netbirdio/docs/14375a092774f250d45a85f6d5f3c524d99fd111/public/docs-static/img/get-started/android/main-screen.png)

### Management Server Configuration

> **Note**
>
> This step only applies to self-hosted users, or cloud users enrolling the device with a setup key. If you're a cloud user and are *not* enrolling the device with a setup key, you can safely skip to [Connecting to Your Network](#connecting-to-your-network)

Select the hamburger menu on the top left of the main screen and navigate to the 'Change Server' menu.

![changeserver](https://raw.githubusercontent.com/netbirdio/docs/14375a092774f250d45a85f6d5f3c524d99fd111/public/docs-static/img/get-started/android/change-server-menu-item.png)

Changing servers erases the device's current NetBird config, so you'll need to confirm the action before proceeding:

![confirmeraseconfig](https://raw.githubusercontent.com/netbirdio/docs/14375a092774f250d45a85f6d5f3c524d99fd111/public/docs-static/img/get-started/android/confirm-erase-config.png)

Enter your management server endpoint. For cloud users, this is `https://api.netbird.io:443`. For self-hosted users, it's usually `https://your_management_server_url:443`, but you can refer to the `exposedAddress` field in your `config.yaml` (or `management.json` for older multi-container setups) if you're unsure.

If enrolling the device with a setup key, select '+ Add this device with a setup key' and enter your setup key. Select 'change' to apply your new management server config, and if successful you'll see the following:

![serverchanged](https://raw.githubusercontent.com/netbirdio/docs/14375a092774f250d45a85f6d5f3c524d99fd111/public/docs-static/img/get-started/android/server-changed.png)

You're now ready to connect to your Netbird network!

#### Connecting to Your Network

Select the NetBird logo button to connect. The app will request permission to create a VPN connection:

![vpnconnectionrequest](https://raw.githubusercontent.com/netbirdio/docs/14375a092774f250d45a85f6d5f3c524d99fd111/public/docs-static/img/get-started/android/vpn-connection-request.png)

Select 'OK'. If you didn't enter a setup key in the 'Change Server' menu, then you'll need to authenticate with your SSO provider. NetBird will open a browser window where you'll be instructed to sign in to your SSO provider.

After logging in, NetBird will confirm your authentication. Once you close the browser window, your device should be connected!

## What's next?

- Configure the device's [group & policy](https://docs.netbird.io/manage/access-control) memberships
