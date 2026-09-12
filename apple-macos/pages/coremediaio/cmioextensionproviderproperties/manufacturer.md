> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionproviderproperties/manufacturer](https://developer.apple.com/documentation/coremediaio/cmioextensionproviderproperties/manufacturer)

# manufacturer (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

The provider manufacturer.

## Declaration

```swift
var manufacturer: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The key for this property is [providerManufacturer](../cmioextensionproperty/providermanufacturer.md).

## See Also

### Managing Properties

- [name](name.md): The provider name.
- [setPropertyState(\_:forProperty:)](setpropertystate%28__forproperty_%29.md): Sets a state value for the specified property.
- [propertiesDictionary](propertiesdictionary.md): A dictionary of properties for a provider.

# manufacturer (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

The provider manufacturer.

## Declaration

```objectivec
@property (atomic, strong, nullable) NSString * manufacturer;
```

<a id="Discussion"></a>

## Discussion

The key for this property is [CMIOExtensionPropertyProviderManufacturer](../cmioextensionproperty/providermanufacturer.md).

## See Also

### Managing Properties

- [name](name.md): The provider name.
- [setPropertyState:forProperty:](setpropertystate%28__forproperty_%29.md): Sets a state value for the specified property.
- [propertiesDictionary](propertiesdictionary.md): A dictionary of properties for a provider.
