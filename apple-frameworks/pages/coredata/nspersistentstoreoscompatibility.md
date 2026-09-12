> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstoreoscompatibility](https://developer.apple.com/documentation/coredata/nspersistentstoreoscompatibility)

# NSPersistentStoreOSCompatibility (Swift)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Key to represent the earliest version of the operation system that the persistent store supports.

## Declaration

```swift
let NSPersistentStoreOSCompatibility: String
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an `NSNumber` object that takes the form of the constants defined by the availability macros defined in `/usr/include/AvailabilityMacros.h`; for example `1040` represents OS X version 10.4.0.

Backward compatibility may preclude some features.

## See Also

### Constants

- [NSStoreModelVersionHashesKey](nsstoremodelversionhasheskey.md): Key to represent the version hash information for the model used to create the store.
- [NSStoreModelVersionIdentifiersKey](nsstoremodelversionidentifierskey.md): Key to represent the version identifiers for the model used to create the store.

# NSPersistentStoreOSCompatibility (Objective-C)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Key to represent the earliest version of the operation system that the persistent store supports.

## Declaration

```objectivec
extern NSString * const NSPersistentStoreOSCompatibility;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an `NSNumber` object that takes the form of the constants defined by the availability macros defined in `/usr/include/AvailabilityMacros.h`; for example `1040` represents OS X version 10.4.0.

Backward compatibility may preclude some features.

## See Also

### Constants

- [NSStoreModelVersionHashesKey](nsstoremodelversionhasheskey.md): Key to represent the version hash information for the model used to create the store.
- [NSStoreModelVersionIdentifiersKey](nsstoremodelversionidentifierskey.md): Key to represent the version identifiers for the model used to create the store.
