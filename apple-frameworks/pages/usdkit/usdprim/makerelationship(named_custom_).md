> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdprim/makerelationship(named:custom:)

# makeRelationship(named:custom:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a relationship with the given name on this prim, or returns the existing relationship if one already exists.

## Declaration

```swift
@discardableResult func makeRelationship(named name: USDToken, custom: Bool = true) -> USDPrim.Relationship
```

## Parameters

- `name`: The name of the relationship to create.
- `custom`: A Boolean value that indicates whether the relationship is a custom relationship not defined by a schema.

<a id="return-value"></a>

## Return Value

The relationship with the given name.
