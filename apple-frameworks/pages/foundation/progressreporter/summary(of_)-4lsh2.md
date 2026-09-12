> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progressreporter/summary(of:)-4lsh2](https://developer.apple.com/documentation/foundation/progressreporter/summary(of:)-4lsh2)

# summary(of:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a summary for the specified double property across the progress subtree.

## Declaration

```swift
final func summary<P>(of property: KeyPath<ProgressManager.Properties, P.Type>) -> Double where P : ProgressManager.Property, P.Summary == Double, P.Value == Double
```

## Parameters

- `property`: The type of the double property to summarize. Must be a property where both the value and summary types are `Double`.

<a id="return-value"></a>

## Return Value

The aggregated summary value for the specified property across the entire subtree.

<a id="discussion"></a>

## Discussion

This method aggregates the values of a custom double property from the underlying progress manager and all its children, returning a consolidated summary value.
