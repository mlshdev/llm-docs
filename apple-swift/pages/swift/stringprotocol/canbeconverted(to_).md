> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/stringprotocol/canbeconverted(to:)

# canBeConverted(to:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the string can be converted to the specified encoding without loss of information.

## Declaration

```swift
func canBeConverted(to encoding: String.Encoding) -> Bool
```

## Parameters

- `encoding`: A string encoding.

<a id="return-value"></a>

## Return Value

`true` if the string can be encoded in `encoding` without loss of information; otherwise, `false`.
