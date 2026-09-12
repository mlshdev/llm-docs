> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionformatconformer/conformscaptionstotimerange](https://developer.apple.com/documentation/avfoundation/avcaptionformatconformer/conformscaptionstotimerange)

# conformsCaptionsToTimeRange (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A Boolean value that indicates whether to conform the time range of a canonical caption.

## Declaration

```swift
var conformsCaptionsToTimeRange: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this property value is [false](https://developer.apple.com/documentation/swift/false). If you set the value to [true](https://developer.apple.com/documentation/swift/true), this object conforms the time range of captions to fit its encoded data.

When this object conforms captions to CAE608 format, it encodes them so that each CAE608 2-byte control code fits into one frame duration (1001/30000).

## See Also

### Conforming captions

- [conformedCaption(for:)](conformedcaption%28for_%29.md): Creates a caption that conforms to a specific format.

# conformsCaptionsToTimeRange (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A Boolean value that indicates whether to conform the time range of a canonical caption.

## Declaration

```objectivec
@property (nonatomic) BOOL conformsCaptionsToTimeRange;
```

<a id="Discussion"></a>

## Discussion

By default, this property value is [false](https://developer.apple.com/documentation/swift/false). If you set the value to [true](https://developer.apple.com/documentation/swift/true), this object conforms the time range of captions to fit its encoded data.

When this object conforms captions to CAE608 format, it encodes them so that each CAE608 2-byte control code fits into one frame duration (1001/30000).

## See Also

### Conforming captions

- [conformedCaptionForCaption:error:](conformedcaption%28for_%29.md): Creates a caption that conforms to a specific format.
