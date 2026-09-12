> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlobject/setcomponent(_:for:)](https://developer.apple.com/documentation/modelio/mdlobject/setcomponent(_:for:))

# setComponent(\_:for:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Associates a component with the object for the specified protocol.

## Declaration

```swift
func setComponent(_ component: any MDLComponent, for protocol: Protocol)
```

## Parameters

- `component`: The component to associate with the object. The component class must adopt the protocol specified in the `protocol` parameter.
- `protocol`: The protocol whose functionality the component provides.

<a id="Discussion"></a>

## Discussion

Components are the basis for customizable file format and object graph support in Model I/O. By default, the [MDLObject](../mdlobject.md) uses the [MDLObjectContainerComponent](../mdlobjectcontainercomponent.md) and [MDLTransformComponent](../mdltransformcomponent.md) protocols to model object hierarchies and spatial transforms: When you load an object graph from a [MDLAsset](../mdlasset.md) instance, Model I/O creates container and transforms components to represent the object hierarchy and spatial relationships described in the asset file. However, you can also create custom components. For example, a custom component protocol could add support for an asset format that encodes gameplay-related information such as scripting triggers, or a custom class for the [MDLObjectContainerComponent](../mdlobjectcontainercomponent.md) could implement other ways to store or traverse object hierarchies.

## See Also

### Customizing Objects with Components

- [componentConforming(to:)](componentconforming%28to_%29.md): Returns the object’s component for the specified protocol.

# setComponent:forProtocol: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Associates a component with the object for the specified protocol.

## Declaration

```objectivec
- (void) setComponent:(id<MDLComponent>) component forProtocol:(Protocol *) protocol;
```

## Parameters

- `component`: The component to associate with the object. The component class must adopt the protocol specified in the `protocol` parameter.
- `protocol`: The protocol whose functionality the component provides.

<a id="Discussion"></a>

## Discussion

Components are the basis for customizable file format and object graph support in Model I/O. By default, the [MDLObject](../mdlobject.md) uses the [MDLObjectContainerComponent](../mdlobjectcontainercomponent.md) and [MDLTransformComponent](../mdltransformcomponent.md) protocols to model object hierarchies and spatial transforms: When you load an object graph from a [MDLAsset](../mdlasset.md) instance, Model I/O creates container and transforms components to represent the object hierarchy and spatial relationships described in the asset file. However, you can also create custom components. For example, a custom component protocol could add support for an asset format that encodes gameplay-related information such as scripting triggers, or a custom class for the [MDLObjectContainerComponent](../mdlobjectcontainercomponent.md) could implement other ways to store or traverse object hierarchies.

## See Also

### Customizing Objects with Components

- [componentConformingToProtocol:](componentconforming%28to_%29.md): Returns the object’s component for the specified protocol.
