> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionproviderproperties/name](https://developer.apple.com/documentation/coremediaio/cmioextensionproviderproperties/name)

# name (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

The provider name.

## Declaration

```swift
var name: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The key for this property is [providerName](../cmioextensionproperty/providername.md).

## See Also

### Managing Properties

- [manufacturer](manufacturer.md): The provider manufacturer.
- [setPropertyState(\_:forProperty:)](setpropertystate%28__forproperty_%29.md): Sets a state value for the specified property.
- [propertiesDictionary](propertiesdictionary.md): A dictionary of properties for a provider.

# name (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

The provider name.

## Declaration

```objectivec
@property (atomic, strong, nullable) NSString * name;
```

<a id="Discussion"></a>

## Discussion

The key for this property is [CMIOExtensionPropertyProviderName](../cmioextensionproperty/providername.md).

## See Also

### Managing Properties

- [manufacturer](manufacturer.md): The provider manufacturer.
- [setPropertyState:forProperty:](setpropertystate%28__forproperty_%29.md): Sets a state value for the specified property.
- [propertiesDictionary](propertiesdictionary.md): A dictionary of properties for a provider.
