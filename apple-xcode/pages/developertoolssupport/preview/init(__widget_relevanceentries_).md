> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/developertoolssupport/preview/init(_:widget:relevanceentries:)

# init(\_:widget:relevanceEntries:)

**Framework:** DeveloperToolsSupport  
**Kind:** Initializer  
**Availability:** watchOS 26.0+

Creates a preview of a relevance-driven widget.

## Declaration

```swift
@MainActor init<Entry>(_ name: String? = nil, widget: @escaping () -> some Widget, @PreviewRelevanceEntryBuilder<Entry> relevanceEntries: @escaping @MainActor () async -> [Entry]) where Entry : RelevanceEntry
```

<a id="discussion"></a>

## Discussion

The `#Preview` macro expands into a declaration that calls this initializer. To create a preview that appears in the canvas, you must use the macro, not instantiate a Preview directly.
