> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensiondevicesource/deviceproperties(forproperties:)](https://developer.apple.com/documentation/coremediaio/cmioextensiondevicesource/deviceproperties(forproperties:))

# deviceProperties(forProperties:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Retrieves the state of device properties.

## Declaration

```swift
func deviceProperties(forProperties properties: Set<CMIOExtensionProperty>) throws -> CMIOExtensionDeviceProperties
```

## Parameters

- `properties`: A set of device properties to retrieve.

<a id="return-value"></a>

## Return Value

A properties object that contains the current device state.

## See Also

### Managing Properties

- [availableProperties](availableproperties.md): A set of available properties that a device provides.
- [setDeviceProperties(\_:)](setdeviceproperties%28__%29.md): Sets the state of device properties.

# devicePropertiesForProperties:error: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Retrieves the state of device properties.

## Declaration

```objectivec
- (CMIOExtensionDeviceProperties *) devicePropertiesForProperties:(NSSet<NSString *> *) properties error:(NSError **) outError;
```

## Parameters

- `properties`: A set of device properties to retrieve.
- `outError`: An error pointer. If an error occurs, this method sets the pointer to an [NSError](https://developer.apple.com/documentation/foundation/nserror) object that describes the failure; otherwise it sets the pointer to `nil`.

<a id="return-value"></a>

## Return Value

A properties object that contains the current device state.

## See Also

### Managing Properties

- [availableProperties](availableproperties.md): A set of available properties that a device provides.
- [setDeviceProperties:error:](setdeviceproperties%28__%29.md): Sets the state of device properties.
