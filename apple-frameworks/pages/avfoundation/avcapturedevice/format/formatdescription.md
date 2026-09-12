> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/formatdescription](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/formatdescription)

# formatDescription (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

An object describing the capture format.

## Declaration

```swift
var formatDescription: CMFormatDescription { get }
```

<a id="Discussion"></a>

## Discussion

Calling this method doesn’t assume ownership of the returned [CMFormatDescription](../../../coremedia/cmformatdescription.md).

## See Also

### Determining supported media formats

- [mediaType](mediatype.md): A constant describing the media type of an `AVCaptureDevice` active or supported format.

# formatDescription (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

An object describing the capture format.

## Declaration

```objectivec
@property (nonatomic, readonly) CMFormatDescriptionRef formatDescription;
```

<a id="Discussion"></a>

## Discussion

Calling this method doesn’t assume ownership of the returned [CMFormatDescriptionRef](../../../coremedia/cmformatdescription.md).

## See Also

### Determining supported media formats

- [mediaType](mediatype.md): A constant describing the media type of an `AVCaptureDevice` active or supported format.
