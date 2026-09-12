> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/viewdimensions/subscript(_:)](https://developer.apple.com/documentation/swiftui/viewdimensions/subscript(_:))

# subscript(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Subscript  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Gets the value of the given horizontal guide.

## Declaration

```swift
subscript(guide: HorizontalAlignment) -> CGFloat { get }
```

<a id="overview"></a>

## Overview

Find the offset of a particular guide in the corresponding view by using that guide as an index to read from the context:

```swift
.alignmentGuide(.leading) { context in
    context[.leading] - 10
}
```

For information about using subscripts in Swift to access member elements of a collection, list, or, sequence, see [Subscripts](https://docs.swift.org/swift-book/LanguageGuide/Subscripts.html) in *The Swift Programming Language*.

## See Also

### Accessing guide values

- [subscript(explicit:)](subscript%28explicit_%29.md): Gets the explicit value of the given horizontal alignment guide.
