> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionstreamtask/stopsecureconnection()](https://developer.apple.com/documentation/foundation/urlsessionstreamtask/stopsecureconnection())

# stopSecureConnection() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Completes any enqueued reads and writes, and closes the secure connection.

> TLS cannot be disabled once it is enabled

## Declaration

```swift
func stopSecureConnection()
```

## See Also

### Starting and stopping secure connections

- [startSecureConnection()](startsecureconnection%28%29.md): Completes any enqueued reads and writes, and establishes a secure connection.

# stopSecureConnection (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Completes any enqueued reads and writes, and closes the secure connection.

> TLS cannot be disabled once it is enabled

## Declaration

```objectivec
- (void) stopSecureConnection;
```

## See Also

### Starting and stopping secure connections

- [startSecureConnection](startsecureconnection%28%29.md): Completes any enqueued reads and writes, and establishes a secure connection.
