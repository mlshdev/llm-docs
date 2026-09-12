> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcard/transmit(_:reply:)](https://developer.apple.com/documentation/cryptotokenkit/tksmartcard/transmit(_:reply:))

# transmit(\_:reply:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Transmits data in Application Protocol Data Unit (APDU) format to the Smart Card.

## Declaration

```swift
func transmit(_ request: Data, reply: @escaping @Sendable (Data?, (any Error)?) -> Void)
```

```swift
func transmit(_ request: Data) async throws -> Data
```

## Parameters

- `request`: The APDU request data.
- `reply`: - **response**: The APDU response data, or `nil` if communication with the Smart Card failed.
  - **error**: Contains information about the the error preventing the transaction from being established.

  The `NSError` object is created in the [TKErrorDomain](../tkerrordomain.md) domain with a code in the [TKError.Code](../tkerror/code.md) enumeration.

<a id="Discussion"></a>

## Discussion

You should only call this method after a session to the Smart Card has been established using the [beginSession(reply:)](beginsession%28reply_%29.md) method, and before the session is terminated using the [endSession()](endsession%28%29.md) method.

## See Also

### Communicating with the Smart Card

- [beginSession(reply:)](beginsession%28reply_%29.md): Begins a session with the Smart Card.
- [endSession()](endsession%28%29.md): Completes any pending transmissions and ends the session to the Smart Card.

# transmitRequest:reply: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Transmits data in Application Protocol Data Unit (APDU) format to the Smart Card.

## Declaration

```objectivec
- (void) transmitRequest:(NSData *) request reply:(void (^)(NSData *response, NSError *error)) reply;
```

## Parameters

- `request`: The APDU request data.
- `reply`: - **response**: The APDU response data, or `nil` if communication with the Smart Card failed.
  - **error**: Contains information about the the error preventing the transaction from being established.

  The `NSError` object is created in the [TKErrorDomain](../tkerrordomain.md) domain with a code in the [TKErrorCode](../tkerror/code.md) enumeration.

<a id="Discussion"></a>

## Discussion

You should only call this method after a session to the Smart Card has been established using the [beginSessionWithReply:](beginsession%28reply_%29.md) method, and before the session is terminated using the [endSession](endsession%28%29.md) method.

## See Also

### Communicating with the Smart Card

- [beginSessionWithReply:](beginsession%28reply_%29.md): Begins a session with the Smart Card.
- [endSession](endsession%28%29.md): Completes any pending transmissions and ends the session to the Smart Card.
