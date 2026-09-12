> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemvideooutput/requestnotificationofmediadatachange(withadvanceinterval:)](https://developer.apple.com/documentation/avfoundation/avplayeritemvideooutput/requestnotificationofmediadatachange(withadvanceinterval:))

# requestNotificationOfMediaDataChange(withAdvanceInterval:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Tells the receiver that the video out put client is entering a quiescent state.

## Declaration

```swift
func requestNotificationOfMediaDataChange(withAdvanceInterval interval: TimeInterval)
```

## Parameters

- `interval`: The amount of time to wait before notifying the delegate of the media change.

<a id="Discussion"></a>

## Discussion

Call this method before you suspend your use of a [CVDisplayLink](../../corevideo/cvdisplaylink.md) type or a [CADisplayLink](../../quartzcore/cadisplaylink.md) object. After the interval expires, the video output object notifies its delegate that it should resume the display link. If the interval value you specify is large, the delegate is notified as soon as possible rather than waiting.

Do not call this method repeatedly to force the delegate to be notified for each sample.

# requestNotificationOfMediaDataChangeWithAdvanceInterval: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Tells the receiver that the video out put client is entering a quiescent state.

## Declaration

```objectivec
- (void) requestNotificationOfMediaDataChangeWithAdvanceInterval:(NSTimeInterval) interval;
```

## Parameters

- `interval`: The amount of time to wait before notifying the delegate of the media change.

<a id="Discussion"></a>

## Discussion

Call this method before you suspend your use of a [CVDisplayLinkRef](../../corevideo/cvdisplaylink.md) type or a [CADisplayLink](../../quartzcore/cadisplaylink.md) object. After the interval expires, the video output object notifies its delegate that it should resume the display link. If the interval value you specify is large, the delegate is notified as soon as possible rather than waiting.

Do not call this method repeatedly to force the delegate to be notified for each sample.
