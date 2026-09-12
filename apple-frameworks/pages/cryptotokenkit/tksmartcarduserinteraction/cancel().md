> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcarduserinteraction/cancel()](https://developer.apple.com/documentation/cryptotokenkit/tksmartcarduserinteraction/cancel())

# cancel() (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Attempts to cancel an interaction started by calling [run(reply:)](run%28reply_%29.md). For certain interactions, cancellation may not be available.

## Declaration

```swift
func cancel() -> Bool
```

<a id="return-value"></a>

## Return Value

Returns [false](https://developer.apple.com/documentation/swift/false) if the operation is not running, or if cancelation is not supported.

## See Also

### Starting and Stopping

- [run(reply:)](run%28reply_%29.md): Runs the user interaction and asynchronously receives a reply.

# cancel (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Attempts to cancel an interaction started by calling [runWithReply:](run%28reply_%29.md). For certain interactions, cancellation may not be available.

## Declaration

```objectivec
- (BOOL) cancel;
```

<a id="return-value"></a>

## Return Value

Returns [false](https://developer.apple.com/documentation/swift/false) if the operation is not running, or if cancelation is not supported.

## See Also

### Starting and Stopping

- [runWithReply:](run%28reply_%29.md): Runs the user interaction and asynchronously receives a reply.
