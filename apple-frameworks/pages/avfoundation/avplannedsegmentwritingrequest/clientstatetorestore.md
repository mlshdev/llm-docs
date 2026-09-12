> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplannedsegmentwritingrequest/clientstatetorestore](https://developer.apple.com/documentation/avfoundation/avplannedsegmentwritingrequest/clientstatetorestore)

# clientStateToRestore (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The client state persisted from the previous segment, if any. Specifically, this is the NSData provided to the previous segment’s finishWithClientState: method. The client is responsible to restore its client state before writing the current segment. For example, clients such as compositors with a temporal element may need some processing history of previous samples in order to generate an output sample at time N. This will be nil for algorithms that are stateless.

## Declaration

```swift
var clientStateToRestore: Data? { get }
```

# clientStateToRestore (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The client state persisted from the previous segment, if any. Specifically, this is the NSData provided to the previous segment’s finishWithClientState: method. The client is responsible to restore its client state before writing the current segment. For example, clients such as compositors with a temporal element may need some processing history of previous samples in order to generate an output sample at time N. This will be nil for algorithms that are stateless.

## Declaration

```objectivec
@property (readonly, nullable) NSData * clientStateToRestore;
```

## See Also

### Managing client state

- [finishWithClientState:](finishwithclientstate_.md): Clients must call this method after all writing activities for the intermediate segment file have successfully completed. If called with nil, this is equivalent to calling finish.
