> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmigrationmanager/migrationprogress](https://developer.apple.com/documentation/coredata/nsmigrationmanager/migrationprogress)

# migrationProgress (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A number between `0` and `1` that indicates the proportion of completeness of the migration.

## Declaration

```swift
var migrationProgress: Float { get }
```

<a id="Discussion"></a>

## Discussion

If a migration is not taking place, this property is `1`. You can observe this value using key-value observing.

## See Also

### Monitoring a Migration’s Progress

- [currentEntityMapping](currententitymapping.md): The entity mapping currently being processed.

# migrationProgress (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A number between `0` and `1` that indicates the proportion of completeness of the migration.

## Declaration

```objectivec
@property (readonly) float migrationProgress;
```

<a id="Discussion"></a>

## Discussion

If a migration is not taking place, this property is `1`. You can observe this value using key-value observing.

## See Also

### Monitoring a Migration’s Progress

- [currentEntityMapping](currententitymapping.md): The entity mapping currently being processed.
