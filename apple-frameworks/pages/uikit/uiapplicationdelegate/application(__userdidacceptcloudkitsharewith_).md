> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:userdidacceptcloudkitsharewith:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:userdidacceptcloudkitsharewith:))

# application(\_:userDidAcceptCloudKitShareWith:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 26.0) · iPadOS 10.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 10.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Tells the delegate that the app now has access to shared information in CloudKit.

> Use UIScene lifecycle and windowScene(\_:userDidAcceptCloudKitShareWith:) from UIWindowSceneDelegate instead.

## Declaration

```swift
optional func application(_ application: UIApplication, userDidAcceptCloudKitShareWith cloudKitShareMetadata: CKShareMetadata)
```

## Parameters

- `application`: The shared app object.
- `cloudKitShareMetadata`: Information about the CloudKit data that is now available to the app. Use this object to retrieve information about the [CKShare](../../cloudkit/ckshare.md) object and the associated records that are now available.

<a id="Discussion"></a>

## Discussion

If your app doesn’t support scenes, use this method to respond to a CloudKit Sharing invitation. In your implementation, accept the share by scheduling a [CKAcceptSharesOperation](../../cloudkit/ckacceptsharesoperation.md) object that contains the metadata object in the `cloudKitShareMetadata` parameter. After the share has been accepted, you can begin fetching records and incorporating the resulting data into your app. For a scene-based app, accept the invitation in your window scene delegate’s [windowScene(\_:userDidAcceptCloudKitShareWith:)](../uiwindowscenedelegate/windowscene%28__userdidacceptcloudkitsharewith_%29.md) method.

The system launches the app, as needed, before calling this method.

# application:userDidAcceptCloudKitShareWithMetadata: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 26.0) · iPadOS 10.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 10.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Tells the delegate that the app now has access to shared information in CloudKit.

> Use UIScene lifecycle and windowScene(\_:userDidAcceptCloudKitShareWith:) from UIWindowSceneDelegate instead.

## Declaration

```objectivec
- (void) application:(UIApplication *) application userDidAcceptCloudKitShareWithMetadata:(CKShareMetadata *) cloudKitShareMetadata;
```

## Parameters

- `application`: The shared app object.
- `cloudKitShareMetadata`: Information about the CloudKit data that is now available to the app. Use this object to retrieve information about the [CKShare](../../cloudkit/ckshare.md) object and the associated records that are now available.

<a id="Discussion"></a>

## Discussion

If your app doesn’t support scenes, use this method to respond to a CloudKit Sharing invitation. In your implementation, accept the share by scheduling a [CKAcceptSharesOperation](../../cloudkit/ckacceptsharesoperation.md) object that contains the metadata object in the `cloudKitShareMetadata` parameter. After the share has been accepted, you can begin fetching records and incorporating the resulting data into your app. For a scene-based app, accept the invitation in your window scene delegate’s [windowScene:userDidAcceptCloudKitShareWithMetadata:](../uiwindowscenedelegate/windowscene%28__userdidacceptcloudkitsharewith_%29.md) method.

The system launches the app, as needed, before calling this method.
