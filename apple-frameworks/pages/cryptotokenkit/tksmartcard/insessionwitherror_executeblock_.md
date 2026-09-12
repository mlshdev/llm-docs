> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcard/insessionwitherror:executeblock:](https://developer.apple.com/documentation/cryptotokenkit/tksmartcard/insessionwitherror:executeblock:)

# inSessionWithError:executeBlock:

**Interface language:** Objective-C

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Synchronously begins a session, executes the given block, and ends the session.

## Declaration

```objectivec
- (BOOL) inSessionWithError:(NSError **) error executeBlock:(BOOL (^)(NSError **error)) block;
```

## Parameters

- `error`: On return, if an error occurred when attempting to create a session or execute the block, contains details about the error.
- `block`: A block to be called in the context of the created session. This block returns a Boolean value indicating whether communication was successful.

  - **error**: To indicate that an error occurred during the session, populate this with an `NSError` object containing details and return [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the session was successfully created and the specified block returns [true](https://developer.apple.com/documentation/swift/true); otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Transmitting Data

- [sendIns:p1:p2:data:le:reply:](sendins_p1_p2_data_le_reply_.md): Asynchronously transmits an APDU command to the card, returning the response in a completion handler.
- [sendIns:p1:p2:data:le:sw:error:](sendins_p1_p2_data_le_sw_error_.md): Synchronously transmits an APDU command to the card and returns the response.
