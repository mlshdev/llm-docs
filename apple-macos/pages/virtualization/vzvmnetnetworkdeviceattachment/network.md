> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvmnetnetworkdeviceattachment/network](https://developer.apple.com/documentation/virtualization/vzvmnetnetworkdeviceattachment/network)

# network (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The network object that the you initialize the attachment with.

## Declaration

```swift
var network: vmnet_network_ref { get }
```

## See Also

### Creating the vmnet network device attachment

- [init(network:)](init%28network_%29.md): Creates the attachment and configures it with the specified data.

# network (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The network object that the you initialize the attachment with.

## Declaration

```objectivec
@property (readonly) vmnet_network_ref network;
```

## See Also

### Creating the vmnet network device attachment

- [initWithNetwork:](init%28network_%29.md): Creates the attachment and configures it with the specified data.
