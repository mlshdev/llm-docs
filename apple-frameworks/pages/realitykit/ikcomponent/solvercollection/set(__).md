> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ikcomponent/solvercollection/set(_:)](https://developer.apple.com/documentation/realitykit/ikcomponent/solvercollection/set(_:))

# set(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Updates the element with identifier matching the new value.

## Declaration

```swift
@discardableResult mutating func set(_ newValue: IKComponent.SolverCollection.Element) -> IKComponent.SolverCollection.Element?
```

## Parameters

- `newValue`: The new value to store.

<a id="return-value"></a>

## Return Value

The previous value if the identifier was found, nil otherwise.
