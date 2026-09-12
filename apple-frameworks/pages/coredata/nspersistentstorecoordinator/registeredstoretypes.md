> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/registeredstoretypes](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/registeredstoretypes)

# registeredStoreTypes (Swift)

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The coordinator’s registered store types.

## Declaration

```swift
class var registeredStoreTypes: [String : NSValue] { get }
```

<a id="return-value"></a>

## Return Value

A dictionary of the registered store types—the keys are the store type strings, and the values are the [NSPersistentStore](../nspersistentstore.md) subclasses.

## See Also

### Registering store types

- [registerStoreClass(\_:type:)](registerstoreclass%28__type_%29.md): Registers a persistent store subclass using the specified store type.
- [registerStoreClass(\_:forStoreType:)](registerstoreclass%28__forstoretype_%29.md): Deprecated. Registers a persistent store subclass using the specified store type identifier.

# registeredStoreTypes (Objective-C)

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The coordinator’s registered store types.

## Declaration

```objectivec
@property (class, strong, readonly) NSDictionary<NSString *,NSValue *> * registeredStoreTypes;
```

<a id="return-value"></a>

## Return Value

A dictionary of the registered store types—the keys are the store type strings, and the values are the [NSPersistentStore](../nspersistentstore.md) subclasses.

## See Also

### Registering store types

- [registerStoreClass:forStoreType:](registerstoreclass%28__forstoretype_%29.md): Deprecated. Registers a persistent store subclass using the specified store type identifier.
