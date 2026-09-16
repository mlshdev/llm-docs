> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/stringprotocol/write(to:atomically:encoding:)

# write(to:atomically:encoding:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Writes the contents of the `String` to the URL specified by url using the specified encoding.

## Declaration

```swift
func write(to url: URL, atomically useAuxiliaryFile: Bool, encoding enc: String.Encoding) throws
```
