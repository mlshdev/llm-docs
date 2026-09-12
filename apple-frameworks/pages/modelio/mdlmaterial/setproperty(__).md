> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterial/setproperty(_:)](https://developer.apple.com/documentation/modelio/mdlmaterial/setproperty(_:))

# setProperty(\_:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds a new material property to or replaces an existing material property in the material.

## Declaration

```swift
func setProperty(_ property: MDLMaterialProperty)
```

## Parameters

- `property`: The material property object to add to the material.

<a id="Discussion"></a>

## Discussion

If the material already contains a material property with the same name or semantic, this method replaces that material property. Otherwise, this method adds the specified material property to the material.

## See Also

### Working with individual material properties

- [propertyNamed(\_:)](propertynamed%28__%29.md): Returns the material property with the specified name.
- [property(with:)](property%28with_%29.md): Returns the material property for the specified material semantic.
- [properties(with:)](properties%28with_%29.md): Returns the complete list of material properties that match the specified material semantic.
- [remove(\_:)](remove%28__%29.md): Removes the specified material property from the material.
- [removeAllProperties()](removeallproperties%28%29.md): Removes all material properties from the material.

# setProperty: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds a new material property to or replaces an existing material property in the material.

## Declaration

```objectivec
- (void) setProperty:(MDLMaterialProperty *) property;
```

## Parameters

- `property`: The material property object to add to the material.

<a id="Discussion"></a>

## Discussion

If the material already contains a material property with the same name or semantic, this method replaces that material property. Otherwise, this method adds the specified material property to the material.

## See Also

### Working with individual material properties

- [propertyNamed:](propertynamed%28__%29.md): Returns the material property with the specified name.
- [propertyWithSemantic:](property%28with_%29.md): Returns the material property for the specified material semantic.
- [propertiesWithSemantic:](properties%28with_%29.md): Returns the complete list of material properties that match the specified material semantic.
- [removeProperty:](remove%28__%29.md): Removes the specified material property from the material.
- [removeAllProperties](removeallproperties%28%29.md): Removes all material properties from the material.
