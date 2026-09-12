> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/target/url](https://developer.apple.com/documentation/packagedescription/target/url)

# url

**Framework:** PackageDescription  
**Kind:** Instance Property  
**Availability:** SwiftPM 5.3+

The URL of a binary target.

## Declaration

```swift
final var url: String?
```

<a id="discussion"></a>

## Discussion

The URL points to an archive file that contains the referenced binary artifact at its root.

Binary targets are only available on Apple platforms.

## See Also

### Creating a Binary Target

- [binaryTarget(name:path:)](binarytarget%28name_path_%29.md): Creates a binary target that references an artifact on disk.
- [binaryTarget(name:url:checksum:)](binarytarget%28name_url_checksum_%29.md): Creates a binary target that references a remote artifact.
- [checksum](checksum.md): The checksum for the archive file that contains the referenced binary artifact.
