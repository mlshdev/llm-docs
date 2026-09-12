> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/componentset/set(qualifiedcomponentname:representation:)](https://developer.apple.com/documentation/realitykit/entity/componentset/set(qualifiedcomponentname:representation:))

# set(qualifiedComponentName:representation:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Adds component data to an entity that is written to a Reality file but has no other effect at author time.

## Declaration

```swift
@MainActor @preconcurrency func set(qualifiedComponentName: String, representation: some Encodable) throws
```

## Parameters

- `qualifiedComponentName`: The component’s fully qualified, module-qualified name.
- `representation`: A value that encodes to the component’s expected layout.

<a id="discussion"></a>

## Discussion

Use this function from an authoring tool to serialize a component whose Swift type isn’t available on the authoring platform. `representation` is encoded into any Reality file this entity is written to, and is decoded back into a [Component](../../component.md) of the type named by `qualifiedComponentName` when that file is loaded, so it must encode to the layout that component expects. For runtime use on a platform where the component’s Swift type is available, set the component directly with `set(_:)` instead.

```swift
// Serialize a custom component by its fully qualified name.
struct MyCustomComponent: Component, Codable {
    var intensity: Float
}
try entity.components.set(
    qualifiedComponentName: "MyModule.MyCustomComponent",
    representation: MyCustomComponent(intensity: 0.5))
```

> **Throws**

> An error if `representation` can’t be encoded, or if `qualifiedComponentName` uses a reserved prefix.
