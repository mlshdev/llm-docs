> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progressreporter/summary(of:)-2qbq7](https://developer.apple.com/documentation/foundation/progressreporter/summary(of:)-2qbq7)

# summary(of:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a summary for the specified unsigned integer array property across the progress subtree.

## Declaration

```swift
final func summary<P>(of property: KeyPath<ProgressManager.Properties, P.Type>) -> [UInt64] where P : ProgressManager.Property, P.Summary == [UInt64], P.Value == UInt64
```

## Parameters

- `property`: The type of the unsigned integer property to summarize. Must be a property where the value type is `UInt64` and the summary type is `[UInt64]`.

<a id="return-value"></a>

## Return Value

The aggregated summary value for the specified property across the entire subtree.

<a id="discussion"></a>

## Discussion

This method aggregates the values of a custom unsigned integer property from the underlying progress manager and all its children, returning a consolidated summary value as an array.
