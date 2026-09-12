> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/schema/init(_:version:)-8jo9o](https://developer.apple.com/documentation/swiftdata/schema/init(_:version:)-8jo9o)

# init(\_:version:)

**Framework:** SwiftData  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

## Declaration

```swift
init(_ types: [any PersistentModel.Type], version: Schema.Version = Version(1, 0, 0))
```

## See Also

### Creating a schema

- [init(\_:version:)](init%28__version_%29-8el78.md)
- [init(versionedSchema:)](init%28versionedschema_%29.md)
- [VersionedSchema](../versionedschema.md): An interface for describing a specific version of a schema, including the models it contains.
- [init()](init%28%29.md)
- [Schema components](../schemacomponents.md): Specify the constituent parts of your schema, including entities, attributes, and relationships.
