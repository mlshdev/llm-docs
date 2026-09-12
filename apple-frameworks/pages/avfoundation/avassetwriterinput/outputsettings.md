> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/outputsettings](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/outputsettings)

# outputSettings (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The settings to use for encoding media data you append to the output.

## Declaration

```swift
var outputSettings: [String : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

A value of `nil` indicates that the input passes the samples through to the output without reencoding them.

## See Also

### Inspecting an input

- [mediaType](mediatype.md): The media type of the samples that the input accepts.
- [sourceFormatHint](sourceformathint.md): A hint about the format of the sample buffers to append to the input.

# outputSettings (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The settings to use for encoding media data you append to the output.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDictionary<NSString *,id> * outputSettings;
```

<a id="Discussion"></a>

## Discussion

A value of `nil` indicates that the input passes the samples through to the output without reencoding them.

## See Also

### Inspecting an input

- [mediaType](mediatype.md): The media type of the samples that the input accepts.
- [sourceFormatHint](sourceformathint.md): A hint about the format of the sample buffers to append to the input.
