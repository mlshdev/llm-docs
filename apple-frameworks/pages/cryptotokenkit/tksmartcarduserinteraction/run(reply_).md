> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcarduserinteraction/run(reply:)](https://developer.apple.com/documentation/cryptotokenkit/tksmartcarduserinteraction/run(reply:))

# run(reply:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Runs the user interaction and asynchronously receives a reply.

## Declaration

```swift
func run(reply: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func run() async throws -> Bool
```

## Parameters

- `reply`: - **success**: Whether the user interaction was successful.
  - **error**: Contains information about the the error that occurred during the user interaction.

  The `NSError` object is created in the [TKErrorDomain](../tkerrordomain.md) domain with a code in the [TKError.Code](../tkerror/code.md) enumeration.

## See Also

### Starting and Stopping

- [cancel()](cancel%28%29.md): Attempts to cancel an interaction started by calling [run(reply:)](run%28reply_%29.md). For certain interactions, cancellation may not be available.

# runWithReply: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Runs the user interaction and asynchronously receives a reply.

## Declaration

```objectivec
- (void) runWithReply:(void (^)(BOOL success, NSError *error)) reply;
```

## Parameters

- `reply`: - **success**: Whether the user interaction was successful.
  - **error**: Contains information about the the error that occurred during the user interaction.

  The `NSError` object is created in the [TKErrorDomain](../tkerrordomain.md) domain with a code in the [TKErrorCode](../tkerror/code.md) enumeration.

## See Also

### Starting and Stopping

- [cancel](cancel%28%29.md): Attempts to cancel an interaction started by calling [runWithReply:](run%28reply_%29.md). For certain interactions, cancellation may not be available.
