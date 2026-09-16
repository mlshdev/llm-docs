> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/wkhostingcontroller/body

# body

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** watchOS 6.0+

The root view of the view hierarchy to display for your interface controller.

## Declaration

```swift
@MainActor @preconcurrency var body: Body { get }
```

<a id="discussion"></a>

## Discussion

Override this property and return the root view of your SwiftUI view hierarchy from your implementation. If you don’t override this property, accessing the default implementation triggers an exception.
