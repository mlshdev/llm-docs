> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/connectionoptions/cloudkitsharemetadata](https://developer.apple.com/documentation/uikit/uiscene/connectionoptions/cloudkitsharemetadata)

# cloudKitShareMetadata (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Information about the CloudKit data that’s now available to the app.

## Declaration

```swift
var cloudKitShareMetadata: CKShareMetadata? { get }
```

<a id="Discussion"></a>

## Discussion

If an invitation to share CloudKit data is available at scene-connection time, this property contains the metadata you use to accept that invitation. Use the information in the object to create and schedule a [CKAcceptSharesOperation](../../../cloudkit/ckacceptsharesoperation.md) object. After your operation object finishes successfully, you can begin fetching records and incorporating the resulting data into your app.

# cloudKitShareMetadata (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Information about the CloudKit data that’s now available to the app.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CKShareMetadata * cloudKitShareMetadata;
```

<a id="Discussion"></a>

## Discussion

If an invitation to share CloudKit data is available at scene-connection time, this property contains the metadata you use to accept that invitation. Use the information in the object to create and schedule a [CKAcceptSharesOperation](../../../cloudkit/ckacceptsharesoperation.md) object. After your operation object finishes successfully, you can begin fetching records and incorporating the resulting data into your app.
