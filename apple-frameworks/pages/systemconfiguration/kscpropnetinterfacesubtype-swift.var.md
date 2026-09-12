> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/kscpropnetinterfacesubtype-swift.var](https://developer.apple.com/documentation/systemconfiguration/kscpropnetinterfacesubtype-swift.var)

# kSCPropNetInterfaceSubType (Swift)

**Framework:** System Configuration  
**Kind:** Global Variable  
**Availability:** macOS 10.1+

The Interface key `SubType`, whose value is of type `CFString`.

## Declaration

```swift
let kSCPropNetInterfaceSubType: CFString
```

<a id="Discussion"></a>

## Discussion

This key can be passed the following constants when the `Type` key has the value `PPP`:

- `kSCValNetInterfaceSubTypePPPoE`, which has the value `PPPoE`
- `kSCValNetInterfaceSubTypePPPSerial`, which has the value `PPPSerial`
- `kSCValNetInterfaceSubTypePPTP`, which has the value `PPTP`
- `kSCValNetInterfaceSubTypeL2TP`, which has the value `L2TP`

## See Also

### Constants

- [kSCPropNetInterfaceDeviceName](kscpropnetinterfacedevicename-swift.var.md): The Interface key `DeviceName`, whose value is of type `CFString`.
- [kSCPropNetInterfaceHardware](kscpropnetinterfacehardware-swift.var.md): The Interface key `Hardware`, whose value is of type `CFString`.
- [kSCPropNetInterfaceType](kscpropnetinterfacetype-swift.var.md): The Interface key `Type`, whose value is of type `CFString`.
- [kSCPropNetInterfaceSupportsModemOnHold](kscpropnetinterfacesupportsmodemonhold-swift.var.md): Deprecated. The Interface key `SupportsModemOnHold`, whose value is of type `CFNumber` and is equal to `0` or `1`.

# kSCPropNetInterfaceSubType (Objective-C)

**Framework:** System Configuration  
**Kind:** Global Variable  
**Availability:** macOS 10.1+

The Interface key `SubType`, whose value is of type `CFString`.

## Declaration

```objectivec
extern CFStringRef const kSCPropNetInterfaceSubType;
```

<a id="Discussion"></a>

## Discussion

This key can be passed the following constants when the `Type` key has the value `PPP`:

- `kSCValNetInterfaceSubTypePPPoE`, which has the value `PPPoE`
- `kSCValNetInterfaceSubTypePPPSerial`, which has the value `PPPSerial`
- `kSCValNetInterfaceSubTypePPTP`, which has the value `PPTP`
- `kSCValNetInterfaceSubTypeL2TP`, which has the value `L2TP`

## See Also

### Constants

- [kSCPropNetInterfaceDeviceName](kscpropnetinterfacedevicename-swift.var.md): The Interface key `DeviceName`, whose value is of type `CFString`.
- [kSCPropNetInterfaceHardware](kscpropnetinterfacehardware-swift.var.md): The Interface key `Hardware`, whose value is of type `CFString`.
- [kSCPropNetInterfaceType](kscpropnetinterfacetype-swift.var.md): The Interface key `Type`, whose value is of type `CFString`.
- [kSCPropNetInterfaceSupportsModemOnHold](kscpropnetinterfacesupportsmodemonhold-swift.var.md): Deprecated. The Interface key `SupportsModemOnHold`, whose value is of type `CFNumber` and is equal to `0` or `1`.
