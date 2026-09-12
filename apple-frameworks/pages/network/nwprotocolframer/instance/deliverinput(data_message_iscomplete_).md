> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolframer/instance/deliverinput(data:message:iscomplete:)](https://developer.apple.com/documentation/network/nwprotocolframer/instance/deliverinput(data:message:iscomplete:))

# deliverInput(data:message:isComplete:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Delivers an inbound message containing arbitrary data from your protocol to the application.

## Declaration

```swift
final func deliverInput(data: Data, message: NWProtocolFramer.Message, isComplete: Bool)
```

## See Also

### Delivering Input

- [parseInput(minimumIncompleteLength:maximumLength:parse:)](parseinput%28minimumincompletelength_maximumlength_parse_%29.md): Examines the content of input data while in your input handler.
- [deliverInputNoCopy(length:message:isComplete:)](deliverinputnocopy%28length_message_iscomplete_%29.md): Delivers an inbound message containing a specific number of next received bytes.
- [passThroughInput()](passthroughinput%28%29.md): Indicates that your protocol no longer needs to handle input data.
