> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsignorepersistentstoreversioningoption](https://developer.apple.com/documentation/coredata/nsignorepersistentstoreversioningoption)

# NSIgnorePersistentStoreVersioningOption (Swift)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Key to ignore the built-in versioning provided by Core Data.

## Declaration

```swift
let NSIgnorePersistentStoreVersioningOption: String
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an `NSNumber` object. If the [boolValue](../foundation/nsnumber/boolvalue.md) of the number is [true](https://developer.apple.com/documentation/swift/true), Core Data will not compare the version hashes between the managed object model in the coordinator and the metadata for the loaded store. (It will, however, continue to update the version hash information in the metadata.) This key and corresponding value of [true](https://developer.apple.com/documentation/swift/true) is specified by default for all applications linked on or before OS X v10.4.

## See Also

### Constants

- [NSMigratePersistentStoresAutomaticallyOption](nsmigratepersistentstoresautomaticallyoption.md): Key to automatically attempt to migrate versioned stores.
- [NSInferMappingModelAutomaticallyOption](nsinfermappingmodelautomaticallyoption.md): Key to attempt to create the mapping model automatically.

# NSIgnorePersistentStoreVersioningOption (Objective-C)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Key to ignore the built-in versioning provided by Core Data.

## Declaration

```objectivec
extern NSString * const NSIgnorePersistentStoreVersioningOption;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an `NSNumber` object. If the [boolValue](../foundation/nsnumber/boolvalue.md) of the number is [true](https://developer.apple.com/documentation/swift/true), Core Data will not compare the version hashes between the managed object model in the coordinator and the metadata for the loaded store. (It will, however, continue to update the version hash information in the metadata.) This key and corresponding value of [true](https://developer.apple.com/documentation/swift/true) is specified by default for all applications linked on or before OS X v10.4.

## See Also

### Constants

- [NSMigratePersistentStoresAutomaticallyOption](nsmigratepersistentstoresautomaticallyoption.md): Key to automatically attempt to migrate versioned stores.
- [NSInferMappingModelAutomaticallyOption](nsinfermappingmodelautomaticallyoption.md): Key to attempt to create the mapping model automatically.
