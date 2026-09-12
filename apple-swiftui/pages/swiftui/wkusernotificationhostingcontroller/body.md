> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/wkusernotificationhostingcontroller/body](https://developer.apple.com/documentation/swiftui/wkusernotificationhostingcontroller/body)

# body

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** watchOS 6.0+

The root view of the view hierarchy to display for your notification interface.

## Declaration

```swift
@MainActor @preconcurrency var body: Body { get }
```

<a id="discussion"></a>

## Discussion

Override this property and return the root view of your SwiftUI view hierarchy from your implementation. If you don’t override this property, accessing the default implementation triggers an exception.
