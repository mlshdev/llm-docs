> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/unsupportedcaptureoutputclasses](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/unsupportedcaptureoutputclasses)

# unsupportedCaptureOutputClasses (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The list of capture output subclasses not allowed for capture with this format, if any.

## Declaration

```swift
var unsupportedCaptureOutputClasses: [AnyClass] { get }
```

<a id="Discussion"></a>

## Discussion

As a rule, capture formats with a given [mediaType](mediatype.md) are available for use with all [AVCaptureOutput](../../avcaptureoutput.md) subclasses that accept that media type. However, this isn’t always the case. For example, formats for high-resolution photo capture may not support the [AVCaptureMovieFileOutput](../../avcapturemoviefileoutput.md) class due to bandwidth limitations.

# unsupportedCaptureOutputClasses (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The list of capture output subclasses not allowed for capture with this format, if any.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<Class> * unsupportedCaptureOutputClasses;
```

<a id="Discussion"></a>

## Discussion

As a rule, capture formats with a given [mediaType](mediatype.md) are available for use with all [AVCaptureOutput](../../avcaptureoutput.md) subclasses that accept that media type. However, this isn’t always the case. For example, formats for high-resolution photo capture may not support the [AVCaptureMovieFileOutput](../../avcapturemoviefileoutput.md) class due to bandwidth limitations.
