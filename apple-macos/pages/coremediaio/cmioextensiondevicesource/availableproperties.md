> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensiondevicesource/availableproperties](https://developer.apple.com/documentation/coremediaio/cmioextensiondevicesource/availableproperties)

# availableProperties (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A set of available properties that a device provides.

## Declaration

```swift
var availableProperties: Set<CMIOExtensionProperty> { get }
```

<a id="Discussion"></a>

## Discussion

Don’t change the state of this property during the life cycle of the associated device.

## See Also

### Managing Properties

- [deviceProperties(forProperties:)](deviceproperties%28forproperties_%29.md): Retrieves the state of device properties.
- [setDeviceProperties(\_:)](setdeviceproperties%28__%29.md): Sets the state of device properties.

# availableProperties (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A set of available properties that a device provides.

## Declaration

```objectivec
@property (atomic, copy, readonly) NSSet<NSString *> * availableProperties;
```

<a id="Discussion"></a>

## Discussion

Don’t change the state of this property during the life cycle of the associated device.

## See Also

### Managing Properties

- [devicePropertiesForProperties:error:](deviceproperties%28forproperties_%29.md): Retrieves the state of device properties.
- [setDeviceProperties:error:](setdeviceproperties%28__%29.md): Sets the state of device properties.
