> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/cksharingsupported](https://developer.apple.com/documentation/bundleresources/information-property-list/cksharingsupported)

# CKSharingSupported (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS 10.12+ · visionOS 1.0+

A Boolean value that indicates your app supports CloudKit Sharing.

## Details

`CKSharingSupported`

<a id="Discussion"></a>

## Discussion

If your app supports CloudKit Sharing, add this key to your app’s `Info.plist` file with a value of [true](https://developer.apple.com/documentation/swift/true). This tells the system to launch your app when the user taps or clicks a share’s URL. For example, one they receive in an email or an iMessage from the share’s owner.

Before your app launches, CloudKit verifies that the user has an active iCloud account and, for private shares, that it matches their participant details. Following successful verification, CloudKit provides the share’s metadata to your app’s scene, or application, delegate. The method it calls varies by platform and app configuration. For more information, see [CKShare.Metadata](../../cloudkit/ckshare/metadata.md).

To indicate that your app supports CloudKit Sharing:

1. Select your project’s `Info.plist` file in the Project navigator in Xcode.
2. Click the Add button (+) next to any key in the property list editor and press Return.
3. Type the key name `CKSharingSupported`.
4. Choose Boolean from the pop-up menu in the Type column.
5. Choose YES from the pop-up menu in the Value column.
6. Save your changes.

## See Also

### Network

- [NSAdvertisingAttributionReportEndpoint](nsadvertisingattributionreportendpoint.md): The URL where Private Click Measurement and SKAdNetwork send attribution information.
- [NSAppTransportSecurity](nsapptransportsecurity.md): A description of changes made to the default security for HTTP connections.
- [NSBonjourServices](nsbonjourservices.md): Bonjour service types browsed by the app.

# CKSharingSupported (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS 10.12+ · visionOS 1.0+

A Boolean value that indicates your app supports CloudKit Sharing.

## Details

`CKSharingSupported`

<a id="Discussion"></a>

## Discussion

If your app supports CloudKit Sharing, add this key to your app’s `Info.plist` file with a value of [true](https://developer.apple.com/documentation/swift/true). This tells the system to launch your app when the user taps or clicks a share’s URL. For example, one they receive in an email or an iMessage from the share’s owner.

Before your app launches, CloudKit verifies that the user has an active iCloud account and, for private shares, that it matches their participant details. Following successful verification, CloudKit provides the share’s metadata to your app’s scene, or application, delegate. The method it calls varies by platform and app configuration. For more information, see [CKShareMetadata](../../cloudkit/ckshare/metadata.md).

To indicate that your app supports CloudKit Sharing:

1. Select your project’s `Info.plist` file in the Project navigator in Xcode.
2. Click the Add button (+) next to any key in the property list editor and press Return.
3. Type the key name `CKSharingSupported`.
4. Choose Boolean from the pop-up menu in the Type column.
5. Choose YES from the pop-up menu in the Value column.
6. Save your changes.

## See Also

### Network

- [NSAdvertisingAttributionReportEndpoint](nsadvertisingattributionreportendpoint.md): The URL where Private Click Measurement and SKAdNetwork send attribution information.
- [NSAppTransportSecurity](nsapptransportsecurity.md): A description of changes made to the default security for HTTP connections.
- [NSBonjourServices](nsbonjourservices.md): Bonjour service types browsed by the app.
