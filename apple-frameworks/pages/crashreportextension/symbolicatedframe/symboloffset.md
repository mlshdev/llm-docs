> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/crashreportextension/symbolicatedframe/symboloffset](https://developer.apple.com/documentation/crashreportextension/symbolicatedframe/symboloffset)

# symbolOffset

**Framework:** CrashReportExtension  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS · visionOS · watchOS

The symbol offset within the frame.

## Declaration

```swift
let symbolOffset: UInt64
```

## See Also

### Accessing symbolicated frame properties

- [sourceFile](sourcefile.md): The name of the source file, if available.
- [sourceLine](sourceline.md): The line number within the source file, if available.
- [symbol](symbol.md): The symbol associated with the stack frame.
- [isInline](isinline.md): A flag that indicates if the stack frame is inline.
