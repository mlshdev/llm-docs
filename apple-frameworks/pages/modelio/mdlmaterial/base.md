> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterial/base](https://developer.apple.com/documentation/modelio/mdlmaterial/base)

# base (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Another material object from which this material’s properties are derived.

## Declaration

```swift
var base: MDLMaterial? { get set }
```

<a id="Discussion"></a>

## Discussion

When you use the [property(with:)](property%28with_%29.md), [propertyNamed(\_:)](propertynamed%28__%29.md), or [subscript(\_:)](subscript%28__%29-323j3.md) method to access material properties, the [MDLMaterial](../mdlmaterial.md) class first checks whether the material itself has a material property with the specified name or semantic. If not, those methods forward to the corresponding method of the other [MDLMaterial](../mdlmaterial.md) object specified by this property.

Use this method to create sets of materials that share most of their material properties but differ in others. For example, you can have a set of objects in the same scene with the same general style of surface appearance (determined by the [scatteringFunction](scatteringfunction.md) property) but with different values for the [baseColor](../mdlscatteringfunction/basecolor.md) material property.

# baseMaterial (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Another material object from which this material’s properties are derived.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) MDLMaterial * baseMaterial;
```

<a id="Discussion"></a>

## Discussion

When you use the [propertyWithSemantic:](property%28with_%29.md), [propertyNamed:](propertynamed%28__%29.md), or [objectForKeyedSubscript:](subscript%28__%29-323j3.md) method to access material properties, the [MDLMaterial](../mdlmaterial.md) class first checks whether the material itself has a material property with the specified name or semantic. If not, those methods forward to the corresponding method of the other [MDLMaterial](../mdlmaterial.md) object specified by this property.

Use this method to create sets of materials that share most of their material properties but differ in others. For example, you can have a set of objects in the same scene with the same general style of surface appearance (determined by the [scatteringFunction](scatteringfunction.md) property) but with different values for the [baseColor](../mdlscatteringfunction/basecolor.md) material property.
