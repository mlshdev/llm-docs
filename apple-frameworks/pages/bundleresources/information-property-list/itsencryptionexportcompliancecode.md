> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/itsencryptionexportcompliancecode

# ITSEncryptionExportComplianceCode

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.0+

The export compliance code provided by App Store Connect for apps that require it.

## Details

`ITSEncryptionExportComplianceCode`

<a id="Discussion"></a>

## Discussion

Include this key in your app’s [Information Property List](../information-property-list.md) file if you set the [ITSAppUsesNonExemptEncryption](itsappusesnonexemptencryption.md) key’s value to `YES`. Set the value for this key to the code that Apple sends you after successfully reviewing export compliance documentation that you provide through App Store Connect.

For additional information, see [Complying with Encryption Export Regulations](../../security/complying-with-encryption-export-regulations.md).

## See Also

### Security

- [NSUpdateSecurityPolicy](nsupdatesecuritypolicy.md): A dictionary that identifies which apps or installer packages the operating system allows to write to the app’s bundle.
- [NSAppBundlesUsageDescription](nsappbundlesusagedescription.md): A message that tells people why the app needs to access the contents of other apps’ bundles.
- [NSAppDataUsageDescription](nsappdatausagedescription.md): A message that tells people why the app needs to access files in other apps’ sandbox containers.
- [NSUserTrackingUsageDescription](nsusertrackingusagedescription.md): A message that explains the purpose for accessing data that an app can use to track a person or device.
- [NSUserTrackingMarkdownUsageDescription](nsusertrackingmarkdownusagedescription.md): Beta. A message that explains the purpose for accessing data that an application can use to track a person or device.
- [NSAppleEventsUsageDescription](nsappleeventsusagedescription.md): A message that tells people why the app is requesting the ability to send Apple events.
- [NSSystemAdministrationUsageDescription](nssystemadministrationusagedescription.md): A message in macOS that tells people why the app is requesting to manipulate the system configuration.
- [ITSAppUsesNonExemptEncryption](itsappusesnonexemptencryption.md): A Boolean value indicating whether the app uses encryption.
