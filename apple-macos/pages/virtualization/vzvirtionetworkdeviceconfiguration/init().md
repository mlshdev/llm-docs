> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtionetworkdeviceconfiguration/init()](https://developer.apple.com/documentation/virtualization/vzvirtionetworkdeviceconfiguration/init())

# init() (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 11.0+

Creates a network device configuration object for you to configure.

## Declaration

```swift
init()
```

<a id="return-value"></a>

## Return Value

A new network device configuration object.

<a id="Discussion"></a>

## Discussion

After creating the object, assign appropriate values to the inherited [attachment](../vznetworkdeviceconfiguration/attachment.md) and [macAddress](../vznetworkdeviceconfiguration/macaddress.md) properties to complete the configuration object.

# init (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Creates a network device configuration object for you to configure.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

A new network device configuration object.

<a id="Discussion"></a>

## Discussion

After creating the object, assign appropriate values to the inherited [attachment](../vznetworkdeviceconfiguration/attachment.md) and [MACAddress](../vznetworkdeviceconfiguration/macaddress.md) properties to complete the configuration object.
