> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/resourcesexportingwithoptions/resourcescompressible](https://developer.apple.com/documentation/appmigrationkit/resourcesexportingwithoptions/resourcescompressible)

# resourcesCompressible

**Framework:** AppMigrationKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A property that indicates whether the archiver attempts to compress the resources passed to it.

## Declaration

```swift
var resourcesCompressible: Bool { get }
```

<a id="discussion"></a>

## Discussion

If the majority of resources to export are already compressed files – such as most image file formats – implement this property to return `false`, since the files won’t benefit from further compression. On the other hand, if most exported resources are text files or other compressible data, return `true` to allow AppMigrationKit to compress them. The compression allows AppMigrationKit to optimize the migration process.

## See Also

### Declaring resource properties

- [resourcesSizeEstimate](resourcessizeestimate.md): The estimated size of all resources to export, in bytes.
- [resourcesVersion](resourcesversion.md): A property that identifies the version of the format the export uses.
