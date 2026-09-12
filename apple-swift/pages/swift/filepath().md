> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/filepath()](https://developer.apple.com/documentation/swift/filepath())

# filePath()

**Framework:** Swift  
**Kind:** Macro  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Produces the complete path to the file in which the macro appears.

## Declaration

```swift
@freestanding(expression) macro filePath<T>() -> T where T : ExpressibleByStringLiteral
```

<a id="overview"></a>

## Overview

Because `#fileID` doesn’t embed the full path to the source file, unlike `#filePath`, it gives you better privacy and reduces the size of the compiled binary. Avoid using `#filePath` outside of tests, build scripts, or other code that doesn’t become part of the shipping program.

This macro’s value can be changed by `#sourceLocation`, as described in [Line Control Statement](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/statements#Line-Control-Statement) in [The Swift Programming Language](https://docs.swift.org/swift-book/).

## See Also

### Getting Source Location Information

- [file()](file%28%29.md): Produces the path to the file in which it appears.
- [fileID()](fileid%28%29.md): Produces a unique identifier for the source file in which the macro appears.
- [function()](function%28%29.md): Produces the name of the declaration in which it appears.
- [line()](line%28%29.md): Produces the line number on which it appears.
- [column()](column%28%29.md): Produces the column number in which the macro begins.
