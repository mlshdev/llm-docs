> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/crashreportextension/crashedprocess/symbolicateaddress(_:)](https://developer.apple.com/documentation/crashreportextension/crashedprocess/symbolicateaddress(_:))

# symbolicateAddress(\_:)

**Framework:** CrashReportExtension  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS · visionOS · watchOS

Symbolicates an address, returning symbol info with inline frame expansion.

## Declaration

```swift
final func symbolicateAddress(_ address: UInt64) -> [SymbolicatedFrame]
```

## Parameters

- `address`: The address to symbolicate.

<a id="return-value"></a>

## Return Value

An array of frames, starting with the outermost.

## See Also

### Symbolicating addresses

- [symbolicateAddresses(\_:)](symbolicateaddresses%28__%29.md): Symbolicates an array of addresses, returning symbol information with inline frame expansion.
- [SymbolicatedFrame](../symbolicatedframe.md): A type that represents a single symbolicated stack frame.
