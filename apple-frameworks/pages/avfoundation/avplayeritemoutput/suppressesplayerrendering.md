> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemoutput/suppressesplayerrendering](https://developer.apple.com/documentation/avfoundation/avplayeritemoutput/suppressesplayerrendering)

# suppressesPlayerRendering (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the player object renders the receiver’s output.

## Declaration

```swift
var suppressesPlayerRendering: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [false](https://developer.apple.com/documentation/swift/false) (the default), the player object handles the rendering of the receiver’s associated output. Change the value of this property to [true](https://developer.apple.com/documentation/swift/true) to suppress the rendering of the media data associated with this object.

# suppressesPlayerRendering (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the player object renders the receiver’s output.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL suppressesPlayerRendering;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [false](https://developer.apple.com/documentation/swift/false) (the default), the player object handles the rendering of the receiver’s associated output. Change the value of this property to [true](https://developer.apple.com/documentation/swift/true) to suppress the rendering of the media data associated with this object.
