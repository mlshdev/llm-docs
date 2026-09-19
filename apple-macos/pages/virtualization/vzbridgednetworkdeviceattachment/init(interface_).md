> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzbridgednetworkdeviceattachment/init(interface:)

# init(interface:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 11.0+

Creates the attachment from a bridged network interface object.

## Declaration

```swift
init(interface: VZBridgedNetworkInterface)
```

## Parameters

- `interface`: An existing network interface of the host computer. Get a list of available interfaces from the [networkInterfaces](../vzbridgednetworkinterface/networkinterfaces.md) property of [VZBridgedNetworkInterface](../vzbridgednetworkinterface.md).

<a id="return-value"></a>

## Return Value

An attachment object for the specified network interface.

# initWithInterface: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Creates the attachment from a bridged network interface object.

## Declaration

```objectivec
- (instancetype) initWithInterface:(VZBridgedNetworkInterface *) interface;
```

## Parameters

- `interface`: An existing network interface of the host computer. Get a list of available interfaces from the [networkInterfaces](../vzbridgednetworkinterface/networkinterfaces.md) property of [VZBridgedNetworkInterface](../vzbridgednetworkinterface.md).

<a id="return-value"></a>

## Return Value

An attachment object for the specified network interface.
