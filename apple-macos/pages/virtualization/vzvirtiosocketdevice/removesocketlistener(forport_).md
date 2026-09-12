> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiosocketdevice/removesocketlistener(forport:)](https://developer.apple.com/documentation/virtualization/vzvirtiosocketdevice/removesocketlistener(forport:))

# removeSocketListener(forPort:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Removes the listener object from the specfied port.

## Declaration

```swift
func removeSocketListener(forPort port: UInt32)
```

## Parameters

- `port`: The port number to clear. If the specified port doesn’t have a listener object, this method does nothing.

## See Also

### Configuring Port Listeners

- [setSocketListener(\_:forPort:)](setsocketlistener%28__forport_%29.md): Configures an object to monitor the specified port for new connections.

# removeSocketListenerForPort: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Removes the listener object from the specfied port.

## Declaration

```objectivec
- (void) removeSocketListenerForPort:(uint32_t) port;
```

## Parameters

- `port`: The port number to clear. If the specified port doesn’t have a listener object, this method does nothing.

## See Also

### Configuring Port Listeners

- [setSocketListener:forPort:](setsocketlistener%28__forport_%29.md): Configures an object to monitor the specified port for new connections.
