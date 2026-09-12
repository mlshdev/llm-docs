> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamproperties/setpropertystate(_:forproperty:)](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamproperties/setpropertystate(_:forproperty:))

# setPropertyState(\_:forProperty:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Sets the state of the specified property.

## Declaration

```swift
func setPropertyState(_ propertyState: CMIOExtensionPropertyState<AnyObject>?, forProperty property: CMIOExtensionProperty)
```

## Parameters

- `propertyState`: The new state for the property.
- `property`: The property to update.

## See Also

### Managing Property State

- [propertiesDictionary](propertiesdictionary.md): A dictionary representation of the property state.

# setPropertyState:forProperty: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Sets the state of the specified property.

## Declaration

```objectivec
- (void) setPropertyState:(CMIOExtensionPropertyState *) propertyState forProperty:(CMIOExtensionProperty) property;
```

## Parameters

- `propertyState`: The new state for the property.
- `property`: The property to update.

## See Also

### Managing Property State

- [propertiesDictionary](propertiesdictionary.md): A dictionary representation of the property state.
