> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsinfermappingmodelautomaticallyoption](https://developer.apple.com/documentation/coredata/nsinfermappingmodelautomaticallyoption)

# NSInferMappingModelAutomaticallyOption (Swift)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Key to attempt to create the mapping model automatically.

## Declaration

```swift
let NSInferMappingModelAutomaticallyOption: String
```

## Mentioned In

- [Migrating your data model automatically](migrating-your-data-model-automatically.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is an `NSNumber` object. If the [boolValue](../foundation/nsnumber/boolvalue.md) of the number is [true](https://developer.apple.com/documentation/swift/true) and the value of the `NSMigratePersistentStoresAutomaticallyOption` is [true](https://developer.apple.com/documentation/swift/true), the coordinator will attempt to infer a mapping model if none can be found.

## See Also

### Constants

- [NSIgnorePersistentStoreVersioningOption](nsignorepersistentstoreversioningoption.md): Key to ignore the built-in versioning provided by Core Data.
- [NSMigratePersistentStoresAutomaticallyOption](nsmigratepersistentstoresautomaticallyoption.md): Key to automatically attempt to migrate versioned stores.

# NSInferMappingModelAutomaticallyOption (Objective-C)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Key to attempt to create the mapping model automatically.

## Declaration

```objectivec
extern NSString * const NSInferMappingModelAutomaticallyOption;
```

## Mentioned In

- [Migrating your data model automatically](migrating-your-data-model-automatically.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is an `NSNumber` object. If the [boolValue](../foundation/nsnumber/boolvalue.md) of the number is [true](https://developer.apple.com/documentation/swift/true) and the value of the `NSMigratePersistentStoresAutomaticallyOption` is [true](https://developer.apple.com/documentation/swift/true), the coordinator will attempt to infer a mapping model if none can be found.

## See Also

### Constants

- [NSIgnorePersistentStoreVersioningOption](nsignorepersistentstoreversioningoption.md): Key to ignore the built-in versioning provided by Core Data.
- [NSMigratePersistentStoresAutomaticallyOption](nsmigratepersistentstoresautomaticallyoption.md): Key to automatically attempt to migrate versioned stores.
