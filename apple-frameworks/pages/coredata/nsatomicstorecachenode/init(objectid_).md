> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsatomicstorecachenode/init(objectid:)](https://developer.apple.com/documentation/coredata/nsatomicstorecachenode/init(objectid:))

# init(objectID:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a cache node for the given managed object ID.

## Declaration

```swift
init(objectID moid: NSManagedObjectID)
```

## Parameters

- `moid`: A managed object ID.

<a id="return-value"></a>

## Return Value

A cache node for the given managed object ID, or `nil` if the node could not be initialized.

## See Also

### Related Documentation

- [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075)

# initWithObjectID: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a cache node for the given managed object ID.

## Declaration

```objectivec
- (instancetype) initWithObjectID:(NSManagedObjectID *) moid;
```

## Parameters

- `moid`: A managed object ID.

<a id="return-value"></a>

## Return Value

A cache node for the given managed object ID, or `nil` if the node could not be initialized.

## See Also

### Related Documentation

- [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075)
