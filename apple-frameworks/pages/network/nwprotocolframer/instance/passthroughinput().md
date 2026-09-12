> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolframer/instance/passthroughinput()](https://developer.apple.com/documentation/network/nwprotocolframer/instance/passthroughinput())

# passThroughInput()

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Indicates that your protocol no longer needs to handle input data.

## Declaration

```swift
final func passThroughInput()
```

## See Also

### Delivering Input

- [parseInput(minimumIncompleteLength:maximumLength:parse:)](parseinput%28minimumincompletelength_maximumlength_parse_%29.md): Examines the content of input data while in your input handler.
- [deliverInput(data:message:isComplete:)](deliverinput%28data_message_iscomplete_%29.md): Delivers an inbound message containing arbitrary data from your protocol to the application.
- [deliverInputNoCopy(length:message:isComplete:)](deliverinputnocopy%28length_message_iscomplete_%29.md): Delivers an inbound message containing a specific number of next received bytes.
