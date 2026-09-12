> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/resourcesexportingwithoptions/resourcesversion](https://developer.apple.com/documentation/appmigrationkit/resourcesexportingwithoptions/resourcesversion)

# resourcesVersion

**Framework:** AppMigrationKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A property that identifies the version of the format the export uses.

## Declaration

```swift
var resourcesVersion: String { get }
```

<a id="discussion"></a>

## Discussion

AppMigrationKit transmits this value along with the exported resources. Use this value to distinguish between potentially incompatible versions of your app’s data.

## See Also

### Declaring resource properties

- [resourcesSizeEstimate](resourcessizeestimate.md): The estimated size of all resources to export, in bytes.
- [resourcesCompressible](resourcescompressible.md): A property that indicates whether the archiver attempts to compress the resources passed to it.
