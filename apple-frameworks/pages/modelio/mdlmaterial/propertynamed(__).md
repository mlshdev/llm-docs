> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterial/propertynamed(_:)](https://developer.apple.com/documentation/modelio/mdlmaterial/propertynamed(_:))

# propertyNamed(\_:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the material property with the specified name.

## Declaration

```swift
func propertyNamed(_ name: String) -> MDLMaterialProperty?
```

## Parameters

- `name`: The [name](../mdlmaterialproperty/name.md) value of a material property in the material.

<a id="return-value"></a>

## Return Value

The material property with the specified name, or `nil` if the material does not contain a material property with that name.

<a id="Discussion"></a>

## Discussion

Material property names are not related to their use in rendering. Instead, you can assign descriptive names to material properties and use this method to keep track of them.

## See Also

### Working with individual material properties

- [property(with:)](property%28with_%29.md): Returns the material property for the specified material semantic.
- [properties(with:)](properties%28with_%29.md): Returns the complete list of material properties that match the specified material semantic.
- [setProperty(\_:)](setproperty%28__%29.md): Adds a new material property to or replaces an existing material property in the material.
- [remove(\_:)](remove%28__%29.md): Removes the specified material property from the material.
- [removeAllProperties()](removeallproperties%28%29.md): Removes all material properties from the material.

# propertyNamed: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the material property with the specified name.

## Declaration

```objectivec
- (MDLMaterialProperty *) propertyNamed:(NSString *) name;
```

## Parameters

- `name`: The [name](../mdlmaterialproperty/name.md) value of a material property in the material.

<a id="return-value"></a>

## Return Value

The material property with the specified name, or `nil` if the material does not contain a material property with that name.

<a id="Discussion"></a>

## Discussion

Material property names are not related to their use in rendering. Instead, you can assign descriptive names to material properties and use this method to keep track of them.

## See Also

### Working with individual material properties

- [propertyWithSemantic:](property%28with_%29.md): Returns the material property for the specified material semantic.
- [propertiesWithSemantic:](properties%28with_%29.md): Returns the complete list of material properties that match the specified material semantic.
- [setProperty:](setproperty%28__%29.md): Adds a new material property to or replaces an existing material property in the material.
- [removeProperty:](remove%28__%29.md): Removes the specified material property from the material.
- [removeAllProperties](removeallproperties%28%29.md): Removes all material properties from the material.
