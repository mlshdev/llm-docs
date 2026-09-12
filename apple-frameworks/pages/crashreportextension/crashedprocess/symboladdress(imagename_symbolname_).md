> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/crashreportextension/crashedprocess/symboladdress(imagename:symbolname:)](https://developer.apple.com/documentation/crashreportextension/crashedprocess/symboladdress(imagename:symbolname:))

# symbolAddress(imageName:symbolName:)

**Framework:** CrashReportExtension  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS · visionOS · watchOS

Looks up a symbol’s address by name.

## Declaration

```swift
final func symbolAddress(imageName: String?, symbolName: String) -> UInt64
```

## Parameters

- `imageName`: The path of the Mach-O binary image, such as `/usr/lib/libSystem.B.dylib`, that contains the symbol. Use `nil` to search for the symbol in all images loaded in the process space.
- `symbolName`: The name of the symbol to find.

<a id="return-value"></a>

## Return Value

The symbol’s address, or `0` if searching the image didn’t find the symbol.
