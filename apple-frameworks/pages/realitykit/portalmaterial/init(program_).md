> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalmaterial/init(program:)](https://developer.apple.com/documentation/realitykit/portalmaterial/init(program:))

# init(program:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a portal material from a previously compiled program.

## Declaration

```swift
init(program: PortalMaterial.Program)
```

## Parameters

- `program`: A compiled portal program. The resulting material shares the program’s compiled shader artifact.

<a id="discussion"></a>

## Discussion

Because [init(descriptor:)](program-swift.struct/init%28descriptor_%29.md) is asynchronous, preload the programs your scene needs once during setup, then use this initializer to instantiate portal materials from them synchronously at runtime — for example, when populating a model component each frame.

After creating the material, bind its shader inputs by calling [setParameter(name:value:)](setparameter%28name_value_%29.md) or [setParameter(handle:value:)](setparameter%28handle_value_%29.md).
