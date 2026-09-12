> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzgenericplatformconfiguration/isnestedvirtualizationsupported](https://developer.apple.com/documentation/virtualization/vzgenericplatformconfiguration/isnestedvirtualizationsupported)

# isNestedVirtualizationSupported (Swift)

**Framework:** Virtualization  
**Kind:** Type Property  
**Availability:** macOS 15.0+

A Boolean value that describes whether the platform configuration supports nested virtualization.

## Declaration

```swift
class var isNestedVirtualizationSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  Nested virtualization is available for Mac with the M3 chip, and later.

Use this property to check whether support is available for the platform. As the following example shows, if the framework supports nested virtualization on the host, use [isNestedVirtualizationEnabled](isnestedvirtualizationenabled.md) to enable the feature:

**Swift**

```swift
if needsNestedVirtualization && VZGenericPlatformConfiguration.isNestedVirtualizationSupported {
    genericPlatformConfiguration.isNestedVirtualizationEnabled = true
}
```

**Objective-C**

```objc
if (needsNestedVirtualization && VZGenericPlatformConfiguration.isNestedVirtualizationSupported) {
    genericPlatformConfiguration.nestedVirtualizationEnabled = YES;
}
```

## See Also

### Identifying the platform configuration

- [machineIdentifier](machineidentifier.md): A value that represents a unique identifier for the virtual machine.
- [isNestedVirtualizationEnabled](isnestedvirtualizationenabled.md): A Boolean value that indicates whether nested virtualization is in an enabled state.
- [VZGenericMachineIdentifier](../vzgenericmachineidentifier.md): An object that represents a unique identifier for a virtual machine.

# nestedVirtualizationSupported (Objective-C)

**Framework:** Virtualization  
**Kind:** Type Property  
**Availability:** macOS 15.0+

A Boolean value that describes whether the platform configuration supports nested virtualization.

## Declaration

```objectivec
@property (class, readonly, getter=isNestedVirtualizationSupported) BOOL nestedVirtualizationSupported;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  Nested virtualization is available for Mac with the M3 chip, and later.

Use this property to check whether support is available for the platform. As the following example shows, if the framework supports nested virtualization on the host, use [nestedVirtualizationEnabled](isnestedvirtualizationenabled.md) to enable the feature:

**Swift**

```swift
if needsNestedVirtualization && VZGenericPlatformConfiguration.isNestedVirtualizationSupported {
    genericPlatformConfiguration.isNestedVirtualizationEnabled = true
}
```

**Objective-C**

```objc
if (needsNestedVirtualization && VZGenericPlatformConfiguration.isNestedVirtualizationSupported) {
    genericPlatformConfiguration.nestedVirtualizationEnabled = YES;
}
```

## See Also

### Identifying the platform configuration

- [machineIdentifier](machineidentifier.md): A value that represents a unique identifier for the virtual machine.
- [nestedVirtualizationEnabled](isnestedvirtualizationenabled.md): A Boolean value that indicates whether nested virtualization is in an enabled state.
- [VZGenericMachineIdentifier](../vzgenericmachineidentifier.md): An object that represents a unique identifier for a virtual machine.
