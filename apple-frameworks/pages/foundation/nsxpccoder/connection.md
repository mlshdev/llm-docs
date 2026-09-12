> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpccoder/connection](https://developer.apple.com/documentation/foundation/nsxpccoder/connection)

# connection (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The connection currently performing encoding or decoding.

## Declaration

```swift
var connection: NSXPCConnection? { get }
```

## See Also

### Inspecting the Coder

- [userInfo](userinfo.md): An optional user information object associated with the coder.

# connection (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The connection currently performing encoding or decoding.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSXPCConnection * connection;
```

## See Also

### Inspecting the Coder

- [userInfo](userinfo.md): An optional user information object associated with the coder.
