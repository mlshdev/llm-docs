> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/function()](https://developer.apple.com/documentation/swift/function())

# function()

**Framework:** Swift  
**Kind:** Macro  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Produces the name of the declaration in which it appears.

## Declaration

```swift
@freestanding(expression) macro function<T>() -> T where T : ExpressibleByStringLiteral
```

<a id="overview"></a>

## Overview

Inside a function, the value `#function` produces is the name of that function, inside a method it’s the name of that method, inside a property getter or setter it’s the name of that property, inside special members like `init` or `subscript` it’s the name of that keyword, and at the top level of a file it’s the name of the current module.

When used as the default value of a function or method parameter, this macro’s value is determined when the default value expression is evaluated at the call site. For example:

```swift
func logFunctionName(string: String = #function) {
    print(string)
}
func myFunction() {
    logFunctionName() // Prints "myFunction()".
}
```

## See Also

### Getting Source Location Information

- [file()](file%28%29.md): Produces the path to the file in which it appears.
- [fileID()](fileid%28%29.md): Produces a unique identifier for the source file in which the macro appears.
- [filePath()](filepath%28%29.md): Produces the complete path to the file in which the macro appears.
- [line()](line%28%29.md): Produces the line number on which it appears.
- [column()](column%28%29.md): Produces the column number in which the macro begins.
