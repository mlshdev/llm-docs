> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/application(_:userdidacceptcloudkitsharewith:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/application(_:userdidacceptcloudkitsharewith:))

# application(\_:userDidAcceptCloudKitShareWith:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Tells the delegate when the user accepts a CloudKit sharing invitation.

## Declaration

```swift
@MainActor optional func application(_ application: NSApplication, userDidAcceptCloudKitShareWith metadata: CKShareMetadata)
```

## Parameters

- `application`: The shared app object.
- `metadata`: The metadata associated with the invitation. Use the URL of the metadata’s [CKShare](https://developer.apple.com/documentation/cloudkit/ckshare) object and the [containerIdentifier](https://developer.apple.com/documentation/cloudkit/ckshare/metadata/containeridentifier) property to schedule a [CKAcceptSharesOperation](https://developer.apple.com/documentation/cloudkit/ckacceptsharesoperation) object.

<a id="Discussion"></a>

## Discussion

Use the provided metadata to begin sharing the specified content with the current user. For more information, see [CloudKit](https://developer.apple.com/documentation/cloudkit).

# application:userDidAcceptCloudKitShareWithMetadata: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Tells the delegate when the user accepts a CloudKit sharing invitation.

## Declaration

```objectivec
- (void) application:(NSApplication *) application userDidAcceptCloudKitShareWithMetadata:(CKShareMetadata *) metadata;
```

## Parameters

- `application`: The shared app object.
- `metadata`: The metadata associated with the invitation. Use the URL of the metadata’s [CKShare](https://developer.apple.com/documentation/cloudkit/ckshare) object and the [containerIdentifier](https://developer.apple.com/documentation/cloudkit/ckshare/metadata/containeridentifier) property to schedule a [CKAcceptSharesOperation](https://developer.apple.com/documentation/cloudkit/ckacceptsharesoperation) object.

<a id="Discussion"></a>

## Discussion

Use the provided metadata to begin sharing the specified content with the current user. For more information, see [CloudKit](https://developer.apple.com/documentation/cloudkit).
