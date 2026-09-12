> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entitygeometricpins/remove(named:)](https://developer.apple.com/documentation/realitykit/entitygeometricpins/remove(named:))

# remove(named:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Removes a geometric pin with the given name from this entity.

## Declaration

```swift
@MainActor func remove(named name: String)
```

## Parameters

- `name`: The name of the geometric pin to remove.

<a id="discussion"></a>

## Discussion

If found, the pin is removed from the entity’s [GeometricPinsComponent](../geometricpinscomponent.md). There is no effect if no matching [GeometricPin](../geometricpin.md) is found.
