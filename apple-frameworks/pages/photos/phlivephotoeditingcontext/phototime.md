> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phlivephotoeditingcontext/phototime](https://developer.apple.com/documentation/photos/phlivephotoeditingcontext/phototime)

# photoTime (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The offset, in seconds, from the beginning of the Live Photo’s duration to the time corresponding to its still photo.

## Declaration

```swift
var photoTime: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

To create time-based effects in your [frameProcessor](frameprocessor.md) block, use this property together with the [duration](duration.md) property.

## See Also

### Examining an Editing Context’s Live Photo

- [fullSizeImage](fullsizeimage.md): The unedited still photo content of the Live Photo.
- [duration](duration.md): The duration, in seconds, of the Live Photo.
- [orientation](orientation.md): The image orientation of the Live Photo.

# photoTime (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The offset, in seconds, from the beginning of the Live Photo’s duration to the time corresponding to its still photo.

## Declaration

```objectivec
@property (readonly) CMTime photoTime;
```

<a id="Discussion"></a>

## Discussion

To create time-based effects in your [frameProcessor](frameprocessor.md) block, use this property together with the [duration](duration.md) property.

## See Also

### Examining an Editing Context’s Live Photo

- [fullSizeImage](fullsizeimage.md): The unedited still photo content of the Live Photo.
- [duration](duration.md): The duration, in seconds, of the Live Photo.
- [orientation](orientation.md): The image orientation of the Live Photo.
