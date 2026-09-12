> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/medecodeframestatus/framedropped](https://developer.apple.com/documentation/mediaextension/medecodeframestatus/framedropped)

# frameDropped (Swift)

**Framework:** MediaExtension  
**Kind:** Type Property  
**Availability:** macOS 14.0+

A frame decode operation status that indicates the system dropped the output of the frame for a reason other than an error.

## Declaration

```swift
static var frameDropped: MEDecodeFrameStatus { get }
```

<a id="Discussion"></a>

## Discussion

The decoder sets this value if [doNotOutputFrame](../medecodeframeoptions/donotoutputframe.md) is [true](https://developer.apple.com/documentation/swift/true).

# MEDecodeFrameFrameDropped (Objective-C)

**Framework:** MediaExtension  
**Kind:** Enumeration Case  
**Availability:** macOS 14.0+

A frame decode operation status that indicates the system dropped the output of the frame for a reason other than an error.

## Declaration

```objectivec
MEDecodeFrameFrameDropped
```

<a id="Discussion"></a>

## Discussion

The decoder sets this value if [doNotOutputFrame](../medecodeframeoptions/donotoutputframe.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Inspecting a status

- [MEDecodeFrameNoStatus](medecodeframenostatus.md)
