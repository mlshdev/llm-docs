> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpccoder/userinfo](https://developer.apple.com/documentation/foundation/nsxpccoder/userinfo)

# userInfo (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An optional user information object associated with the coder.

## Declaration

```swift
var userInfo: (any NSObjectProtocol)? { get set }
```

## See Also

### Inspecting the Coder

- [connection](connection.md): The connection currently performing encoding or decoding.

# userInfo (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An optional user information object associated with the coder.

## Declaration

```objectivec
@property (retain, nullable) id<NSObject> userInfo;
```

## See Also

### Inspecting the Coder

- [connection](connection.md): The connection currently performing encoding or decoding.
