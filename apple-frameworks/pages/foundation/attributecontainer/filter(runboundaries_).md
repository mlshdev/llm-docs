> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributecontainer/filter(runboundaries:)](https://developer.apple.com/documentation/foundation/attributecontainer/filter(runboundaries:))

# filter(runBoundaries:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a copy of the attribute container with only attributes that have the provided run boundaries.

## Declaration

```swift
func filter(runBoundaries: AttributedString.AttributeRunBoundaries?) -> AttributeContainer
```

## Parameters

- `runBoundaries`: The required `runBoundaries` value of the filtered attributes. If `nil` is provided, only attributes not bound to any specific boundary will be returned.

<a id="return-value"></a>

## Return Value

A copy of the attribute container with only attributes whose `runBoundaries` property matches the provided value.
