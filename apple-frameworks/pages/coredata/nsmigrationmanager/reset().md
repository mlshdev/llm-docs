> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmigrationmanager/reset()](https://developer.apple.com/documentation/coredata/nsmigrationmanager/reset())

# reset() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Resets the association tables for the migration.

## Declaration

```swift
func reset()
```

<a id="Discussion"></a>

## Discussion

This method does not reset the source or destination contexts.

## See Also

### Aborting a Migration

- [cancelMigrationWithError(\_:)](cancelmigrationwitherror%28__%29.md): Cancels the migration with a given error.

# reset (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Resets the association tables for the migration.

## Declaration

```objectivec
- (void) reset;
```

<a id="Discussion"></a>

## Discussion

This method does not reset the source or destination contexts.

## See Also

### Aborting a Migration

- [cancelMigrationWithError:](cancelmigrationwitherror%28__%29.md): Cancels the migration with a given error.
