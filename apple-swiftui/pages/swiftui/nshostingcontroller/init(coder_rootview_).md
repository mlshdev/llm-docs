> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nshostingcontroller/init(coder:rootview:)](https://developer.apple.com/documentation/swiftui/nshostingcontroller/init(coder:rootview:))

# init(coder:rootView:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates a hosting controller object from an archive and the specified SwiftUI view.

## Declaration

```swift
@MainActor @preconcurrency init?(coder: NSCoder, rootView: Content)
```

## Parameters

- `coder`: The decoder to use during initialization.
- `rootView`: The root view of the SwiftUI view hierarchy that you want to manage using this view controller.

## See Also

### Creating a hosting controller object

- [init(rootView:)](init%28rootview_%29.md): Creates a hosting controller object that wraps the specified SwiftUI view.
- [init(coder:)](init%28coder_%29.md): Creates a hosting controller object from the contents of the specified archive.
