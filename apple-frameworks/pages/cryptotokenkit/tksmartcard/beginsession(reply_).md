> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcard/beginsession(reply:)](https://developer.apple.com/documentation/cryptotokenkit/tksmartcard/beginsession(reply:))

# beginSession(reply:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Begins a session with the Smart Card.

## Declaration

```swift
func beginSession(reply: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func beginSession() async throws -> Bool
```

## Parameters

- `reply`: - **success**: Whether the session could be established successfully.
  - **error**: Contains information about the error preventing the transaction from being established.

  The `NSError` object is created in the [TKErrorDomain](../tkerrordomain.md) domain with a code in the [TKError.Code](../tkerror/code.md) enumeration.

<a id="Discussion"></a>

## Discussion

This method will fail if there is already an existing session for the Smart Card.

Calls to this method must be balanced with calls to [endSession()](endsession%28%29.md).

## See Also

### Communicating with the Smart Card

- [transmit(\_:reply:)](transmit%28__reply_%29.md): Transmits data in Application Protocol Data Unit (APDU) format to the Smart Card.
- [endSession()](endsession%28%29.md): Completes any pending transmissions and ends the session to the Smart Card.

# beginSessionWithReply: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Begins a session with the Smart Card.

## Declaration

```objectivec
- (void) beginSessionWithReply:(void (^)(BOOL success, NSError *error)) reply;
```

## Parameters

- `reply`: - **success**: Whether the session could be established successfully.
  - **error**: Contains information about the error preventing the transaction from being established.

  The `NSError` object is created in the [TKErrorDomain](../tkerrordomain.md) domain with a code in the [TKErrorCode](../tkerror/code.md) enumeration.

<a id="Discussion"></a>

## Discussion

This method will fail if there is already an existing session for the Smart Card.

Calls to this method must be balanced with calls to [endSession](endsession%28%29.md).

## See Also

### Communicating with the Smart Card

- [transmitRequest:reply:](transmit%28__reply_%29.md): Transmits data in Application Protocol Data Unit (APDU) format to the Smart Card.
- [endSession](endsession%28%29.md): Completes any pending transmissions and ends the session to the Smart Card.
