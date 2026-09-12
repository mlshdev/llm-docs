> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entitygeometricpins/subscript(_:)](https://developer.apple.com/documentation/realitykit/entitygeometricpins/subscript(_:))

# subscript(\_:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Obtains a geometric pin the entity owns by name.

## Declaration

```swift
@MainActor subscript(name: String) -> GeometricPin? { get }
```

## Parameters

- `name`: The name of an existing pin the entity owns.

<a id="return-value"></a>

## Return Value

The pin that associates with the name, or `nil` if no pin with a matching name is found.
