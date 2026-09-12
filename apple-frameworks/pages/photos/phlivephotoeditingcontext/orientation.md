> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phlivephotoeditingcontext/orientation](https://developer.apple.com/documentation/photos/phlivephotoeditingcontext/orientation)

# orientation (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The image orientation of the Live Photo.

## Declaration

```swift
var orientation: CGImagePropertyOrientation { get }
```

<a id="Discussion"></a>

## Discussion

This [fullSizeImage](fullsizeimage.md) object does not reflect the Live Photo’s orientation metadata. Use this property when displaying that image to ensure that it appears to the user in the correct orientation.

## See Also

### Examining an Editing Context’s Live Photo

- [fullSizeImage](fullsizeimage.md): The unedited still photo content of the Live Photo.
- [duration](duration.md): The duration, in seconds, of the Live Photo.
- [photoTime](phototime.md): The offset, in seconds, from the beginning of the Live Photo’s duration to the time corresponding to its still photo.

# orientation (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The image orientation of the Live Photo.

## Declaration

```objectivec
@property (readonly) CGImagePropertyOrientation orientation;
```

<a id="Discussion"></a>

## Discussion

This [fullSizeImage](fullsizeimage.md) object does not reflect the Live Photo’s orientation metadata. Use this property when displaying that image to ensure that it appears to the user in the correct orientation.

## See Also

### Examining an Editing Context’s Live Photo

- [fullSizeImage](fullsizeimage.md): The unedited still photo content of the Live Photo.
- [duration](duration.md): The duration, in seconds, of the Live Photo.
- [photoTime](phototime.md): The offset, in seconds, from the beginning of the Live Photo’s duration to the time corresponding to its still photo.
