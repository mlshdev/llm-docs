> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/line()](https://developer.apple.com/documentation/swift/line())

# line()

**Framework:** Swift  
**Kind:** Macro  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Produces the line number on which it appears.

## Declaration

```swift
@freestanding(expression) macro line<T>() -> T where T : ExpressibleByIntegerLiteral
```

<a id="overview"></a>

## Overview

This macro’s value can be changed by `#sourceLocation`, as described in [Line Control Statement](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/statements#Line-Control-Statement) in [The Swift Programming Language](https://docs.swift.org/swift-book/).

## See Also

### Getting Source Location Information

- [file()](file%28%29.md): Produces the path to the file in which it appears.
- [fileID()](fileid%28%29.md): Produces a unique identifier for the source file in which the macro appears.
- [filePath()](filepath%28%29.md): Produces the complete path to the file in which the macro appears.
- [function()](function%28%29.md): Produces the name of the declaration in which it appears.
- [column()](column%28%29.md): Produces the column number in which the macro begins.
