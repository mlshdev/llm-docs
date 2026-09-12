> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterial/subscript(_:)-323j3](https://developer.apple.com/documentation/modelio/mdlmaterial/subscript(_:)-323j3)

# subscript(\_:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Subscript  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the material property with the specified name, for use with subscript syntax.

## Declaration

```swift
subscript(name: String) -> MDLMaterialProperty? { get }
```

## Parameters

- `name`: The [name](../mdlmaterialproperty/name.md) value of a material property in the material.

<a id="return-value"></a>

## Return Value

The material property with the specified name, or `nil` if the material does not contain a material property with that name.

<a id="Discussion"></a>

## Discussion

This method is equivalent to the [propertyNamed(\_:)](propertynamed%28__%29.md) method but allows for the use of subscript syntax for reading material properties. To write material properties to the material, use the [setProperty(\_:)](setproperty%28__%29.md) method.

## See Also

### Accessing material properties with subscript syntax

- [subscript(\_:)](subscript%28__%29-19j2.md): Returns the material property at the specified index in the material, for use with subscript syntax.
- [count](count.md): The number of material properties in the material.

# objectForKeyedSubscript: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the material property with the specified name, for use with subscript syntax.

## Declaration

```objectivec
- (MDLMaterialProperty *) objectForKeyedSubscript:(NSString *) name;
```

## Parameters

- `name`: The [name](../mdlmaterialproperty/name.md) value of a material property in the material.

<a id="return-value"></a>

## Return Value

The material property with the specified name, or `nil` if the material does not contain a material property with that name.

<a id="Discussion"></a>

## Discussion

This method is equivalent to the [propertyNamed:](propertynamed%28__%29.md) method but allows for the use of subscript syntax for reading material properties. To write material properties to the material, use the [setProperty:](setproperty%28__%29.md) method.

## See Also

### Accessing material properties with subscript syntax

- [objectAtIndexedSubscript:](subscript%28__%29-19j2.md): Returns the material property at the specified index in the material, for use with subscript syntax.
- [count](count.md): The number of material properties in the material.
