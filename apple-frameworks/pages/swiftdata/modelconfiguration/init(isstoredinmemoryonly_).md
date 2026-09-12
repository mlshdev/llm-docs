> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelconfiguration/init(isstoredinmemoryonly:)](https://developer.apple.com/documentation/swiftdata/modelconfiguration/init(isstoredinmemoryonly:))

# init(isStoredInMemoryOnly:)

**Framework:** SwiftData  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

Creates a basic model configuration.

## Declaration

```swift
init(isStoredInMemoryOnly: Bool = false)
```

## Parameters

- `isStoredInMemoryOnly`: A Boolean value that determines whether the associated persistent storage is ephemeral and exists only in memory. The default value is `false`.

## See Also

### Creating a model configuration

- [init(for:isStoredInMemoryOnly:)](init%28for_isstoredinmemoryonly_%29.md): Creates a model configuration for the specified model types.
- [init(\_:schema:isStoredInMemoryOnly:allowsSave:groupContainer:cloudKitDatabase:)](init%28__schema_isstoredinmemoryonly_allowssave_groupcontainer_cloudkitdatabase_%29.md): Creates a named model configuration for the specified schema.
- [init(\_:schema:url:allowsSave:cloudKitDatabase:)](init%28__schema_url_allowssave_cloudkitdatabase_%29.md): Creates a named model configuration that specifies the on-disk location of the schema’s persistent storage.
