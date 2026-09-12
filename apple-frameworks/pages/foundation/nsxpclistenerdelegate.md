> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpclistenerdelegate](https://developer.apple.com/documentation/foundation/nsxpclistenerdelegate)

# NSXPCListenerDelegate (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The protocol that delegates to the XPC listener use to accept or reject new connections.

## Declaration

```swift
protocol NSXPCListenerDelegate : NSObjectProtocol
```

## Topics

### Instance Methods

- [listener(\_:shouldAcceptNewConnection:)](nsxpclistenerdelegate/listener%28__shouldacceptnewconnection_%29.md): Accepts or rejects a new connection to the listener.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### XPC Services

- [NSXPCListener](nsxpclistener.md): A listener that waits for new incoming connections, configures them, and accepts or rejects them.
- [NSXPCListenerEndpoint](nsxpclistenerendpoint.md): An object that names a specific XPC listener.

# NSXPCListenerDelegate (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The protocol that delegates to the XPC listener use to accept or reject new connections.

## Declaration

```objectivec
@protocol NSXPCListenerDelegate <NSObject>
```

## Topics

### Instance Methods

- [listener:shouldAcceptNewConnection:](nsxpclistenerdelegate/listener%28__shouldacceptnewconnection_%29.md): Accepts or rejects a new connection to the listener.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### XPC Services

- [NSXPCListener](nsxpclistener.md): A listener that waits for new incoming connections, configures them, and accepts or rejects them.
- [NSXPCListenerEndpoint](nsxpclistenerendpoint.md): An object that names a specific XPC listener.
