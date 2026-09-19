> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/crashreportextension/crashreason/exception

# exception

**Framework:** CrashReportExtension  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS · visionOS · watchOS

The Mach exception type.

## Declaration

```swift
let exception: Int32
```

<a id="discussion"></a>

## Discussion

Possible values of this property include `EXC_BAD_ACCESS` and `EXC_CRASH`.

## See Also

### Inpecting crash reason properties

- [codes](codes.md): An array of exception-specific codes providing additional details.
