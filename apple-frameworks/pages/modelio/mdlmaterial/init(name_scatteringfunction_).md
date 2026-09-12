> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterial/init(name:scatteringfunction:)](https://developer.apple.com/documentation/modelio/mdlmaterial/init(name:scatteringfunction:))

# init(name:scatteringFunction:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a material

## Declaration

```swift
init(name: String, scatteringFunction: MDLScatteringFunction)
```

## Parameters

- `name`: A descriptive name for the material.
- `scatteringFunction`: The collection of material properties that define the material’s response to light. For details, see the [scatteringFunction](scatteringfunction.md) property.

<a id="return-value"></a>

## Return Value

A new material object.

<a id="Discussion"></a>

## Discussion

To use the newly created material with a 3D object, assign it to the the [material](../mdlsubmesh/material.md) property of a [MDLSubmesh](../mdlsubmesh.md) instance.

# initWithName:scatteringFunction: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a material

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name scatteringFunction:(MDLScatteringFunction *) scatteringFunction;
```

## Parameters

- `name`: A descriptive name for the material.
- `scatteringFunction`: The collection of material properties that define the material’s response to light. For details, see the [scatteringFunction](scatteringfunction.md) property.

<a id="return-value"></a>

## Return Value

A new material object.

<a id="Discussion"></a>

## Discussion

To use the newly created material with a 3D object, assign it to the the [material](../mdlsubmesh/material.md) property of a [MDLSubmesh](../mdlsubmesh.md) instance.
