> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpcinterface/init(with:)](https://developer.apple.com/documentation/foundation/nsxpcinterface/init(with:))

# init(with:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an NSXPCInterface instance for a given protocol.

## Declaration

```swift
init(with protocol: Protocol)
```

<a id="Discussion"></a>

## Discussion

Most interfaces do not need any further configuration. Interfaces with collection classes or additional proxy objects should be configured using the other methods in this class.

# interfaceWithProtocol: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an NSXPCInterface instance for a given protocol.

## Declaration

```objectivec
+ (NSXPCInterface *) interfaceWithProtocol:(Protocol *) protocol;
```

<a id="Discussion"></a>

## Discussion

Most interfaces do not need any further configuration. Interfaces with collection classes or additional proxy objects should be configured using the other methods in this class.
