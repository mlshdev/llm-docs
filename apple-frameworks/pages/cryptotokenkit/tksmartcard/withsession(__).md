> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcard/withsession(_:)](https://developer.apple.com/documentation/cryptotokenkit/tksmartcard/withsession(_:))

# withSession(\_:)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Synchronously begins a session, executes the given closure, and ends the session.

## Declaration

```swift
func withSession<T>(_ body: @escaping () throws -> T) throws -> T
```

## Parameters

- `body`: A closure to be called in the context of the created session.

## See Also

### Transmitting Data

- [send(ins:p1:p2:data:le:reply:)](send%28ins_p1_p2_data_le_reply_%29.md): Asynchronously transmits an APDU command to the card, returning the response in a completion handler.
