> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolframerimplementation/handleinput(framer:)](https://developer.apple.com/documentation/network/nwprotocolframerimplementation/handleinput(framer:))

# handleInput(framer:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Notifies your protocol that new inbound data is available to parse.

## Declaration

```swift
func handleInput(framer: NWProtocolFramer.Instance) -> Int
```

## See Also

### Handling Data

- [handleOutput(framer:message:messageLength:isComplete:)](handleoutput%28framer_message_messagelength_iscomplete_%29.md): Notifies your protocol about a new outbound message.
