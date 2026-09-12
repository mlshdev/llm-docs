> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionprovidersource/providerproperties(forproperties:)](https://developer.apple.com/documentation/coremediaio/cmioextensionprovidersource/providerproperties(forproperties:))

# providerProperties(forProperties:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Gets the state of provider properties.

## Declaration

```swift
func providerProperties(forProperties properties: Set<CMIOExtensionProperty>) throws -> CMIOExtensionProviderProperties
```

## Parameters

- `properties`: A set of properties for which to retrieve the state.

<a id="return-value"></a>

## Return Value

A provider properties object that contains the state of the requested properties.

## See Also

### Configuring Properties

- [availableProperties](availableproperties.md): A set of available properties for a provider.
- [setProviderProperties(\_:)](setproviderproperties%28__%29.md): Set the state of provider properties.

# providerPropertiesForProperties:error: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Gets the state of provider properties.

## Declaration

```objectivec
- (CMIOExtensionProviderProperties *) providerPropertiesForProperties:(NSSet<NSString *> *) properties error:(NSError **) outError;
```

## Parameters

- `properties`: A set of properties for which to retrieve the state.
- `outError`: An error pointer. If an error occurs, this method sets the pointer to an [NSError](https://developer.apple.com/documentation/foundation/nserror) object that describes the failure; otherwise it sets the pointer to `nil`.

<a id="return-value"></a>

## Return Value

A provider properties object that contains the state of the requested properties.

## See Also

### Configuring Properties

- [availableProperties](availableproperties.md): A set of available properties for a provider.
- [setProviderProperties:error:](setproviderproperties%28__%29.md): Set the state of provider properties.
