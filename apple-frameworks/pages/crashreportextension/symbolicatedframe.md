> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/crashreportextension/symbolicatedframe](https://developer.apple.com/documentation/crashreportextension/symbolicatedframe)

# SymbolicatedFrame

**Framework:** CrashReportExtension  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS · visionOS · watchOS

A type that represents a single symbolicated stack frame.

## Declaration

```swift
struct SymbolicatedFrame
```

## Topics

### Creating a symbolicated frame

- [init(symbol:symbolOffset:sourceFile:sourceLine:isInline:)](symbolicatedframe/init%28symbol_symboloffset_sourcefile_sourceline_isinline_%29.md)

### Accessing symbolicated frame properties

- [sourceFile](symbolicatedframe/sourcefile.md): The name of the source file, if available.
- [sourceLine](symbolicatedframe/sourceline.md): The line number within the source file, if available.
- [symbol](symbolicatedframe/symbol.md): The symbol associated with the stack frame.
- [symbolOffset](symbolicatedframe/symboloffset.md): The symbol offset within the frame.
- [isInline](symbolicatedframe/isinline.md): A flag that indicates if the stack frame is inline.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Symbolicating addresses

- [symbolicateAddress(\_:)](crashedprocess/symbolicateaddress%28__%29.md): Symbolicates an address, returning symbol info with inline frame expansion.
- [symbolicateAddresses(\_:)](crashedprocess/symbolicateaddresses%28__%29.md): Symbolicates an array of addresses, returning symbol information with inline frame expansion.
