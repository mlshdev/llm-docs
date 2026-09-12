> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensiondevicesource/setdeviceproperties(_:)](https://developer.apple.com/documentation/coremediaio/cmioextensiondevicesource/setdeviceproperties(_:))

# setDeviceProperties(\_:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Sets the state of device properties.

## Declaration

```swift
func setDeviceProperties(_ deviceProperties: CMIOExtensionDeviceProperties) throws
```

## Parameters

- `deviceProperties`: A properties object that contains the updated device state.

<a id="Discussion"></a>

## Discussion

If you implement this method in Swift and an error occurs, throw an error and pass more detailed information regarding the property or properties that failed in the error that you throw. If you implement this method in Objective-C and an error occurs, pass more detailed information regarding the property or properties that failed in the [localizedDescription](https://developer.apple.com/documentation/foundation/nserror/localizeddescription) property of [NSError](https://developer.apple.com/documentation/foundation/nserror).

> **Note**

> The property attributes associated with a property state are always `nil` when setting a value.

## See Also

### Managing Properties

- [availableProperties](availableproperties.md): A set of available properties that a device provides.
- [deviceProperties(forProperties:)](deviceproperties%28forproperties_%29.md): Retrieves the state of device properties.

# setDeviceProperties:error: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Sets the state of device properties.

## Declaration

```objectivec
- (BOOL) setDeviceProperties:(CMIOExtensionDeviceProperties *) deviceProperties error:(NSError **) outError;
```

## Parameters

- `deviceProperties`: A properties object that contains the updated device state.
- `outError`: An error pointer. If an error occurs, this method sets the pointer to an [NSError](https://developer.apple.com/documentation/foundation/nserror) object that describes the failure; otherwise it sets the pointer to `nil`.

<a id="Discussion"></a>

## Discussion

If you implement this method in Swift and an error occurs, throw an error and pass more detailed information regarding the property or properties that failed in the error that you throw. If you implement this method in Objective-C and an error occurs, pass more detailed information regarding the property or properties that failed in the [localizedDescription](https://developer.apple.com/documentation/foundation/nserror/localizeddescription) property of [NSError](https://developer.apple.com/documentation/foundation/nserror).

> **Note**

> The property attributes associated with a property state are always `nil` when setting a value.

## See Also

### Managing Properties

- [availableProperties](availableproperties.md): A set of available properties that a device provides.
- [devicePropertiesForProperties:error:](deviceproperties%28forproperties_%29.md): Retrieves the state of device properties.
