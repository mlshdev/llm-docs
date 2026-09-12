> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterial/property(with:)](https://developer.apple.com/documentation/modelio/mdlmaterial/property(with:))

# property(with:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the material property for the specified material semantic.

## Declaration

```swift
func property(with semantic: MDLMaterialSemantic) -> MDLMaterialProperty?
```

## Parameters

- `semantic`: The semantic value of a material property in the material.

<a id="return-value"></a>

## Return Value

The material property for the specified semantic, or `nil` if the material does not contain a material property for that semantic.

<a id="Discussion"></a>

## Discussion

Material semantics identify the intended use of a material property in shading. Some semantic values, such as [MDLMaterialSemantic.specular](../mdlmaterialsemantic/specular.md), are part of the material’s [scatteringFunction](scatteringfunction.md) property that determines its response to lighting; others, such as [MDLMaterialSemantic.opacity](../mdlmaterialsemantic/opacity.md), determine other aspects of material rendering.

## See Also

### Working with individual material properties

- [propertyNamed(\_:)](propertynamed%28__%29.md): Returns the material property with the specified name.
- [properties(with:)](properties%28with_%29.md): Returns the complete list of material properties that match the specified material semantic.
- [setProperty(\_:)](setproperty%28__%29.md): Adds a new material property to or replaces an existing material property in the material.
- [remove(\_:)](remove%28__%29.md): Removes the specified material property from the material.
- [removeAllProperties()](removeallproperties%28%29.md): Removes all material properties from the material.

# propertyWithSemantic: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the material property for the specified material semantic.

## Declaration

```objectivec
- (MDLMaterialProperty *) propertyWithSemantic:(MDLMaterialSemantic) semantic;
```

## Parameters

- `semantic`: The semantic value of a material property in the material.

<a id="return-value"></a>

## Return Value

The material property for the specified semantic, or `nil` if the material does not contain a material property for that semantic.

<a id="Discussion"></a>

## Discussion

Material semantics identify the intended use of a material property in shading. Some semantic values, such as [MDLMaterialSemanticSpecular](../mdlmaterialsemantic/specular.md), are part of the material’s [scatteringFunction](scatteringfunction.md) property that determines its response to lighting; others, such as [MDLMaterialSemanticOpacity](../mdlmaterialsemantic/opacity.md), determine other aspects of material rendering.

## See Also

### Working with individual material properties

- [propertyNamed:](propertynamed%28__%29.md): Returns the material property with the specified name.
- [propertiesWithSemantic:](properties%28with_%29.md): Returns the complete list of material properties that match the specified material semantic.
- [setProperty:](setproperty%28__%29.md): Adds a new material property to or replaces an existing material property in the material.
- [removeProperty:](remove%28__%29.md): Removes the specified material property from the material.
- [removeAllProperties](removeallproperties%28%29.md): Removes all material properties from the material.
