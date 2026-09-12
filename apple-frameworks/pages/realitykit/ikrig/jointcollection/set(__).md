> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ikrig/jointcollection/set(_:)](https://developer.apple.com/documentation/realitykit/ikrig/jointcollection/set(_:))

# set(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Updates the element with identifier matching the provided value’s identifier.

## Declaration

```swift
@discardableResult mutating func set(_ newValue: IKRig.JointCollection.Element) -> IKRig.JointCollection.Element?
```

## Parameters

- `newValue`: The new element value to store.

<a id="return-value"></a>

## Return Value

The previous element value if the identifier exists, `nil` otherwise.

<a id="discussion"></a>

## Discussion

If an element with the provided identifier is not contained - does nothing.
