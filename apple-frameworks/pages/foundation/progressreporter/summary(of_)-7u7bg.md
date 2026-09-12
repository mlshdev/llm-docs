> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progressreporter/summary(of:)-7u7bg](https://developer.apple.com/documentation/foundation/progressreporter/summary(of:)-7u7bg)

# summary(of:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a summary for the specified integer property across the progress subtree.

## Declaration

```swift
final func summary<P>(of property: KeyPath<ProgressManager.Properties, P.Type>) -> Int where P : ProgressManager.Property, P.Summary == Int, P.Value == Int
```

## Parameters

- `property`: The type of the integer property to summarize. Must be a property where both the value and summary types are `Int`.

<a id="return-value"></a>

## Return Value

The aggregated summary value for the specified property across the entire subtree.

<a id="discussion"></a>

## Discussion

This method aggregates the values of a custom integer property from the underlying progress manager and all its children, returning a consolidated summary value.
