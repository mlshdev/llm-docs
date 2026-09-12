> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaitemartwork/image(at:)](https://developer.apple.com/documentation/mediaplayer/mpmediaitemartwork/image(at:))

# image(at:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

Returns the artwork image for an item at the given size.

## Declaration

```swift
func image(at size: CGSize) -> UIImage?
```

```swift
func image(at size: CGSize) -> NSImage?
```

## Parameters

- `size`: The size, in points, for the new [UIImage](../../uikit/uiimage.md) object.

<a id="return-value"></a>

## Return Value

The artwork at the requested size.

<a id="Discussion"></a>

## Discussion

The returned image is the smallest available image that’s at least as large as the requested size.

## See Also

### Related Documentation

- [iPod Library Access Programming Guide](https://developer.apple.com/library/archive/documentation/Audio/Conceptual/iPodLibraryAccess_Guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008765)

### Using a media item image

- [bounds](bounds.md): The maximum size, in points, of the image associated with the media item artwork.

# imageWithSize: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

Returns the artwork image for an item at the given size.

## Declaration

```objectivec
- (UIImage *) imageWithSize:(CGSize) size;
```

```objectivec
- (NSImage *) imageWithSize:(CGSize) size;
```

## Parameters

- `size`: The size, in points, for the new [UIImage](../../uikit/uiimage.md) object.

<a id="return-value"></a>

## Return Value

The artwork at the requested size.

<a id="Discussion"></a>

## Discussion

The returned image is the smallest available image that’s at least as large as the requested size.

## See Also

### Related Documentation

- [iPod Library Access Programming Guide](https://developer.apple.com/library/archive/documentation/Audio/Conceptual/iPodLibraryAccess_Guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008765)

### Using a media item image

- [bounds](bounds.md): The maximum size, in points, of the image associated with the media item artwork.
