> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmergeconflict/init(source:newversion:oldversion:cachedsnapshot:persistedsnapshot:)](https://developer.apple.com/documentation/coredata/nsmergeconflict/init(source:newversion:oldversion:cachedsnapshot:persistedsnapshot:))

# init(source:newVersion:oldVersion:cachedSnapshot:persistedSnapshot:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Initializes a merge conflict.

## Declaration

```swift
init(source srcObject: NSManagedObject, newVersion newvers: Int, oldVersion oldvers: Int, cachedSnapshot cachesnap: [String : Any]?, persistedSnapshot persnap: [String : Any]?)
```

## Parameters

- `srcObject`: The source object for the conflict.
- `newvers`: The new version number for the change.

  A value of 0 means the object was deleted and the corresponding snapshot is `nil`.
- `oldvers`: The old version number for the change.
- `cachesnap`: A dictionary containing the values of `srcObject` held in the persistent store coordinator layer.
- `persnap`: A dictionary containing the values of `srcObject` held in the persistent store.

<a id="return-value"></a>

## Return Value

A merge conflict object initialized with the given parameters.

## See Also

### Related Documentation

- [Core Data Model Versioning and Data Migration Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreDataVersioning/Articles/Introduction.html#//apple_ref/doc/uid/TP40004399)

# initWithSource:newVersion:oldVersion:cachedSnapshot:persistedSnapshot: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Initializes a merge conflict.

## Declaration

```objectivec
- (instancetype) initWithSource:(NSManagedObject *) srcObject newVersion:(NSUInteger) newvers oldVersion:(NSUInteger) oldvers cachedSnapshot:(NSDictionary<NSString *,id> *) cachesnap persistedSnapshot:(NSDictionary<NSString *,id> *) persnap;
```

## Parameters

- `srcObject`: The source object for the conflict.
- `newvers`: The new version number for the change.

  A value of 0 means the object was deleted and the corresponding snapshot is `nil`.
- `oldvers`: The old version number for the change.
- `cachesnap`: A dictionary containing the values of `srcObject` held in the persistent store coordinator layer.
- `persnap`: A dictionary containing the values of `srcObject` held in the persistent store.

<a id="return-value"></a>

## Return Value

A merge conflict object initialized with the given parameters.

## See Also

### Related Documentation

- [Core Data Model Versioning and Data Migration Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreDataVersioning/Articles/Introduction.html#//apple_ref/doc/uid/TP40004399)
