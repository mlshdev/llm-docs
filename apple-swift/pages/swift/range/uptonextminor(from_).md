> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/range/uptonextminor(from:)](https://developer.apple.com/documentation/swift/range/uptonextminor(from:))

# upToNextMinor(from:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** macOS 10.10+

Returns a requirement for a version range, starting at the given minimum version and going up to the next minor version.

## Declaration

```swift
static func upToNextMinor(from version: Version) -> Range<Bound> where Bound == Version
```

## Parameters

- `version`: The minimum version for the version range.
