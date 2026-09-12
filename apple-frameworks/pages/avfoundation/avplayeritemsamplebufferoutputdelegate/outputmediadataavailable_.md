> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemsamplebufferoutputdelegate/outputmediadataavailable:](https://developer.apple.com/documentation/avfoundation/avplayeritemsamplebufferoutputdelegate/outputmediadataavailable:)

# outputMediaDataAvailable:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Invoked when the output becomes ready to deliver a sample buffer.

## Declaration

```objectivec
- (void) outputMediaDataAvailable:(AVPlayerItemSampleBufferOutput *) output;
```

## See Also

### Responding to output events

- [outputSequenceWasRestarted:](outputsequencewasrestarted_.md): Invoked when the output is commencing a new sequence.
