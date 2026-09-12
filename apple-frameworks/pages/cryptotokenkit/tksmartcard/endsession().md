> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcard/endsession()](https://developer.apple.com/documentation/cryptotokenkit/tksmartcard/endsession())

# endSession() (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Completes any pending transmissions and ends the session to the Smart Card.

## Declaration

```swift
func endSession()
```

<a id="Discussion"></a>

## Discussion

Calls to this method should balance calls to [beginSession(reply:)](beginsession%28reply_%29.md).

## See Also

### Communicating with the Smart Card

- [beginSession(reply:)](beginsession%28reply_%29.md): Begins a session with the Smart Card.
- [transmit(\_:reply:)](transmit%28__reply_%29.md): Transmits data in Application Protocol Data Unit (APDU) format to the Smart Card.

# endSession (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Completes any pending transmissions and ends the session to the Smart Card.

## Declaration

```objectivec
- (void) endSession;
```

<a id="Discussion"></a>

## Discussion

Calls to this method should balance calls to [beginSessionWithReply:](beginsession%28reply_%29.md).

## See Also

### Communicating with the Smart Card

- [beginSessionWithReply:](beginsession%28reply_%29.md): Begins a session with the Smart Card.
- [transmitRequest:reply:](transmit%28__reply_%29.md): Transmits data in Application Protocol Data Unit (APDU) format to the Smart Card.
