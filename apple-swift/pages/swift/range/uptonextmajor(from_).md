> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/range/uptonextmajor(from:)

# upToNextMajor(from:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** macOS 10.10+

Returns a requirement for a version range, starting at the given minimum version and going up to the next major version. This is the recommended version requirement.

## Declaration

```swift
static func upToNextMajor(from version: Version) -> Range<Bound> where Bound == Version
```

## Parameters

- `version`: The minimum version for the version range.
