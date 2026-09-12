> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/crashreportextension/crashedprocess/symbolicateaddresses(_:)](https://developer.apple.com/documentation/crashreportextension/crashedprocess/symbolicateaddresses(_:))

# symbolicateAddresses(\_:)

**Framework:** CrashReportExtension  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS · visionOS · watchOS

Symbolicates an array of addresses, returning symbol information with inline frame expansion.

## Declaration

```swift
final func symbolicateAddresses(_ addresses: [UInt64]) -> [[SymbolicatedFrame]]
```

## Parameters

- `addresses`: The addresses to symbolicate.

<a id="return-value"></a>

## Return Value

An array of frame arrays, in order of the addresses requested.

## See Also

### Symbolicating addresses

- [symbolicateAddress(\_:)](symbolicateaddress%28__%29.md): Symbolicates an address, returning symbol info with inline frame expansion.
- [SymbolicatedFrame](../symbolicatedframe.md): A type that represents a single symbolicated stack frame.
