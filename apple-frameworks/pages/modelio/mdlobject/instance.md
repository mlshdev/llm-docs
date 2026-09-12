> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlobject/instance](https://developer.apple.com/documentation/modelio/mdlobject/instance)

# instance (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The primary object, if applicable, of which this object is an instance.

## Declaration

```swift
var instance: MDLObject? { get set }
```

<a id="Discussion"></a>

## Discussion

Some asset formats supported by Model I/O provide *instancing*, a feature where the asset provides a single definition for an object, then can reuse that definition at multiple points in a scene. For example, an asset describing a scene of a table and chairs could contain mesh and material data for only one chair, then use instancing to place several of the same chair around the table.

If an object loaded from an asset is an instance, this property refers to one of the objects in the asset’s [masters](../mdlasset/masters.md) array. If this object is not an instance (or is loaded from an asset format that does not support instancing), this property is `nil`.

## See Also

### Managing Rendering Intent

- [hidden](hidden.md): A Boolean value indicating whether this object should be used in rendering.
- [path](path.md): A path that identifies the object in an asset’s object hierarchy using object names.
- [components](components.md)

# instance (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The primary object, if applicable, of which this object is an instance.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) MDLObject * instance;
```

<a id="Discussion"></a>

## Discussion

Some asset formats supported by Model I/O provide *instancing*, a feature where the asset provides a single definition for an object, then can reuse that definition at multiple points in a scene. For example, an asset describing a scene of a table and chairs could contain mesh and material data for only one chair, then use instancing to place several of the same chair around the table.

If an object loaded from an asset is an instance, this property refers to one of the objects in the asset’s [masters](../mdlasset/masters.md) array. If this object is not an instance (or is loaded from an asset format that does not support instancing), this property is `nil`.

## See Also

### Managing Rendering Intent

- [hidden](hidden.md): A Boolean value indicating whether this object should be used in rendering.
- [path](path.md): A path that identifies the object in an asset’s object hierarchy using object names.
- [components](components.md)
