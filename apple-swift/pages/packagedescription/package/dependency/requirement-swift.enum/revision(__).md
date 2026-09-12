> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/dependency/requirement-swift.enum/revision(_:)](https://developer.apple.com/documentation/packagedescription/package/dependency/requirement-swift.enum/revision(_:))

# revision(\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM  (deprecated in 5.6)

Returns a requirement for a source control revision such as the hash of a commit.

## Declaration

```swift
static func revision(_ ref: String) -> Package.Dependency.Requirement
```

## Parameters

- `ref`: The Git revision, usually a commit hash.

<a id="discussion"></a>

## Discussion

Note that packages that use commit-based dependency requirements can’t be depended upon by packages that use version-based dependency requirements; you should remove commit-based dependency requirements before publishing a version of your package.

The following example defines a version requirement for a specific commit hash.

```swift
.revision(“e74b07278b926c9ec6f9643455ea00d1ce04a021”)
```
