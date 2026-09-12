> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phobjectchangedetails/objectwasdeleted](https://developer.apple.com/documentation/photos/phobjectchangedetails/objectwasdeleted)

# objectWasDeleted (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether the object has been deleted from the Photos library.

## Declaration

```swift
var objectWasDeleted: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If this value is `true`, the asset or collection has been permanently deleted from the Photos library.

To instead track the removal of assets from collections (or collections from collection lists), fetch the collection’s contents and use the [changeDetails(for:)](../phchange/changedetails%28for_%29-33a6n.md) method to track changes to the fetch result.

## See Also

### Getting Change Information

- [assetContentChanged](assetcontentchanged.md): A Boolean value that indicates whether the asset’s photo or video content has changed.

# objectWasDeleted (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether the object has been deleted from the Photos library.

## Declaration

```objectivec
@property (atomic, readonly) BOOL objectWasDeleted;
```

<a id="Discussion"></a>

## Discussion

If this value is `true`, the asset or collection has been permanently deleted from the Photos library.

To instead track the removal of assets from collections (or collections from collection lists), fetch the collection’s contents and use the [changeDetails(for:)](../phchange/changedetails%28for_%29-33a6n.md) method to track changes to the fetch result.

## See Also

### Getting Change Information

- [assetContentChanged](assetcontentchanged.md): A Boolean value that indicates whether the asset’s photo or video content has changed.
