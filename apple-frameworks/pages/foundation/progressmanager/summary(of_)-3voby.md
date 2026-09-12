> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progressmanager/summary(of:)-3voby](https://developer.apple.com/documentation/foundation/progressmanager/summary(of:)-3voby)

# summary(of:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a summary for a custom double property across the progress subtree.

## Declaration

```swift
final func summary<P>(of property: KeyPath<ProgressManager.Properties, P.Type>) -> P.Summary where P : ProgressManager.Property, P.Summary == Double, P.Value == Double
```

## Parameters

- `property`: The type of the double property to summarize. Must be a property where both the value and summary types are `Double`.

<a id="return-value"></a>

## Return Value

A `Double` summary value for the specified property.

<a id="discussion"></a>

## Discussion

This method aggregates the values of a custom double property from this progress manager and all its children, returning a consolidated summary value.
