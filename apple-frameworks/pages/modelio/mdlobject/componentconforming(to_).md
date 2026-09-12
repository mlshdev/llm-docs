> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlobject/componentconforming(to:)](https://developer.apple.com/documentation/modelio/mdlobject/componentconforming(to:))

# componentConforming(to:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the object’s component for the specified protocol.

## Declaration

```swift
func componentConforming(to protocol: Protocol) -> (any MDLComponent)?
```

## Parameters

- `protocol`: The protocol for which to retrieve a component. This protocol must extend the [MDLComponent](../mdlcomponent.md) protocol.

<a id="return-value"></a>

## Return Value

The object’s component for the protocol, or `nil` if the object does not have such a component.

<a id="Discussion"></a>

## Discussion

Components are the basis for customizable file format and object graph support in Model I/O. By default, the [MDLObject](../mdlobject.md) uses the [MDLObjectContainerComponent](../mdlobjectcontainercomponent.md) and [MDLTransformComponent](../mdltransformcomponent.md) protocols to model object hierarchies and spatial transforms: When you load an object graph from a [MDLAsset](../mdlasset.md) instance, Model I/O creates container and transforms components to represent the object hierarchy and spatial relationships described in the asset file. However, you can also create custom components. For example, a custom component protocol could add support for an asset format that encodes gameplay-related information such as scripting triggers, or a custom class for the [MDLObjectContainerComponent](../mdlobjectcontainercomponent.md) could implement other ways to store or traverse object hierarchies.

## See Also

### Customizing Objects with Components

- [setComponent(\_:for:)](setcomponent%28__for_%29.md): Associates a component with the object for the specified protocol.

# componentConformingToProtocol: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the object’s component for the specified protocol.

## Declaration

```objectivec
- (id<MDLComponent>) componentConformingToProtocol:(Protocol *) protocol;
```

## Parameters

- `protocol`: The protocol for which to retrieve a component. This protocol must extend the [MDLComponent](../mdlcomponent.md) protocol.

<a id="return-value"></a>

## Return Value

The object’s component for the protocol, or `nil` if the object does not have such a component.

<a id="Discussion"></a>

## Discussion

Components are the basis for customizable file format and object graph support in Model I/O. By default, the [MDLObject](../mdlobject.md) uses the [MDLObjectContainerComponent](../mdlobjectcontainercomponent.md) and [MDLTransformComponent](../mdltransformcomponent.md) protocols to model object hierarchies and spatial transforms: When you load an object graph from a [MDLAsset](../mdlasset.md) instance, Model I/O creates container and transforms components to represent the object hierarchy and spatial relationships described in the asset file. However, you can also create custom components. For example, a custom component protocol could add support for an asset format that encodes gameplay-related information such as scripting triggers, or a custom class for the [MDLObjectContainerComponent](../mdlobjectcontainercomponent.md) could implement other ways to store or traverse object hierarchies.

## See Also

### Customizing Objects with Components

- [setComponent:forProtocol:](setcomponent%28__for_%29.md): Associates a component with the object for the specified protocol.
