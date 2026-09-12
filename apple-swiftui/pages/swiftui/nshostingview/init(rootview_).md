> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nshostingview/init(rootview:)](https://developer.apple.com/documentation/swiftui/nshostingview/init(rootview:))

# init(rootView:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates a hosting view object that wraps the specified SwiftUI view.

## Declaration

```swift
@MainActor @preconcurrency required init(rootView: Content)
```

## Parameters

- `rootView`: The root view of the SwiftUI view hierarchy that you want to manage using this hosting view.

## See Also

### Creating a hosting view

- [init(coder:)](init%28coder_%29.md): Creates a hosting view object from the contents of the specified archive.
- [prepareForReuse()](prepareforreuse%28%29.md)
