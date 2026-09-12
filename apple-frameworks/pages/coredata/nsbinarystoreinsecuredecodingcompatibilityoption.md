> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbinarystoreinsecuredecodingcompatibilityoption](https://developer.apple.com/documentation/coredata/nsbinarystoreinsecuredecodingcompatibilityoption)

# NSBinaryStoreInsecureDecodingCompatibilityOption (Swift)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A flag that indicates Core Data decodes the binary store insecurely.

## Declaration

```swift
let NSBinaryStoreInsecureDecodingCompatibilityOption: String
```

<a id="Discussion"></a>

## Discussion

Use the [NSBinaryStoreSecureDecodingClasses](nsbinarystoresecuredecodingclasses.md) option instead, if possible, to allow Core Data to securely decode the binary store.

If a store has metadata or transformable properties that contain nonstandard classes, this option may be appropriate. Apps linked before the availability date default to using this option.

## See Also

### Persistent Store Metadata Keys

- [NSBinaryStoreSecureDecodingClasses](nsbinarystoresecuredecodingclasses.md): An additional set of classes to use while decoding a binary store.
- [NSPersistentStoreRemoteChangeNotificationPostOptionKey](nspersistentstoreremotechangenotificationpostoptionkey.md): A key that indicates a persistent store posts a remote change notification for every write to the store, including writes by other processes.
- [NSPersistentStoreModelVersionChecksumKey](nspersistentstoremodelversionchecksumkey.md)

# NSBinaryStoreInsecureDecodingCompatibilityOption (Objective-C)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A flag that indicates Core Data decodes the binary store insecurely.

## Declaration

```objectivec
extern NSString * const NSBinaryStoreInsecureDecodingCompatibilityOption;
```

<a id="Discussion"></a>

## Discussion

Use the [NSBinaryStoreSecureDecodingClasses](nsbinarystoresecuredecodingclasses.md) option instead, if possible, to allow Core Data to securely decode the binary store.

If a store has metadata or transformable properties that contain nonstandard classes, this option may be appropriate. Apps linked before the availability date default to using this option.

## See Also

### Persistent Store Metadata Keys

- [NSBinaryStoreSecureDecodingClasses](nsbinarystoresecuredecodingclasses.md): An additional set of classes to use while decoding a binary store.
- [NSPersistentStoreRemoteChangeNotificationPostOptionKey](nspersistentstoreremotechangenotificationpostoptionkey.md): A key that indicates a persistent store posts a remote change notification for every write to the store, including writes by other processes.
- [NSPersistentStoreModelVersionChecksumKey](nspersistentstoremodelversionchecksumkey.md)
