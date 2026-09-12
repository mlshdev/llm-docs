> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemoutputpulldelegate/outputmediadatawillchange(_:)](https://developer.apple.com/documentation/avfoundation/avplayeritemoutputpulldelegate/outputmediadatawillchange(_:))

# outputMediaDataWillChange(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Tells the delegate that new samples are about to arrive.

## Declaration

```swift
optional func outputMediaDataWillChange(_ sender: AVPlayerItemOutput)
```

## Parameters

- `sender`: The output object that sent the message.

<a id="Discussion"></a>

## Discussion

You can use this method to prepare for any new sample data. This method is called at some point after a call to your video output object’s `requestNotificationOfMediaDataChangeWithAdvanceInterval:` method.

## See Also

### Responding to pixel buffer changes

- [outputSequenceWasFlushed(\_:)](outputsequencewasflushed%28__%29.md): Tells the delegate that a new sample sequence is commencing.

# outputMediaDataWillChange: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Tells the delegate that new samples are about to arrive.

## Declaration

```objectivec
- (void) outputMediaDataWillChange:(AVPlayerItemOutput *) sender;
```

## Parameters

- `sender`: The output object that sent the message.

<a id="Discussion"></a>

## Discussion

You can use this method to prepare for any new sample data. This method is called at some point after a call to your video output object’s `requestNotificationOfMediaDataChangeWithAdvanceInterval:` method.

## See Also

### Responding to pixel buffer changes

- [outputSequenceWasFlushed:](outputsequencewasflushed%28__%29.md): Tells the delegate that a new sample sequence is commencing.
