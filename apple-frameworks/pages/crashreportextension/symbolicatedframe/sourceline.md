> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/crashreportextension/symbolicatedframe/sourceline](https://developer.apple.com/documentation/crashreportextension/symbolicatedframe/sourceline)

# sourceLine

**Framework:** CrashReportExtension  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS · visionOS · watchOS

The line number within the source file, if available.

## Declaration

```swift
let sourceLine: Int?
```

## See Also

### Accessing symbolicated frame properties

- [sourceFile](sourcefile.md): The name of the source file, if available.
- [symbol](symbol.md): The symbol associated with the stack frame.
- [symbolOffset](symboloffset.md): The symbol offset within the frame.
- [isInline](isinline.md): A flag that indicates if the stack frame is inline.
