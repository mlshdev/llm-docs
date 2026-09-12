> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/loadbodytracked(named:in:)](https://developer.apple.com/documentation/realitykit/entity/loadbodytracked(named:in:))

# loadBodyTracked(named:in:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+

Synchronously loads a body-tracked entity from a bundle.

## Declaration

```swift
@MainActor @preconcurrency static func loadBodyTracked(named name: String, in bundle: Bundle? = nil) throws -> BodyTrackedEntity
```

## Parameters

- `name`: The base name of the file to load, omitting the filename extension.
- `bundle`: The bundle containing the file. Use `nil` to search the app’s main bundle.

<a id="return-value"></a>

## Return Value

The root entity in the loaded file, cast as a [BodyTrackedEntity](../bodytrackedentity.md).

## Mentioned In

- [Loading entities from a file](../loading-entities-from-a-file.md)

<a id="discussion"></a>

## Discussion

Loading an [Entity](../entity.md) with this method blocks the main actor because it’s synchronous, so only call it from a command-line application. The method can stall a regular app, which makes it visibly hitch, and the system terminates an app if its UI becomes unresponsive. See [init(named:in:)](init%28named_in_%29.md) for an example that demonstrates how to safely load content.

## See Also

### Loading a flattened body-tracked entity

- [loadBodyTracked(contentsOf:withName:)](loadbodytracked%28contentsof_withname_%29.md): Synchronously loads a body-tracked entity from a file URL.
- [loadBodyTrackedAsync(contentsOf:withName:)](loadbodytrackedasync%28contentsof_withname_%29.md): Deprecated. Asynchronously loads a body-tracked entity from a file URL.
- [loadBodyTrackedAsync(named:in:)](loadbodytrackedasync%28named_in_%29.md): Deprecated. Asynchronously loads a body-tracked entity from a bundle.
