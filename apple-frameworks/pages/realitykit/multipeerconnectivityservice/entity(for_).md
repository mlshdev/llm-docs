> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/multipeerconnectivityservice/entity(for:)](https://developer.apple.com/documentation/realitykit/multipeerconnectivityservice/entity(for:))

# entity(for:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+

Gets the entity with the given identifier.

## Declaration

```swift
@MainActor @preconcurrency func entity(for identifier: MultipeerConnectivityService.Identifier) -> Entity?
```

## Parameters

- `identifier`: The identifier.

<a id="return-value"></a>

## Return Value

The entity with the corresponding identifier.
