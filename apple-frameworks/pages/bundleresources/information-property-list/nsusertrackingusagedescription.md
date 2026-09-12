> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsusertrackingusagedescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsusertrackingusagedescription)

# NSUserTrackingUsageDescription

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · tvOS 14.0+ · visionOS 1.0+

A message that informs the user why an app is requesting permission to use data for tracking the user or the device.

## Details

`NSUserTrackingUsageDescription`

<a id="Discussion"></a>

## Discussion

If your app calls the App Tracking Transparency API, you must provide custom text, known as a *usage-description string*, which displays as a system-permission alert request. The usage-description string tells the user why the app is requesting permission to use data for tracking the user or the device. The user has the option to grant or deny the authorization request. If you don’t include a usage-description string, your app may crash when a user first launches it.

Make sure your app requests permission to track sometime before tracking occurs. This could be at first launch or when using certain features in your app. For example, when signing on with a third-party SSO. For more information on asking permission to track, see [User privacy and data use](https://developer.apple.com/app-store/user-privacy-and-data-use/).

Set the [NSUserTrackingUsageDescription](nsusertrackingusagedescription.md) key in the [Information Property List](../information-property-list.md) (`Info.plist`):

1. Select your project’s `Info.plist` file in Xcode Project navigator.
2. Modify the file using the Xcode Property List Editor: Privacy - Tracking Usage Description.

- Use sentence-style capitalization and appropriate ending punctuation. Keep the text short and specific. You don’t need to include your app name because the system already identifies your app.
- If the title is a sentence fragment, don’t add ending punctuation.

See [Apple’s Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/app-architecture/accessing-user-data/) for example usage descriptions.

## See Also

### Security

- [NSUpdateSecurityPolicy](nsupdatesecuritypolicy.md): A dictionary that identifies which apps or installer packages the operating system allows to write to the app’s bundle.
- [NSAppBundlesUsageDescription](nsappbundlesusagedescription.md): A message that tells people why the app needs to access the contents of other apps’ bundles.
- [NSAppDataUsageDescription](nsappdatausagedescription.md): A message that tells people why the app needs to access files in other apps’ sandbox containers.
- [NSAppleEventsUsageDescription](nsappleeventsusagedescription.md): A message that tells people why the app is requesting the ability to send Apple events.
- [NSSystemAdministrationUsageDescription](nssystemadministrationusagedescription.md): A message in macOS that tells people why the app is requesting to manipulate the system configuration.
- [ITSAppUsesNonExemptEncryption](itsappusesnonexemptencryption.md): A Boolean value indicating whether the app uses encryption.
- [ITSEncryptionExportComplianceCode](itsencryptionexportcompliancecode.md): The export compliance code provided by App Store Connect for apps that require it.
