> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidererror/code/localversionconflictingwithserver](https://developer.apple.com/documentation/fileprovider/nsfileprovidererror/code/localversionconflictingwithserver)

# NSFileProviderError.Code.localVersionConflictingWithServer (Swift)

**Framework:** File Provider  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Returned by createItemBasedOnTemplate or modifyItem if the provider does not wish to sync the item.

## Declaration

```swift
case localVersionConflictingWithServer
```

<a id="discussion"></a>

## Discussion

When a provider returns this error, it causes the item to be excluded from sync. The system will ensure that the item (and any descendents, in case of a directory), are downloaded, and then issue a deleteItem call to the provider for the item.

The system will call createItemBasedOnTemplate for the item, whenever the item’s metadata changes on disk. This ensures that the provider’s rules for excluding from sync are re-evaluated whenever the item’s properties change.

<a id="Re-evaluating-items"></a>

## Re-evaluating items

If the provider wishes for previously excluded items to be re-sent as createItemBasedOnTemplate calls, the provider may call -\[NSFileProviderManager signalErrorResolved:completionHandler:\] with this error code.

If the provider wishes to exclude items which had previously been synced, the provider may call -\[NSFileProviderManager requestModificationOfFields:forItemWithIdentifier:options:completionHandler:\]. This will cause the system to send a new modifyItem call to the provider. At that time, the provider can choose to return this error code.

# NSFileProviderErrorLocalVersionConflictingWithServer (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · macOS 26.0+ · visionOS 26.0+

Returned by createItemBasedOnTemplate or modifyItem if the provider does not wish to sync the item.

## Declaration

```objectivec
NSFileProviderErrorLocalVersionConflictingWithServer
```

<a id="discussion"></a>

## Discussion

When a provider returns this error, it causes the item to be excluded from sync. The system will ensure that the item (and any descendents, in case of a directory), are downloaded, and then issue a deleteItem call to the provider for the item.

The system will call createItemBasedOnTemplate for the item, whenever the item’s metadata changes on disk. This ensures that the provider’s rules for excluding from sync are re-evaluated whenever the item’s properties change.

<a id="Re-evaluating-items"></a>

## Re-evaluating items

If the provider wishes for previously excluded items to be re-sent as createItemBasedOnTemplate calls, the provider may call -\[NSFileProviderManager signalErrorResolved:completionHandler:\] with this error code.

If the provider wishes to exclude items which had previously been synced, the provider may call -\[NSFileProviderManager requestModificationOfFields:forItemWithIdentifier:options:completionHandler:\]. This will cause the system to send a new modifyItem call to the provider. At that time, the provider can choose to return this error code.
