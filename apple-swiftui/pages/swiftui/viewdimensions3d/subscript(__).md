> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/viewdimensions3d/subscript(_:)](https://developer.apple.com/documentation/swiftui/viewdimensions3d/subscript(_:))

# subscript(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Subscript  
**Availability:** visionOS 1.0+

Gets the value of the given depth guide.

## Declaration

```swift
subscript(guide: DepthAlignment) -> CGFloat { get }
```

<a id="overview"></a>

## Overview

Find the offset of a particular guide in the corresponding view by using that guide as an index to read from the context:

```swift
.alignmentGuide(.front) { context in
    context[.front] - 10
}
```

For information about using subscripts in Swift to access member elements of a collection, list, or, sequence, see [Subscripts](https://docs.swift.org/swift-book/LanguageGuide/Subscripts.html) in *The Swift Programming Language*.
