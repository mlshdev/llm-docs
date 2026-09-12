> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/versionedschema](https://developer.apple.com/documentation/swiftdata/versionedschema)

# VersionedSchema

**Framework:** SwiftData  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

An interface for describing a specific version of a schema, including the models it contains.

## Declaration

```swift
protocol VersionedSchema : SendableMetatype
```

## Topics

### Describing the version

- [versionIdentifier](versionedschema/versionidentifier.md): The textual description of the migration’s version or purpose.

### Specifying the included models

- [models](versionedschema/models.md): The models to include in this version of the schema.

## Relationships

### Inherits From

- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a schema

- [init(\_:version:)](schema/init%28__version_%29-8el78.md)
- [init(\_:version:)](schema/init%28__version_%29-8jo9o.md)
- [init(versionedSchema:)](schema/init%28versionedschema_%29.md)
- [init()](schema/init%28%29.md)
- [Schema components](schemacomponents.md): Specify the constituent parts of your schema, including entities, attributes, and relationships.
