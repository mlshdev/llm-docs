> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffervideorenderer/stoprequestingmediadata()](https://developer.apple.com/documentation/avfoundation/avsamplebuffervideorenderer/stoprequestingmediadata())

# stopRequestingMediaData() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Cancels any current requestMediaDataWhenReadyOnQueue:usingBlock: call.

> Cancel the receiver's Task instead

## Declaration

```swift
func stopRequestingMediaData()
```

<a id="discussion"></a>

## Discussion

This method may be called from outside the block or from within the block.

# stopRequestingMediaData (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Cancels any current requestMediaDataWhenReadyOnQueue:usingBlock: call.

## Declaration

```objectivec
- (void) stopRequestingMediaData;
```

<a id="discussion"></a>

## Discussion

This method may be called from outside the block or from within the block.
