> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocomposition/customvideocompositorclass](https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/customvideocompositorclass)

# customVideoCompositorClass (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 26.0) · iPadOS 7.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.9+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

The custom compositor class to use.

## Declaration

```swift
var customVideoCompositorClass: (any AVVideoCompositing.Type)? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, indicating that the internal video compositor is used

# customVideoCompositorClass (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The custom compositor class to use.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) Class<AVVideoCompositing> * customVideoCompositorClass;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, indicating that the internal video compositor is used
