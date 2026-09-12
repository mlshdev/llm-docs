> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/fileid()](https://developer.apple.com/documentation/swift/fileid())

# fileID()

**Framework:** Swift  
**Kind:** Macro  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Produces a unique identifier for the source file in which the macro appears.

## Declaration

```swift
@freestanding(expression) macro fileID<T>() -> T where T : ExpressibleByStringLiteral
```

<a id="overview"></a>

## Overview

The unique identifier has the form *module*/*file*, where *file* is the name of the file in which the expression appears and *module* is the name of the module that this file is part of.

Because `#fileID` doesn’t embed the full path to the source file, unlike `#filePath`, it gives you better privacy and reduces the size of the compiled binary.

Note: To parse a `#fileID` expression, read the module name as the text before the first slash (`/`) and the filename as the text after the last slash. In future versions of Swift, the string might contain multiple slashes, such as `MyModule/some/disambiguation/MyFile.swift`.

This macro’s value can be changed by `#sourceLocation`, as described in [Line Control Statement](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/statements#Line-Control-Statement) in [The Swift Programming Language](https://docs.swift.org/swift-book/).

## See Also

### Getting Source Location Information

- [file()](file%28%29.md): Produces the path to the file in which it appears.
- [filePath()](filepath%28%29.md): Produces the complete path to the file in which the macro appears.
- [function()](function%28%29.md): Produces the name of the declaration in which it appears.
- [line()](line%28%29.md): Produces the line number on which it appears.
- [column()](column%28%29.md): Produces the column number in which the macro begins.
