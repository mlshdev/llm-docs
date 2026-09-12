> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/system/dependencies](https://developer.apple.com/documentation/realitykit/system/dependencies)

# dependencies

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An array of dependencies for this system.

## Declaration

```swift
static var dependencies: [SystemDependency] { get }
```

## Mentioned In

- [Implementing systems for entities in a scene](../implementing-systems-for-entities-in-a-scene.md)

<a id="discussion"></a>

## Discussion

If you need to specify the update order between your system and other systems in your app, you can do that using this property. If your system has no dependencies, you don’t need to declare this property. RealityKit provides a default implementation for systems with no dependencies.

Here’s an example where one other system updates before this system, and another system updates after it.

```swift
class SystemB : RealityKit.System {
    static var dependencies: [SystemDependency] {
        [.after(SystemA.self),        // Run SystemB after SystemA.
         .before(SystemC.self)]       // Run SystemB before SystemC.
     }
    // ...
}
```

When the app runs, RealityKit calls [update(context:)](update%28context_%29.md) on `SystemA` first, then on `SystemB`, and then on `SystemC`.

## Default Implementations

### System Implementations

- [dependencies](dependencies-2d7zt.md): A default implementation of the dependencies array.

## See Also

### Specifying dependencies

- [SystemDependency](../systemdependency.md): Defines update order relative to other systems. An object that specifies the update order between multiple systems.
