> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/target/checksum](https://developer.apple.com/documentation/packagedescription/target/checksum)

# checksum

**Framework:** PackageDescription  
**Kind:** Instance Property  
**Availability:** SwiftPM 5.3+

The checksum for the archive file that contains the referenced binary artifact.

## Declaration

```swift
final var checksum: String?
```

<a id="discussion"></a>

## Discussion

If you make a remote binary framework available as a Swift package, declare a remote, or *URL-based*, binary target in your package manifest with [binaryTarget(name:url:checksum:)](binarytarget%28name_url_checksum_%29.md). Always run `swift package compute-checksum path/to/MyFramework.zip` at the command line to make sure you create a correct SHA256 checksum.

For more information, see [Distributing binary frameworks as Swift packages](https://developer.apple.com/documentation/xcode/distributing-binary-frameworks-as-swift-packages).

## See Also

### Creating a Binary Target

- [binaryTarget(name:path:)](binarytarget%28name_path_%29.md): Creates a binary target that references an artifact on disk.
- [binaryTarget(name:url:checksum:)](binarytarget%28name_url_checksum_%29.md): Creates a binary target that references a remote artifact.
- [url](url.md): The URL of a binary target.
