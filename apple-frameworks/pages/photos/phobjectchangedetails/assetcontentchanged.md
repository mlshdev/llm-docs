> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phobjectchangedetails/assetcontentchanged](https://developer.apple.com/documentation/photos/phobjectchangedetails/assetcontentchanged)

# assetContentChanged (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether the asset’s photo or video content has changed.

## Declaration

```swift
var assetContentChanged: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If this value `true`, you can use the [PHImageManager](../phimagemanager.md) class to retrieve updated content.

This value is `false` if the asset has not changed or if the change details do not refer to a [PHAsset](../phasset.md) object.

## See Also

### Getting Change Information

- [objectWasDeleted](objectwasdeleted.md): A Boolean value that indicates whether the object has been deleted from the Photos library.

# assetContentChanged (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether the asset’s photo or video content has changed.

## Declaration

```objectivec
@property (atomic, readonly) BOOL assetContentChanged;
```

<a id="Discussion"></a>

## Discussion

If this value `true`, you can use the [PHImageManager](../phimagemanager.md) class to retrieve updated content.

This value is `false` if the asset has not changed or if the change details do not refer to a [PHAsset](../phasset.md) object.

## See Also

### Getting Change Information

- [objectWasDeleted](objectwasdeleted.md): A Boolean value that indicates whether the object has been deleted from the Photos library.
