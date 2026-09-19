> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paperkit/markuporderedset/elementid/init(_:)-5ja8j

# init(\_:)

**Framework:** PaperKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Creates a new element ID from a markup ID.

## Declaration

```swift
init<T>(_ id: MarkupID<T>) where T : Markup
```

<a id="discussion"></a>

## Discussion

Supports all PaperKit types, will `fatalError` if used for an unsupported type.

## See Also

### Creating an element ID

- [init(\_:)](init%28__%29-5ykum.md): Creates a new element ID from a stroke UUID.
