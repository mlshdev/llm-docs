> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionprovidersource/setproviderproperties(_:)](https://developer.apple.com/documentation/coremediaio/cmioextensionprovidersource/setproviderproperties(_:))

# setProviderProperties(\_:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Set the state of provider properties.

## Declaration

```swift
func setProviderProperties(_ providerProperties: CMIOExtensionProviderProperties) throws
```

## Parameters

- `providerProperties`: A provider properties object that contains the updated property states.

<a id="Discussion"></a>

## Discussion

If you implement this method in Swift and an error occurs, throw an error and pass more detailed information regarding the property or properties that failed in the error that you throw. If you implement this method in Objective-C and an error occurs, pass more detailed information regarding the property or properties that failed in the [localizedDescription](https://developer.apple.com/documentation/foundation/nserror/localizeddescription) property of [NSError](https://developer.apple.com/documentation/foundation/nserror).

## See Also

### Configuring Properties

- [availableProperties](availableproperties.md): A set of available properties for a provider.
- [providerProperties(forProperties:)](providerproperties%28forproperties_%29.md): Gets the state of provider properties.

# setProviderProperties:error: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Set the state of provider properties.

## Declaration

```objectivec
- (BOOL) setProviderProperties:(CMIOExtensionProviderProperties *) providerProperties error:(NSError **) outError;
```

## Parameters

- `providerProperties`: A provider properties object that contains the updated property states.
- `outError`: An error pointer. If an error occurs, this method sets the pointer to an [NSError](https://developer.apple.com/documentation/foundation/nserror) object that describes the failure; otherwise it sets the pointer to `nil`.

<a id="Discussion"></a>

## Discussion

If you implement this method in Swift and an error occurs, throw an error and pass more detailed information regarding the property or properties that failed in the error that you throw. If you implement this method in Objective-C and an error occurs, pass more detailed information regarding the property or properties that failed in the [localizedDescription](https://developer.apple.com/documentation/foundation/nserror/localizeddescription) property of [NSError](https://developer.apple.com/documentation/foundation/nserror).

## See Also

### Configuring Properties

- [availableProperties](availableproperties.md): A set of available properties for a provider.
- [providerPropertiesForProperties:error:](providerproperties%28forproperties_%29.md): Gets the state of provider properties.
