> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appmigrationkit/resourcesexportingwithoptions/resourcessizeestimate

# resourcesSizeEstimate

**Framework:** AppMigrationKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The estimated size of all resources to export, in bytes.

## Declaration

```swift
var resourcesSizeEstimate: Int { get async }
```

<a id="discussion"></a>

## Discussion

AppMigrationKit uses this property when preflighting the app transfer to estimate the data size required for the transfer.

## See Also

### Declaring resource properties

- [resourcesVersion](resourcesversion.md): A property that identifies the version of the format the export uses.
- [resourcesCompressible](resourcescompressible.md): A property that indicates whether the archiver attempts to compress the resources passed to it.
