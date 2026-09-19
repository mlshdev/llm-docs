> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/ikrig/constraintscollection/set(_:)

# set(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Updates the element with identifier matching the provided value’s identifier.

## Declaration

```swift
@discardableResult mutating func set(_ newValue: IKRig.ConstraintsCollection.Element) -> IKRig.ConstraintsCollection.Element?
```

## Parameters

- `newValue`: The new element value to store.

<a id="return-value"></a>

## Return Value

The previous element value if the identifier exists, `nil` otherwise.

<a id="discussion"></a>

## Discussion

If an element with the provided identifier is not contained, adds a new one.
