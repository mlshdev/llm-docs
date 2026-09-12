> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterial/subscript(_:)-19j2](https://developer.apple.com/documentation/modelio/mdlmaterial/subscript(_:)-19j2)

# subscript(\_:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Subscript  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the material property at the specified index in the material, for use with subscript syntax.

## Declaration

```swift
subscript(idx: Int) -> MDLMaterialProperty? { get }
```

## Parameters

- `idx`: An index in the material’s list of material properties; must be less than the value of [count](count.md).

<a id="return-value"></a>

## Return Value

The material property at the specified index.

<a id="Discussion"></a>

## Discussion

The ordering of material properties in a material is arbitrary, but you can use this method (together with the count property) to iterate through the material’s complete list of material properties. You can also iterate through material properties using [Fast Enumeration](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Enumeration.html#//apple_ref/doc/uid/TP40008195-CH17-SW3).

## See Also

### Accessing material properties with subscript syntax

- [subscript(\_:)](subscript%28__%29-323j3.md): Returns the material property with the specified name, for use with subscript syntax.
- [count](count.md): The number of material properties in the material.

# objectAtIndexedSubscript: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the material property at the specified index in the material, for use with subscript syntax.

## Declaration

```objectivec
- (MDLMaterialProperty *) objectAtIndexedSubscript:(NSUInteger) idx;
```

## Parameters

- `idx`: An index in the material’s list of material properties; must be less than the value of [count](count.md).

<a id="return-value"></a>

## Return Value

The material property at the specified index.

<a id="Discussion"></a>

## Discussion

The ordering of material properties in a material is arbitrary, but you can use this method (together with the count property) to iterate through the material’s complete list of material properties. You can also iterate through material properties using [Fast Enumeration](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Enumeration.html#//apple_ref/doc/uid/TP40008195-CH17-SW3).

## See Also

### Accessing material properties with subscript syntax

- [objectForKeyedSubscript:](subscript%28__%29-323j3.md): Returns the material property with the specified name, for use with subscript syntax.
- [count](count.md): The number of material properties in the material.
