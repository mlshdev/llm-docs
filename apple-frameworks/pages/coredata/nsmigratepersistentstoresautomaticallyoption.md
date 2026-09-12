> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmigratepersistentstoresautomaticallyoption](https://developer.apple.com/documentation/coredata/nsmigratepersistentstoresautomaticallyoption)

# NSMigratePersistentStoresAutomaticallyOption (Swift)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Key to automatically attempt to migrate versioned stores.

## Declaration

```swift
let NSMigratePersistentStoresAutomaticallyOption: String
```

## Mentioned In

- [Migrating your data model automatically](migrating-your-data-model-automatically.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is an `NSNumber` object. If the [boolValue](../foundation/nsnumber/boolvalue.md) of the number is [true](https://developer.apple.com/documentation/swift/true) and if the version hash information for the added store is determined to be incompatible with the model for the coordinator, Core Data will attempt to locate the source and mapping models in the application bundles, and perform a migration.

## See Also

### Constants

- [NSIgnorePersistentStoreVersioningOption](nsignorepersistentstoreversioningoption.md): Key to ignore the built-in versioning provided by Core Data.
- [NSInferMappingModelAutomaticallyOption](nsinfermappingmodelautomaticallyoption.md): Key to attempt to create the mapping model automatically.

# NSMigratePersistentStoresAutomaticallyOption (Objective-C)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Key to automatically attempt to migrate versioned stores.

## Declaration

```objectivec
extern NSString * const NSMigratePersistentStoresAutomaticallyOption;
```

## Mentioned In

- [Migrating your data model automatically](migrating-your-data-model-automatically.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is an `NSNumber` object. If the [boolValue](../foundation/nsnumber/boolvalue.md) of the number is [true](https://developer.apple.com/documentation/swift/true) and if the version hash information for the added store is determined to be incompatible with the model for the coordinator, Core Data will attempt to locate the source and mapping models in the application bundles, and perform a migration.

## See Also

### Constants

- [NSIgnorePersistentStoreVersioningOption](nsignorepersistentstoreversioningoption.md): Key to ignore the built-in versioning provided by Core Data.
- [NSInferMappingModelAutomaticallyOption](nsinfermappingmodelautomaticallyoption.md): Key to attempt to create the mapping model automatically.
