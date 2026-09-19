> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/networkfixedwidthinteger/init(bigendian:)

# init(bigEndian:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates an integer from its big-endian representation, changing the byte order if necessary.

## Declaration

```swift
override init(bigEndian: Self)
```

## Parameters

- `value`: A value to use as the big-endian representation of the new integer.
