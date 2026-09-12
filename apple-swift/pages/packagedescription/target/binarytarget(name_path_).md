> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/target/binarytarget(name:path:)](https://developer.apple.com/documentation/packagedescription/target/binarytarget(name:path:))

# binaryTarget(name:path:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.3+

Creates a binary target that references an artifact on disk.

## Declaration

```swift
static func binaryTarget(name: String, path: String) -> Target
```

## Parameters

- `name`: The name of the target.
- `path`: The path to the binary artifact. This path can point directly to a binary artifact or to an archive file that contains the binary artifact at its root.

<a id="discussion"></a>

## Discussion

Binary targets are only available on Apple platforms.

## See Also

### Creating a Binary Target

- [binaryTarget(name:url:checksum:)](binarytarget%28name_url_checksum_%29.md): Creates a binary target that references a remote artifact.
- [url](url.md): The URL of a binary target.
- [checksum](checksum.md): The checksum for the archive file that contains the referenced binary artifact.
