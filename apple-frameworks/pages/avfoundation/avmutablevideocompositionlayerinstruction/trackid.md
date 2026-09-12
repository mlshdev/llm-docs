> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocompositionlayerinstruction/trackid](https://developer.apple.com/documentation/avfoundation/avmutablevideocompositionlayerinstruction/trackid)

# trackID (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 26.0) · iPadOS 4.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.7+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

The track identifier of the source track to which the compositor applies the instruction.

> Use AVVideoCompositionLayerInstruction.Configuration instead

## Declaration

```swift
var trackID: CMPersistentTrackID { get set }
```

# trackID (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The track identifier of the source track to which the compositor applies the instruction.

## Declaration

```objectivec
@property (nonatomic, assign) CMPersistentTrackID trackID;
```
