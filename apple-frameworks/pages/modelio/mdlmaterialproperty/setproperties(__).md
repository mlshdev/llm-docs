> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterialproperty/setproperties(_:)](https://developer.apple.com/documentation/modelio/mdlmaterialproperty/setproperties(_:))

# setProperties(\_:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets the material property’s attributes to those of the specified material property.

## Declaration

```swift
func setProperties(_ property: MDLMaterialProperty)
```

## Parameters

- `property`: The material property from which to copy data.

<a id="Discussion"></a>

## Discussion

Use this method to copy data from one [MDLMaterialProperty](../mdlmaterialproperty.md) instance to another—for example, to make one material property of a [MDLScatteringFunction](../mdlscatteringfunction.md) object match the value of another.

# setProperties: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets the material property’s attributes to those of the specified material property.

## Declaration

```objectivec
- (void) setProperties:(MDLMaterialProperty *) property;
```

## Parameters

- `property`: The material property from which to copy data.

<a id="Discussion"></a>

## Discussion

Use this method to copy data from one [MDLMaterialProperty](../mdlmaterialproperty.md) instance to another—for example, to make one material property of a [MDLScatteringFunction](../mdlscatteringfunction.md) object match the value of another.
