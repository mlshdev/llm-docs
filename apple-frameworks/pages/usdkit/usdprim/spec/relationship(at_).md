> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/spec/relationship(at:)](https://developer.apple.com/documentation/usdkit/usdprim/spec/relationship(at:))

# relationship(at:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the relationship spec at the given path within this prim.

## Declaration

```swift
func relationship(at path: USDLayer.Path) -> USDPrim.Relationship.Spec?
```

## Parameters

- `path`: The path to look up.

<a id="return-value"></a>

## Return Value

The relationship spec, or `nil` if none exists at `path`.
