> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionproviderproperties/setpropertystate(_:forproperty:)](https://developer.apple.com/documentation/coremediaio/cmioextensionproviderproperties/setpropertystate(_:forproperty:))

# setPropertyState(\_:forProperty:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Sets a state value for the specified property.

## Declaration

```swift
func setPropertyState(_ propertyState: CMIOExtensionPropertyState<AnyObject>?, forProperty property: CMIOExtensionProperty)
```

## Parameters

- `propertyState`: The updated property state.
- `property`: The property to update.

<a id="Discussion"></a>

## Discussion

Setting a `nil` property state value doesn’t remove the property.

## See Also

### Managing Properties

- [name](name.md): The provider name.
- [manufacturer](manufacturer.md): The provider manufacturer.
- [propertiesDictionary](propertiesdictionary.md): A dictionary of properties for a provider.

# setPropertyState:forProperty: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Sets a state value for the specified property.

## Declaration

```objectivec
- (void) setPropertyState:(CMIOExtensionPropertyState *) propertyState forProperty:(CMIOExtensionProperty) property;
```

## Parameters

- `propertyState`: The updated property state.
- `property`: The property to update.

<a id="Discussion"></a>

## Discussion

Setting a `nil` property state value doesn’t remove the property.

## See Also

### Managing Properties

- [name](name.md): The provider name.
- [manufacturer](manufacturer.md): The provider manufacturer.
- [propertiesDictionary](propertiesdictionary.md): A dictionary of properties for a provider.
