> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelconfiguration/init(for:isstoredinmemoryonly:)](https://developer.apple.com/documentation/swiftdata/modelconfiguration/init(for:isstoredinmemoryonly:))

# init(for:isStoredInMemoryOnly:)

**Framework:** SwiftData  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

Creates a model configuration for the specified model types.

## Declaration

```swift
init(for forTypes: any PersistentModel.Type..., isStoredInMemoryOnly: Bool = false)
```

## Parameters

- `forTypes`: A list of persistent model types.
- `isStoredInMemoryOnly`: A Boolean value that determines whether the associated persistent storage is ephemeral and exists only in memory. The default value is `false`.

## See Also

### Creating a model configuration

- [init(isStoredInMemoryOnly:)](init%28isstoredinmemoryonly_%29.md): Creates a basic model configuration.
- [init(\_:schema:isStoredInMemoryOnly:allowsSave:groupContainer:cloudKitDatabase:)](init%28__schema_isstoredinmemoryonly_allowssave_groupcontainer_cloudkitdatabase_%29.md): Creates a named model configuration for the specified schema.
- [init(\_:schema:url:allowsSave:cloudKitDatabase:)](init%28__schema_url_allowssave_cloudkitdatabase_%29.md): Creates a named model configuration that specifies the on-disk location of the schema’s persistent storage.
