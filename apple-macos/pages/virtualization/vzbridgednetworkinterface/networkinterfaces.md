> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzbridgednetworkinterface/networkinterfaces

# networkInterfaces (Swift)

**Framework:** Virtualization  
**Kind:** Type Property  
**Availability:** macOS 11.0+

The bridged network interfaces that you may use in your virtual machine.

## Declaration

```swift
class var networkInterfaces: [VZBridgedNetworkInterface] { get }
```

<a id="Discussion"></a>

## Discussion

The system creates the objects in this property based on the available interfaces in the host machine.

# networkInterfaces (Objective-C)

**Framework:** Virtualization  
**Kind:** Type Property  
**Availability:** macOS 11.0+

The bridged network interfaces that you may use in your virtual machine.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<VZBridgedNetworkInterface *> * networkInterfaces;
```

<a id="Discussion"></a>

## Discussion

The system creates the objects in this property based on the available interfaces in the host machine.
