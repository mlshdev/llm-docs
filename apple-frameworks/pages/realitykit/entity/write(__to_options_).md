> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/write(_:to:options:)](https://developer.apple.com/documentation/realitykit/entity/write(_:to:options:))

# write(\_:to:options:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Exports an array of entities as separate scenes within a single RealityKit file.

## Declaration

```swift
nonisolated(nonsending) static func write(_ entities: [Entity], to url: URL, options: Entity.WriteOptions = WriteOptions()) async throws
```

## Parameters

- `entities`: An array of named entities to be written as separate scenes in the Reality file.
- `url`: The location URL in the file system where you want to save the `.reality` file.
- `options`: Options for writing the Reality file, such as texture compression settings.

<a id="discussion"></a>

## Discussion

This method generates a file with a `.reality` suffix, automatically setting its compatibility with other systems based on all the entity tree contents. The entities and their children may contain components or assets that can require the resulting RealityKit file to be compatible with system versions between:

- iOS 18 or later
- macOS 15 or later
- visionOS 2 or later
- tvOS 26 or later

Elements of the `entities` array must have a non-empty [name](name.md) property. Each name must be unique within the array to allow unambiguous scene loading.

After writing, individual scenes can be loaded using the [init(contentsOf:withName:)](init%28contentsof_withname_%29.md) initializer with the entity’s name as the scene identifier.

Logs with the prefix \[RealityKit File Compatibility Info\] will be posted to the console whenever a component or asset requires a compatibility adjustment.

> **Throws**

> An error if any entity in the array has an empty name.

> **Important**

>  During its initial setup phase, this method can indirectly block the main thread, and also has the potential to block it for the full duration of the call if the system has additional work it needs to do there.

## See Also

### Writing an entity to a file

- [write(to:options:)](write%28to_options_%29.md)
- [Entity.WriteOptions](writeoptions.md): A set of options that control how RealityKit writes entities to a reality file.
