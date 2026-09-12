> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsstagedmigrationmanager/stages](https://developer.apple.com/documentation/coredata/nsstagedmigrationmanager/stages)

# stages (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The migration stages.

## Declaration

```swift
var stages: [NSMigrationStage] { get }
```

<a id="Discussion"></a>

## Discussion

Core Data sets this property to the `stages` parameter you specify when creating the migration manager.

# stages (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The migration stages.

## Declaration

```objectivec
@property (strong, readonly) NSArray<__kindof NSMigrationStage *> * stages;
```

<a id="Discussion"></a>

## Discussion

Core Data sets this property to the `stages` parameter you specify when creating the migration manager.
