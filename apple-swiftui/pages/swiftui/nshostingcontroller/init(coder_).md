> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nshostingcontroller/init(coder:)](https://developer.apple.com/documentation/swiftui/nshostingcontroller/init(coder:))

# init(coder:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates a hosting controller object from the contents of the specified archive.

## Declaration

```swift
@MainActor @preconcurrency required dynamic init?(coder: NSCoder)
```

## Parameters

- `coder`: The decoder to use during initialization.

<a id="discussion"></a>

## Discussion

The default implementation of this method throws an exception. To create your view controller from an archive, override this method and initialize the superclass using the [init(coder:rootView:)](init%28coder_rootview_%29.md) method instead.

## See Also

### Creating a hosting controller object

- [init(rootView:)](init%28rootview_%29.md): Creates a hosting controller object that wraps the specified SwiftUI view.
- [init(coder:rootView:)](init%28coder_rootview_%29.md): Creates a hosting controller object from an archive and the specified SwiftUI view.
