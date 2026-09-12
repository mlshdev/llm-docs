> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progressmanager/summary(of:)-3kyy8](https://developer.apple.com/documentation/foundation/progressmanager/summary(of:)-3kyy8)

# summary(of:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a summary for a custom URL property across the progress subtree.

## Declaration

```swift
final func summary<P>(of property: KeyPath<ProgressManager.Properties, P.Type>) -> P.Summary where P : ProgressManager.Property, P.Summary == [URL?], P.Value == URL?
```

## Parameters

- `property`: The type of the URL property to summarize. Must be a property where the value type is `URL?` and the summary type is `[URL?]`.

<a id="return-value"></a>

## Return Value

A `[URL?]` summary value for the specified property.

<a id="discussion"></a>

## Discussion

This method aggregates the values of a custom URL property from this progress manager and all its children, returning a consolidated summary value as an array of URLs.
