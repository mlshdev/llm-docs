> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsstagedmigrationmanager/init(_:)](https://developer.apple.com/documentation/coredata/nsstagedmigrationmanager/init(_:))

# init(\_:)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+ · Swift 5.8+

Creates a migration manager with the specified stages.

## Declaration

```swift
convenience init(_ stages: [NSMigrationStage])
```

## Parameters

- `stages`: The array of migration stages to execute.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Core Data processes the migration stages in the order that you provide them.
