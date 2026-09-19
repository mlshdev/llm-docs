> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/symmetrickey/init(copyingwithzeroing:)

# init(copyingWithZeroing:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a key from the given data, zeroing out the bytes afterward.

## Declaration

```swift
init(copyingWithZeroing bytes: inout MutableRawSpan)
```
