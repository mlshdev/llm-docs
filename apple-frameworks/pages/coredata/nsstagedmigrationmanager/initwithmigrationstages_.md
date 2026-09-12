> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsstagedmigrationmanager/initwithmigrationstages:](https://developer.apple.com/documentation/coredata/nsstagedmigrationmanager/initwithmigrationstages:)

# initWithMigrationStages:

**Interface language:** Objective-C

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a migration manager with the specified stages.

## Declaration

```objectivec
- (instancetype) initWithMigrationStages:(NSArray<__kindof NSMigrationStage *> *) stages;
```

## Parameters

- `stages`: The array of migration stages to execute.

<a id="return-value"></a>

## Return Value

An initialized migration manager, or `nil` if Core Data can’t create one.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Core Data processes the migration stages in the order that you provide them.
