> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmigrationmanager/currententitymapping](https://developer.apple.com/documentation/coredata/nsmigrationmanager/currententitymapping)

# currentEntityMapping (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The entity mapping currently being processed.

## Declaration

```swift
var currentEntityMapping: NSEntityMapping { get }
```

<a id="Discussion"></a>

## Discussion

Each entity is processed a total of three times—instance creation, relationship creation, and validation.

<a id="Special-Considerations"></a>

### Special Considerations

You can observe this value using key-value observing.

## See Also

### Monitoring a Migration’s Progress

- [migrationProgress](migrationprogress.md): A number between `0` and `1` that indicates the proportion of completeness of the migration.

# currentEntityMapping (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The entity mapping currently being processed.

## Declaration

```objectivec
@property (strong, readonly) NSEntityMapping * currentEntityMapping;
```

<a id="Discussion"></a>

## Discussion

Each entity is processed a total of three times—instance creation, relationship creation, and validation.

<a id="Special-Considerations"></a>

### Special Considerations

You can observe this value using key-value observing.

## See Also

### Monitoring a Migration’s Progress

- [migrationProgress](migrationprogress.md): A number between `0` and `1` that indicates the proportion of completeness of the migration.
