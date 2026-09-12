> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nshostingcontroller/init(rootview:)](https://developer.apple.com/documentation/swiftui/nshostingcontroller/init(rootview:))

# init(rootView:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates a hosting controller object that wraps the specified SwiftUI view.

## Declaration

```swift
@MainActor @preconcurrency init(rootView: Content)
```

## Parameters

- `rootView`: The root view of the SwiftUI view hierarchy that you want to manage using the hosting view controller.

## See Also

### Creating a hosting controller object

- [init(coder:rootView:)](init%28coder_rootview_%29.md): Creates a hosting controller object from an archive and the specified SwiftUI view.
- [init(coder:)](init%28coder_%29.md): Creates a hosting controller object from the contents of the specified archive.
