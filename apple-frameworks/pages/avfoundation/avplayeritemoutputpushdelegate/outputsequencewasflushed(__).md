> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemoutputpushdelegate/outputsequencewasflushed(_:)](https://developer.apple.com/documentation/avfoundation/avplayeritemoutputpushdelegate/outputsequencewasflushed(_:))

# outputSequenceWasFlushed(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Tells the delegate that the output is starting a new sequence of media data.

## Declaration

```swift
optional func outputSequenceWasFlushed(_ output: AVPlayerItemOutput)
```

## Parameters

- `output`: The [AVPlayerItemOutput](../avplayeritemoutput.md) object.

<a id="Discussion"></a>

## Discussion

This method is invoked after any seeking and change in playback direction. If you are maintaining any queued future media data, you may want to discard those objects after receiving this message.

# outputSequenceWasFlushed: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tells the delegate that the output is starting a new sequence of media data.

## Declaration

```objectivec
- (void) outputSequenceWasFlushed:(AVPlayerItemOutput *) output;
```

## Parameters

- `output`: The [AVPlayerItemOutput](../avplayeritemoutput.md) object.

<a id="Discussion"></a>

## Discussion

This method is invoked after any seeking and change in playback direction. If you are maintaining any queued future media data, you may want to discard those objects after receiving this message.
