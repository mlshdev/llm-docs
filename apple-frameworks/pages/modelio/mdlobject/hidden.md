> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlobject/hidden](https://developer.apple.com/documentation/modelio/mdlobject/hidden)

# hidden (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value indicating whether this object should be used in rendering.

## Declaration

```swift
var hidden: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Model I/O is not a renderer, so this property is purely informational.

Renderers using assets imported using Model I/O can use this property to determine whether to include meshes in a rendered scene, apply lighting from light sources, and so on.

## See Also

### Managing Rendering Intent

- [instance](instance.md): The primary object, if applicable, of which this object is an instance.
- [path](path.md): A path that identifies the object in an asset’s object hierarchy using object names.
- [components](components.md)

# hidden (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value indicating whether this object should be used in rendering.

## Declaration

```objectivec
@property (nonatomic) BOOL hidden;
```

<a id="Discussion"></a>

## Discussion

Model I/O is not a renderer, so this property is purely informational.

Renderers using assets imported using Model I/O can use this property to determine whether to include meshes in a rendered scene, apply lighting from light sources, and so on.

## See Also

### Managing Rendering Intent

- [instance](instance.md): The primary object, if applicable, of which this object is an instance.
- [path](path.md): A path that identifies the object in an asset’s object hierarchy using object names.
- [components](components.md)
