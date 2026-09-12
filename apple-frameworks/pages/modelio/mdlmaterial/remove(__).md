> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterial/remove(_:)](https://developer.apple.com/documentation/modelio/mdlmaterial/remove(_:))

# remove(\_:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Removes the specified material property from the material.

## Declaration

```swift
func remove(_ property: MDLMaterialProperty)
```

## Parameters

- `property`: The material property object to remove.

<a id="Discussion"></a>

## Discussion

This method has no effect if the specified material property is not contained in the material.

## See Also

### Working with individual material properties

- [propertyNamed(\_:)](propertynamed%28__%29.md): Returns the material property with the specified name.
- [property(with:)](property%28with_%29.md): Returns the material property for the specified material semantic.
- [properties(with:)](properties%28with_%29.md): Returns the complete list of material properties that match the specified material semantic.
- [setProperty(\_:)](setproperty%28__%29.md): Adds a new material property to or replaces an existing material property in the material.
- [removeAllProperties()](removeallproperties%28%29.md): Removes all material properties from the material.

# removeProperty: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Removes the specified material property from the material.

## Declaration

```objectivec
- (void) removeProperty:(MDLMaterialProperty *) property;
```

## Parameters

- `property`: The material property object to remove.

<a id="Discussion"></a>

## Discussion

This method has no effect if the specified material property is not contained in the material.

## See Also

### Working with individual material properties

- [propertyNamed:](propertynamed%28__%29.md): Returns the material property with the specified name.
- [propertyWithSemantic:](property%28with_%29.md): Returns the material property for the specified material semantic.
- [propertiesWithSemantic:](properties%28with_%29.md): Returns the complete list of material properties that match the specified material semantic.
- [setProperty:](setproperty%28__%29.md): Adds a new material property to or replaces an existing material property in the material.
- [removeAllProperties](removeallproperties%28%29.md): Removes all material properties from the material.
