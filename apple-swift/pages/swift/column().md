> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/column()](https://developer.apple.com/documentation/swift/column())

# column()

**Framework:** Swift  
**Kind:** Macro  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Produces the column number in which the macro begins.

## Declaration

```swift
@freestanding(expression) macro column<T>() -> T where T : ExpressibleByIntegerLiteral
```

## See Also

### Getting Source Location Information

- [file()](file%28%29.md): Produces the path to the file in which it appears.
- [fileID()](fileid%28%29.md): Produces a unique identifier for the source file in which the macro appears.
- [filePath()](filepath%28%29.md): Produces the complete path to the file in which the macro appears.
- [function()](function%28%29.md): Produces the name of the declaration in which it appears.
- [line()](line%28%29.md): Produces the line number on which it appears.
