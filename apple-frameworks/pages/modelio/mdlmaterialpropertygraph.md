> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterialpropertygraph](https://developer.apple.com/documentation/modelio/mdlmaterialpropertygraph)

# MDLMaterialPropertyGraph (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

## Declaration

```swift
class MDLMaterialPropertyGraph
```

## Topics

### Initializers

- [init(nodes:connections:)](mdlmaterialpropertygraph/init%28nodes_connections_%29.md)

### Instance Properties

- [connections](mdlmaterialpropertygraph/connections.md)
- [nodes](mdlmaterialpropertygraph/nodes.md)

### Instance Methods

- [evaluate()](mdlmaterialpropertygraph/evaluate%28%29.md)

## Relationships

### Inherits From

- [MDLMaterialPropertyNode](mdlmaterialpropertynode.md)

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
- [MDLMaterialPropertyNode](mdlmaterialpropertynode.md)
- [MDLScatteringFunction](mdlscatteringfunction.md): A set of material properties that describes a basic shading model for materials, and the superclass for more complex shading models.
- [MDLPhysicallyPlausibleScatteringFunction](mdlphysicallyplausiblescatteringfunction.md): A set of material properties that describes a physically realistic shading model for materials.

# MDLMaterialPropertyGraph (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MDLMaterialPropertyGraph : MDLMaterialPropertyNode
```

## Topics

### Instance Properties

- [connections](mdlmaterialpropertygraph/connections.md)
- [nodes](mdlmaterialpropertygraph/nodes.md)

### Instance Methods

- [evaluate](mdlmaterialpropertygraph/evaluate%28%29.md)
- [initWithNodes:connections:](mdlmaterialpropertygraph/init%28nodes_connections_%29.md)

## Relationships

### Inherits From

- [MDLMaterialPropertyNode](mdlmaterialpropertynode.md)

## See Also

### Materials

- [MDLMaterial](mdlmaterial.md): A collection of material properties that together describe the intended surface appearance for rendering a 3D object.
- [MDLMaterialProperty](mdlmaterialproperty.md): A definition for one specific aspect of the rendering parameters for a material.
- [MDLMaterialPropertyConnection](mdlmaterialpropertyconnection.md)
- [MDLMaterialPropertyNode](mdlmaterialpropertynode.md)
- [MDLScatteringFunction](mdlscatteringfunction.md): A set of material properties that describes a basic shading model for materials, and the superclass for more complex shading models.
- [MDLPhysicallyPlausibleScatteringFunction](mdlphysicallyplausiblescatteringfunction.md): A set of material properties that describes a physically realistic shading model for materials.
