> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/dependency/requirement-swift.enum/uptonextminor(from:)](https://developer.apple.com/documentation/packagedescription/package/dependency/requirement-swift.enum/uptonextminor(from:))

# upToNextMinor(from:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM  (deprecated in 5.6)

A source control requirement bounded to the given version’s minor version number.

## Declaration

```swift
static func upToNextMinor(from version: Version) -> Package.Dependency.Requirement
```

## Parameters

- `version`: The minimum version for the version range.

<a id="return-value"></a>

## Return Value

A source control requirement instance.

<a id="discussion"></a>

## Discussion

Returns a requirement for a version range, starting at the given minimum version and going up to but not including the next minor version.
