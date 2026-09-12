> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelcontainer/schema](https://developer.apple.com/documentation/swiftdata/modelcontainer/schema)

# schema

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

The schema that maps your app’s model classes to the associated data in the app’s persistent storage.

## Declaration

```swift
final let schema: Schema
```

<a id="discussion"></a>

## Discussion

This property provides a reference to the schema you specified when calling one the container’s initializers.

## See Also

### Managing schema and configuration details

- [configurations](configurations.md): The configurations that describe how to manage the persisted data for specific groups of models.
- [migrationPlan](migrationplan.md): The plan that describes the evolution of your app’s schema and how to migrate between specific versions.
