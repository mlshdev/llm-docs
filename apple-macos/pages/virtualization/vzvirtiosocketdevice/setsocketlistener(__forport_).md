> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiosocketdevice/setsocketlistener(_:forport:)](https://developer.apple.com/documentation/virtualization/vzvirtiosocketdevice/setsocketlistener(_:forport:))

# setSocketListener(\_:forPort:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Configures an object to monitor the specified port for new connections.

## Declaration

```swift
func setSocketListener(_ listener: VZVirtioSocketListener, forPort port: UInt32)
```

## Parameters

- `listener`: The [VZVirtioSocketListener](../vzvirtiosocketlistener.md) object to monitor the port. This object replaces the previous listener object, if any.
- `port`: The port number to monitor.

<a id="Discussion"></a>

## Discussion

You can register the same listener object on multiple ports. When the guest operating system opens a connection to the port, the listener object notifies its associated delegate.

## See Also

### Configuring Port Listeners

- [removeSocketListener(forPort:)](removesocketlistener%28forport_%29.md): Removes the listener object from the specfied port.

# setSocketListener:forPort: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Configures an object to monitor the specified port for new connections.

## Declaration

```objectivec
- (void) setSocketListener:(VZVirtioSocketListener *) listener forPort:(uint32_t) port;
```

## Parameters

- `listener`: The [VZVirtioSocketListener](../vzvirtiosocketlistener.md) object to monitor the port. This object replaces the previous listener object, if any.
- `port`: The port number to monitor.

<a id="Discussion"></a>

## Discussion

You can register the same listener object on multiple ports. When the guest operating system opens a connection to the port, the listener object notifies its associated delegate.

## See Also

### Configuring Port Listeners

- [removeSocketListenerForPort:](removesocketlistener%28forport_%29.md): Removes the listener object from the specfied port.
