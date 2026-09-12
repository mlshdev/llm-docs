> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uihostingcontroller/init(coder:rootview:)](https://developer.apple.com/documentation/swiftui/uihostingcontroller/init(coder:rootview:))

# init(coder:rootView:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+

Creates a hosting controller object from an archive and the specified SwiftUI view.

## Declaration

```swift
@MainActor @preconcurrency init?(coder aDecoder: NSCoder, rootView: Content)
```

## Parameters

- `rootView`: The root view of the SwiftUI view hierarchy that you want to manage using this view controller.

<a id="return-value"></a>

## Return Value

A `UIViewController` object that you can present from your interface.

## See Also

### Creating a hosting controller object

- [init(rootView:)](init%28rootview_%29.md): Creates a hosting controller object that wraps the specified SwiftUI view.
- [init(coder:)](init%28coder_%29.md): Creates a hosting controller object from the contents of the specified archive.
