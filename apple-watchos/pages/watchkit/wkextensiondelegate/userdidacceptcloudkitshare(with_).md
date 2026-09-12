> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextensiondelegate/userdidacceptcloudkitshare(with:)](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/userdidacceptcloudkitshare(with:))

# userDidAcceptCloudKitShare(with:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 9.2)

Tells the delegate that the app has access to shared information in CloudKit.

## Declaration

```swift
optional func userDidAcceptCloudKitShare(with cloudKitShareMetadata: CKShareMetadata)
```

## Parameters

- `cloudKitShareMetadata`: Information about the CloudKit data that is available to the app. Use this object to retrieve information about the [CKShare](https://developer.apple.com/documentation/cloudkit/ckshare) object and the associated records that are available.

<a id="Discussion"></a>

## Discussion

Use this method to respond to a CloudKit Sharing invitation. In your implementation, accept the share by scheduling a [CKAcceptSharesOperation](https://developer.apple.com/documentation/cloudkit/ckacceptsharesoperation) object that contains the provided metadata object. After the user accepts the share, you can begin fetching records and incorporating the resulting data into your app.

The system launches the app, as necessary, before calling this method.

# userDidAcceptCloudKitShareWithMetadata: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 9.2)

Tells the delegate that the app has access to shared information in CloudKit.

## Declaration

```objectivec
- (void) userDidAcceptCloudKitShareWithMetadata:(CKShareMetadata *) cloudKitShareMetadata;
```

## Parameters

- `cloudKitShareMetadata`: Information about the CloudKit data that is available to the app. Use this object to retrieve information about the [CKShare](https://developer.apple.com/documentation/cloudkit/ckshare) object and the associated records that are available.

<a id="Discussion"></a>

## Discussion

Use this method to respond to a CloudKit Sharing invitation. In your implementation, accept the share by scheduling a [CKAcceptSharesOperation](https://developer.apple.com/documentation/cloudkit/ckacceptsharesoperation) object that contains the provided metadata object. After the user accepts the share, you can begin fetching records and incorporating the resulting data into your app.

The system launches the app, as necessary, before calling this method.
