> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemoutputpulldelegate/outputsequencewasflushed(_:)](https://developer.apple.com/documentation/avfoundation/avplayeritemoutputpulldelegate/outputsequencewasflushed(_:))

# outputSequenceWasFlushed(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Tells the delegate that a new sample sequence is commencing.

## Declaration

```swift
optional func outputSequenceWasFlushed(_ output: AVPlayerItemOutput)
```

## Parameters

- `output`: The output object that sent the message.

<a id="Discussion"></a>

## Discussion

This method is called after any attempt to seek or change the playback direction of the item’s content. If you are maintaining any queued future samples, you can use your implementation of this method to discard those samples.

## See Also

### Responding to pixel buffer changes

- [outputMediaDataWillChange(\_:)](outputmediadatawillchange%28__%29.md): Tells the delegate that new samples are about to arrive.

# outputSequenceWasFlushed: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Tells the delegate that a new sample sequence is commencing.

## Declaration

```objectivec
- (void) outputSequenceWasFlushed:(AVPlayerItemOutput *) output;
```

## Parameters

- `output`: The output object that sent the message.

<a id="Discussion"></a>

## Discussion

This method is called after any attempt to seek or change the playback direction of the item’s content. If you are maintaining any queued future samples, you can use your implementation of this method to discard those samples.

## See Also

### Responding to pixel buffer changes

- [outputMediaDataWillChange:](outputmediadatawillchange%28__%29.md): Tells the delegate that new samples are about to arrive.
