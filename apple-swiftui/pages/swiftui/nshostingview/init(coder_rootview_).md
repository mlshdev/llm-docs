> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nshostingview/init(coder:rootview:)](https://developer.apple.com/documentation/swiftui/nshostingview/init(coder:rootview:))

# init(coder:rootView:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 15.4+

Creates a hosting view object from an archive and the specified SwiftUI view.

## Declaration

```swift
@MainActor @preconcurrency init?(coder: NSCoder, rootView: Content)
```

## Parameters

- `coder`: The decoder to use during initialization.
- `rootView`: The root view of the SwiftUI view hierarchy that you want to manage using this hosting view.
