> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/technologyoverviews/app-extensions](https://developer.apple.com/documentation/technologyoverviews/app-extensions)

# App and system extensions

**Framework:** Technology Overviews

Extend the reach of your app to other parts of the system.

Apps let people experience your content within the interface you create, but sometimes people want that same content outside of your app. For example, someone using a weather app might want to see the forecast on their iPhone Lock Screen or on the face of their Apple Watch. If your server generates notifications with images, you might want people to see those images in the system’s notification interface. You deliver these types of features using app extensions.

An *app extension* is a separate bundle that ships as part of your app and vends your app’s services to other parts of the system. Because app extensions are separate from your app, the system can launch and run them separately from your app. Some app extensions have an interface that the system displays, but many app extensions simply provide information for the system to use. For example, a Spotlight Import app extension indexes the content in one of your app’s custom file types.

<a id="Choose-an-app-extension"></a>

## Choose an app extension

iOS, iPadOS, macOS, tvOS, visionOS, and watchOS support app extensions for specific features like sharing, Notification Center, or Safari. When you [add an app extension](https://developer.apple.com/documentation/xcode/configuring-a-new-target-in-your-project) to your existing app project, Xcode creates the initial code and resources and updates your project’s build settings. When you build your app, Xcode builds the app extension automatically and copies it to your [app bundle](files-and-directories.md#Bundles).

| Extension point | Description | iOS/iPadOS | macOS | tvOS | visionOS | watchOS |
| --- | --- | --- | --- | --- | --- | --- |
| [Accessory Setup Extension](../devicediscoveryextension.md) | Configure third-party media receivers that your app uses to stream audio and video content. | ✅ |  |  |  |  |
| [Account Authentication](../authenticationservices/upgrading-account-security-with-an-account-authentication-modification-extension.md) | Automatically upgrade user passwords to strong passwords, or convert accounts to use Sign in with Apple. | ✅ |  |  |  |  |
| [Action Extension](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/Action.html#//apple_ref/doc/uid/TP40014214-CH13-SW1) | Add custom actions to the share sheet to invoke your app’s functionality from any app. | ✅ | ✅ |  |  |  |
| [App Intents Extension](../appintents/app-intents.md) | Perform tasks associated with your app’s declared app intents. | ✅ | ✅ |  | ✅ | ✅ |
| [Audio Unit Extension](../audiotoolbox.md) | Create and modify audio in any app that uses sound, including music production apps such as GarageBand or Logic Pro X. | ✅ | ✅ |  | ✅ |  |
| [Authentication Services](https://developer.apple.com/videos/play/tech-talks/301/) | Streamline authentication for users by enabling single sign-on. | ✅ | ✅ |  | ✅ |  |
| [AutoFill Credential Provider](../authenticationservices/ascredentialproviderviewcontroller.md) | Surface credentials from your app in Password Autofill and pull your app’s password data into the Password AutoFill workflow. | ✅ | ✅ |  | ✅ |  |
| [Background Delivery Extension](https://developer.apple.com/documentation/financekit) | Update the on-device financial data your app manages in the background. | ✅ |  |  |  |  |
| [Background Download](../backgroundassets.md) | Download important assets shortly after app installation. | ✅ | ✅ | ✅ | ✅ |  |
| [Broadcast Setup UI Extension](../replaykit.md) | Display the UI for a broadcast you start using ReplayKit. | ✅ | ✅ | ✅ | ✅ |  |
| [Broadcast Upload Extension](../replaykit/rpbroadcastsamplehandler.md) | Broadcast content that ReplayKit captures from your app. | ✅ | ✅ | ✅ | ✅ |  |
| [Call Directory Extension](../callkit.md) | Display caller identification from your appʼs custom contact list so users know who’s calling. | ✅ |  |  | ✅ |  |
| [Capture Extension](https://developer.apple.com/documentation/lockedcameracapture) | Lets people launch your app’s camera experience from the Lock Screen, Control Center, or the Action button. | ✅ |  |  |  |  |
| [ClassKit Context Provider](../classkit/clscontextprovider.md) | Update the status of your appʼs activities so that status is visible in the Schoolwork app. | ✅ | ✅ |  | ✅ |  |
| [Contact Provider Extension](https://developer.apple.com/documentation/contactprovider/contactproviderextension) | Provide contact items to the system-wide Contacts ecosystem. | ✅ |  |  |  |  |
| [Content Blocker Extension](../safariservices/creating-a-content-blocker.md) | Provide rules for hiding elements, blocking loads, and stripping cookies from Safari requests. | ✅ | ✅ |  | ✅ |  |
| [Core Spotlight Delegate](../corespotlight/regenerating-your-app-s-indexes-on-demand.md) | Regenerate your app’s search indexes in response to system-initiated maintenance requests. | ✅ | ✅ |  | ✅ |  |
| [Custom Keyboard Extension](../uikit/creating-a-custom-keyboard.md) | Provide systemwide customized text input for unique input methods or specific languages. | ✅ |  |  |  |  |
| [Device Activity Monitor Extension](https://developer.apple.com/documentation/deviceactivity/deviceactivitymonitor) | Detect and warn about excessive time spent on app and website activities. | ✅ |  |  |  |  |
| [Device Activity Report Extension](../uikit/creating-a-custom-keyboard.md) | Receive and display device-activity information in a privacy-friendly way. | ✅ |  |  |  |  |
| [File Provider Extension](../fileprovider.md) | Let other apps access the documents and directories stored and managed by your app. | ✅ | ✅ |  | ✅ |  |
| [File Provider UI Extension](../fileproviderui.md) | Add custom actions to the document browserʼs context menu for documents that your app manages. | ✅ |  |  |  |  |
| [File System Extension](https://developer.apple.com/documentation/fskit) | Provide the implementation for a custom file system. |  | ✅ |  |  |  |
| [Finder Sync](https://developer.apple.com/documentation/findersync) | Keep files in sync with a back-end storage service. |  | ✅ |  |  |  |
| [Hotspot Authentication](../networkextension/nehotspotauthenticationprovider.md) | Authenticate the current device on a Wi-Fi hotspot. | ✅ |  |  |  |  |
| [Hotspot Evaluation](../networkextension/nehotspotevaluationprovider.md) | Evaluate the available Wi-Fi hotspots in a privacy-friendly way. | ✅ |  |  |  |  |
| [Identity Document Provider](../identitydocumentservicesui.md) | Validates the digital credentials that your app manages. | ✅ |  |  |  |  |
| [iMessage Extension](https://developer.apple.com/documentation/messages) | Allow users to send text, stickers, media files, and interactive messages. | ✅ |  |  |  |  |
| [Intents Extension](../sirikit/creating-an-intents-app-extension.md) | Let users interact with your app using Siri. | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Intents UI Extension](../sirikit/creating-an-intents-ui-extension.md) | Customize the interface for interactions with your app in Siri conversations or Maps. | ✅ |  |  | ✅ |  |
| [Live Caller ID Lookup Extension](../identitylookup/getting-up-to-date-calling-and-blocking-information-for-your-app.md) | Provide caller ID and call-blocking services from a server you maintain. Available in iOS only. | ✅ |  |  |  |  |
| [Location Push Service Extension](../corelocation/creating-a-location-push-service-extension.md) | Enable a location sharing app – with a user’s authorization – to query a user’s location in response to a push from Apple Push Notification service (APNs). | ✅ |  |  |  |  |
| [Mail](https://developer.apple.com/documentation/mailkit/meextension) | Enhance Mail by adding custom actions, blocking content, signing and encoding messages, and more. |  | ✅ |  |  |  |
| [Matter Extension](../mattersupport/adding-matter-support-to-your-ecosystem.md) | Perform required configuration of a newly added Matter device. | ✅ | ✅ |  | ✅ |  |
| [Media Device Discovery](../devicediscoveryextension/dddiscoveryextension.md) | Discover third-party media receivers that your app can use to stream audio and video content. | ✅ |  |  | ✅ |  |
| [Media Extension](https://developer.apple.com/documentation/mediaextension) | Support media assets that the system doesn’t support natively. |  | ✅ |  |  |  |
| [Message Filter Extension](../identitylookup.md) | Identify and filter unwanted SMS and MMS messages. | ✅ |  |  | ✅ |  |
| [Network Extension](../networkextension.md) | Provide system-level networking services such as VPN, proxies, or content filtering. | ✅ | ✅ | ✅ | ✅ |  |
| [Notification Content Extension](../usernotificationsui/customizing-the-appearance-of-notifications.md) | Customize the appearance of your app’s notification alerts. | ✅ | ✅ |  | ✅ |  |
| [Notification Service Extension](../usernotifications/modifying-content-in-newly-delivered-notifications.md) | Modify the payload of a remote notification before it’s displayed on the user’s device. | ✅ | ✅ |  | ✅ | ✅ |
| [Persistent Token Extension](../cryptotokenkit/authenticating-users-with-a-cryptographic-token.md) | Grant access to user accounts and the keychain using a token. | ✅ | ✅ |  | ✅ |  |
| [Photo Editing Extension](../photokit/creating-photo-editing-extensions.md) | Allow your app to edit assets directly within the Photos app. | ✅ | ✅ |  |  |  |
| [Photo Project Extension](../photokit/creating-a-slideshow-project-extension-for-photos.md) | Augment the macOS Photos app with extensions that support project creation. |  | ✅ |  |  |  |
| [Print Service Extension](../uikit/uiprintserviceextension.md) | Locate and set up an AirPrint printer and make it available as a printer destination. | ✅ |  |  | ✅ |  |
| [Quick Look Preview Extension](../quicklook.md) | Provide previews of documents your app owns so they can be viewed in any app. | ✅ | ✅ |  |  |  |
| [Safari Extension](../safariservices.md) | Extend the web-browsing experience in Safari by leveraging web technologies and native code. | ✅ | ✅ |  | ✅ |  |
| [Share Extension](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/Share.html#//apple_ref/doc/uid/TP40014214-CH12-SW1) | Let users post to your social-network service from any app. | ✅ | ✅ |  |  |  |
| [Shield Action Extension](https://developer.apple.com/documentation/managedsettings/shieldactiondelegate) | Manage the system’s response to shield actions, which hide the content of apps and websites. | ✅ |  |  |  |  |
| [Shield Configuration](https://developer.apple.com/documentation/managedsettingsui) | Customize the appearance of shields to match the style of your app. | ✅ |  |  |  |  |
| [Smart Card Token Extension](../cryptotokenkit/authenticating-users-with-a-cryptographic-token.md) | Grant access to user accounts and the keychain using a hardware-based token. |  | ✅ |  |  |  |
| [Spotlight Import Extension](../corespotlight/csimportextension.md) | Make content in your app searchable in Spotlight, Safari, Siri, and more. | ✅ | ✅ |  | ✅ |  |
| [Sticker Pack Extension](https://developer.apple.com/documentation/messages) | Add custom stickers to Messages. | ✅ |  |  |  |  |
| [Thumbnail Extension](../quicklookthumbnailing/providing-thumbnails-of-your-custom-file-types.md) | Display thumbnails of your custom document types in all apps. | ✅ | ✅ |  | ✅ |  |
| [TV Top Shelf](../tvservices.md) | Help users discover your app by providing Top Shelf content and a description of your tvOS app. |  |  | ✅ |  |  |
| [Unwanted Communication](../identitylookup/sms-and-call-spam-reporting.md) | Block incoming phone calls using your app’s custom unsolicited caller database. | ✅ |  |  | ✅ |  |
| [URL Filter Network](../networkextension/neurlfiltercontrolprovider.md) | Filter URLs using an on-device data set or an off-device server. | ✅ |  |  |  |  |
| [Virtual Conference](../eventkit/ekvirtualconferenceprovider.md) | Integrate your video conferencing service directly into events on user’s calendars. | ✅ | ✅ |  | ✅ |  |
| [Widget Extension](../widgetkit/creating-a-widget-extension.md) | Show relevant, glanceable content from your app on the iOS Home Screen and Lock Screen, macOS Notification Center, and as complications in watchOS. | ✅ | ✅ |  | ✅ | ✅ |
| [Xcode Source Editor](https://developer.apple.com/documentation/xcodekit/creating-a-source-editor-extension) | Provide custom editing features directly inside Xcode’s source editor. |  | ✅ |  |  |  |

<a id="Share-data-with-your-app"></a>

## Share data with your app

The system runs app extensions as separate processes, so they don’t automatically share your app’s resources or permissions. Configure your app extension to run independently whenever possible. If you must share data between your app and app extension, [create an App Group](https://developer.apple.com/documentation/xcode/configuring-app-groups) and give access to both processes.

<a id="Host-custom-extensions-from-your-app"></a>

## Host custom extensions from your app

If your app supports contributions from outside apps, you can define your own app extensions and run them in a safe environment using the [ExtensionFoundation](../extensionfoundation.md) framework. Custom app extensions are a way for you to add new capabilities to your app. For example, a graphics editing app might support new types of filters or visual effects. If your app lets app extensions provide a custom interface, the [ExtensionKit](../extensionkit.md) framework helps you present that interface securely.

<a id="Implement-low-level-services-using-system-extensions"></a>

## Implement low-level services using system extensions

Create a system extension to add low-level capabilities that previously required modifications to the system kernel. Apple devices support the following types of system extensions:

- [Network extensions](../networkextension.md) specify a system’s network configuration, create VPNs, filter network content, manage DNS configurations, and more.
- [Endpoint security extensions](https://developer.apple.com/documentation/endpointsecurity) monitor system events for malicious activity and provide a response.
- [DriverKit extensions](hardware-level-interactions.md#Build-drivers-to-support-custom-hardware-features) communicate with connected hardware devices.

In macOS, use the [System Extensions](https://developer.apple.com/documentation/systemextensions) framework to install and upgrade system extensions. In iPadOS, the system automatically discovers and upgrades system extensions. Because system extensions modify system behaviors, they must contain appropriate entitlements so the system can verify the extension is genuine. [Install extensions](https://developer.apple.com/documentation/systemextensions/installing-system-extensions-and-drivers) when your app first runs to make them available to the system.

> **Important**

> Build system extensions with extra care, and test your code thoroughly before deploying it to customer devices. Although the code itself runs in user space, bugs in your code can prevent people from accessing important features.
