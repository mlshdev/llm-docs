> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/preview/init(_:widget:relevanceprovider:)](https://developer.apple.com/documentation/developertoolssupport/preview/init(_:widget:relevanceprovider:))

# init(\_:widget:relevanceProvider:)

**Framework:** DeveloperToolsSupport  
**Kind:** Initializer  
**Availability:** watchOS 26.0+

Creates a preview of a relevance-driven widget.

## Declaration

```swift
@MainActor init<Provider>(_ name: String? = nil, widget: @escaping @MainActor () -> some Widget, relevanceProvider: @escaping @MainActor () -> Provider) where Provider : RelevanceEntriesProvider
```

<a id="discussion"></a>

## Discussion

The `#Preview` macro expands into a declaration that calls this initializer. To create a preview that appears in the canvas, you must use the macro, not instantiate a Preview directly.
