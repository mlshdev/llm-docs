> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/sourceformathint](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/sourceformathint)

# sourceFormatHint (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

A hint about the format of the sample buffers to append to the input.

## Declaration

```swift
var sourceFormatHint: CMFormatDescription? { get }
```

<a id="Discussion"></a>

## Discussion

An input may use this hint to fill in missing output settings or perform additional upfront validation of samples.

> **Note**

>  To ensure successful file writing when you initialize an input with a source format hint, only append samples of this type.

## See Also

### Inspecting an input

- [mediaType](mediatype.md): The media type of the samples that the input accepts.
- [outputSettings](outputsettings.md): The settings to use for encoding media data you append to the output.

# sourceFormatHint (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

A hint about the format of the sample buffers to append to the input.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CMFormatDescriptionRef sourceFormatHint;
```

<a id="Discussion"></a>

## Discussion

An input may use this hint to fill in missing output settings or perform additional upfront validation of samples.

> **Note**

>  To ensure successful file writing when you initialize an input with a source format hint, only append samples of this type.

## See Also

### Inspecting an input

- [mediaType](mediatype.md): The media type of the samples that the input accepts.
- [outputSettings](outputsettings.md): The settings to use for encoding media data you append to the output.
