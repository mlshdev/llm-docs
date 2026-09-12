> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiosocketlistenerdelegate/listener(_:shouldacceptnewconnection:from:)](https://developer.apple.com/documentation/virtualization/vzvirtiosocketlistenerdelegate/listener(_:shouldacceptnewconnection:from:))

# listener(\_:shouldAcceptNewConnection:from:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Returns a Boolean value that indicates whether to accept a new connection from the guest operating system.

## Declaration

```swift
optional func listener(_ listener: VZVirtioSocketListener, shouldAcceptNewConnection connection: VZVirtioSocketConnection, from socketDevice: VZVirtioSocketDevice) -> Bool
```

## Parameters

- `listener`: The listener object that monitors the associated port.
- `connection`: The object that contains information about the proposed connection. Use this object to fetch port information.
- `socketDevice`: The Virtio socket device that requested the connection.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to establish the connection, or [false](https://developer.apple.com/documentation/swift/false) to reject it.

<a id="Discussion"></a>

## Discussion

Use your method’s implementation to quickly determine whether to accept or reject connection attempts. A typical implementation verifies that a connection between the specified ports is permissible. Return a result as quickly as possible, and don’t perform any long-running operations in this method.

If you don’t implement this method, the virtual machine refuses all connection requests as if this method returned [false](https://developer.apple.com/documentation/swift/false).

# listener:shouldAcceptNewConnection:fromSocketDevice: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Returns a Boolean value that indicates whether to accept a new connection from the guest operating system.

## Declaration

```objectivec
- (BOOL) listener:(VZVirtioSocketListener *) listener shouldAcceptNewConnection:(VZVirtioSocketConnection *) connection fromSocketDevice:(VZVirtioSocketDevice *) socketDevice;
```

## Parameters

- `listener`: The listener object that monitors the associated port.
- `connection`: The object that contains information about the proposed connection. Use this object to fetch port information.
- `socketDevice`: The Virtio socket device that requested the connection.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to establish the connection, or [false](https://developer.apple.com/documentation/swift/false) to reject it.

<a id="Discussion"></a>

## Discussion

Use your method’s implementation to quickly determine whether to accept or reject connection attempts. A typical implementation verifies that a connection between the specified ports is permissible. Return a result as quickly as possible, and don’t perform any long-running operations in this method.

If you don’t implement this method, the virtual machine refuses all connection requests as if this method returned [false](https://developer.apple.com/documentation/swift/false).
