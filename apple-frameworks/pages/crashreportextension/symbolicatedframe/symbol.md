> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/crashreportextension/symbolicatedframe/symbol](https://developer.apple.com/documentation/crashreportextension/symbolicatedframe/symbol)

# symbol

**Framework:** CrashReportExtension  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS · visionOS · watchOS

The symbol associated with the stack frame.

## Declaration

```swift
let symbol: String
```

## See Also

### Accessing symbolicated frame properties

- [sourceFile](sourcefile.md): The name of the source file, if available.
- [sourceLine](sourceline.md): The line number within the source file, if available.
- [symbolOffset](symboloffset.md): The symbol offset within the frame.
- [isInline](isinline.md): A flag that indicates if the stack frame is inline.
