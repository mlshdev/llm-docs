> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/target/binarytarget(name:url:checksum:)](https://developer.apple.com/documentation/packagedescription/target/binarytarget(name:url:checksum:))

# binaryTarget(name:url:checksum:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.3+

Creates a binary target that references a remote artifact.

## Declaration

```swift
static func binaryTarget(name: String, url: String, checksum: String) -> Target
```

## Parameters

- `name`: The name of the target.
- `url`: The URL to the binary artifact. This URL must point to an archive file that contains a binary artifact in its root directory.
- `checksum`: The checksum of the archive file that contains the binary artifact.

<a id="discussion"></a>

## Discussion

Binary targets are only available on Apple platforms.

## See Also

### Creating a Binary Target

- [binaryTarget(name:path:)](binarytarget%28name_path_%29.md): Creates a binary target that references an artifact on disk.
- [url](url.md): The URL of a binary target.
- [checksum](checksum.md): The checksum for the archive file that contains the referenced binary artifact.
