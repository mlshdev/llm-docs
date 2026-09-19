> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/nssystemadministrationusagedescription

# NSSystemAdministrationUsageDescription (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.14+

A message in macOS that tells people why the app is requesting to manipulate the system configuration.

## Details

`NSSystemAdministrationUsageDescription`

<a id="Discussion"></a>

## Discussion

Use this key if your app uses certain APIs that manipulate system configuration, like [ODRecordSetValue(\_:\_:\_:\_:)](https://developer.apple.com/documentation/opendirectory/odrecordsetvalue%28_:_:_:_:%29).

> **Important**

>  This key is required if your app uses APIs that manipulate the system configuration.

## See Also

### Security

- [NSUpdateSecurityPolicy](nsupdatesecuritypolicy.md): A dictionary that identifies which apps or installer packages the operating system allows to write to the app’s bundle.
- [NSAppBundlesUsageDescription](nsappbundlesusagedescription.md): A message that tells people why the app needs to access the contents of other apps’ bundles.
- [NSAppDataUsageDescription](nsappdatausagedescription.md): A message that tells people why the app needs to access files in other apps’ sandbox containers.
- [NSUserTrackingUsageDescription](nsusertrackingusagedescription.md): A message that explains the purpose for accessing data that an app can use to track a person or device.
- [NSUserTrackingMarkdownUsageDescription](nsusertrackingmarkdownusagedescription.md): Beta. A message that explains the purpose for accessing data that an application can use to track a person or device.
- [NSAppleEventsUsageDescription](nsappleeventsusagedescription.md): A message that tells people why the app is requesting the ability to send Apple events.
- [ITSAppUsesNonExemptEncryption](itsappusesnonexemptencryption.md): A Boolean value indicating whether the app uses encryption.
- [ITSEncryptionExportComplianceCode](itsencryptionexportcompliancecode.md): The export compliance code provided by App Store Connect for apps that require it.

# NSSystemAdministrationUsageDescription (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.14+

A message in macOS that tells people why the app is requesting to manipulate the system configuration.

## Details

`NSSystemAdministrationUsageDescription`

<a id="Discussion"></a>

## Discussion

Use this key if your app uses certain APIs that manipulate system configuration, like [ODRecordSetValue](https://developer.apple.com/documentation/opendirectory/odrecordsetvalue%28_:_:_:_:%29).

> **Important**

>  This key is required if your app uses APIs that manipulate the system configuration.

## See Also

### Security

- [NSUpdateSecurityPolicy](nsupdatesecuritypolicy.md): A dictionary that identifies which apps or installer packages the operating system allows to write to the app’s bundle.
- [NSAppBundlesUsageDescription](nsappbundlesusagedescription.md): A message that tells people why the app needs to access the contents of other apps’ bundles.
- [NSAppDataUsageDescription](nsappdatausagedescription.md): A message that tells people why the app needs to access files in other apps’ sandbox containers.
- [NSUserTrackingUsageDescription](nsusertrackingusagedescription.md): A message that explains the purpose for accessing data that an app can use to track a person or device.
- [NSUserTrackingMarkdownUsageDescription](nsusertrackingmarkdownusagedescription.md): Beta. A message that explains the purpose for accessing data that an application can use to track a person or device.
- [NSAppleEventsUsageDescription](nsappleeventsusagedescription.md): A message that tells people why the app is requesting the ability to send Apple events.
- [ITSAppUsesNonExemptEncryption](itsappusesnonexemptencryption.md): A Boolean value indicating whether the app uses encryption.
- [ITSEncryptionExportComplianceCode](itsencryptionexportcompliancecode.md): The export compliance code provided by App Store Connect for apps that require it.
