> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterialpropertynode](https://developer.apple.com/documentation/modelio/mdlmaterialpropertynode)

# MDLMaterialPropertyNode (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

## Declaration

```swift
class MDLMaterialPropertyNode
```

## Topics

### Initializers

- [init(inputs:outputs:evaluationFunction:)](mdlmaterialpropertynode/init%28inputs_outputs_evaluationfunction_%29.md)

### Instance Properties

- [evaluationFunction](mdlmaterialpropertynode/evaluationfunction.md)
- [inputs](mdlmaterialpropertynode/inputs.md)
- [outputs](mdlmaterialpropertynode/outputs.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MDLMaterialPropertyGraph](mdlmaterialpropertygraph.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MDLNamed](mdlnamed.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Materials

- [MDLMaterial](mdlmaterial.md): A collection of material properties that together describe the intended surface appearance for rendering a 3D object.
- [MDLMaterialProperty](mdlmaterialproperty.md): A definition for one specific aspect of the rendering parameters for a material.
- [MDLMaterialPropertyConnection](mdlmaterialpropertyconnection.md)
- [MDLMaterialPropertyGraph](mdlmaterialpropertygraph.md)
- [MDLScatteringFunction](mdlscatteringfunction.md): A set of material properties that describes a basic shading model for materials, and the superclass for more complex shading models.
- [MDLPhysicallyPlausibleScatteringFunction](mdlphysicallyplausiblescatteringfunction.md): A set of material properties that describes a physically realistic shading model for materials.

# MDLMaterialPropertyNode (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MDLMaterialPropertyNode : NSObject
```

## Topics

### Instance Properties

- [evaluationFunction](mdlmaterialpropertynode/evaluationfunction.md)
- [inputs](mdlmaterialpropertynode/inputs.md)
- [outputs](mdlmaterialpropertynode/outputs.md)

### Instance Methods

- [initWithInputs:outputs:evaluationFunction:](mdlmaterialpropertynode/init%28inputs_outputs_evaluationfunction_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MDLMaterialPropertyGraph](mdlmaterialpropertygraph.md)

### Conforms To

- [MDLNamed](mdlnamed.md)

## See Also

### Materials

- [MDLMaterial](mdlmaterial.md): A collection of material properties that together describe the intended surface appearance for rendering a 3D object.
- [MDLMaterialProperty](mdlmaterialproperty.md): A definition for one specific aspect of the rendering parameters for a material.
- [MDLMaterialPropertyConnection](mdlmaterialpropertyconnection.md)
- [MDLMaterialPropertyGraph](mdlmaterialpropertygraph.md)
- [MDLScatteringFunction](mdlscatteringfunction.md): A set of material properties that describes a basic shading model for materials, and the superclass for more complex shading models.
- [MDLPhysicallyPlausibleScatteringFunction](mdlphysicallyplausiblescatteringfunction.md): A set of material properties that describes a physically realistic shading model for materials.
