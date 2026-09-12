> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmergepolicy/init(merge:)](https://developer.apple.com/documentation/coredata/nsmergepolicy/init(merge:))

# init(merge:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a merge policy initialized with a given policy type.

## Declaration

```swift
init(merge ty: NSMergePolicyType)
```

## Parameters

- `ty`: A merge policy type.

<a id="return-value"></a>

## Return Value

A merge policy initialized with a given policy type.

<a id="Discussion"></a>

## Discussion

If you override this method in a subclass, you should invoke the superclass’s implementation with the merge policy that is closest to the behavior you want.

- This will make it easier to use the superclass’s implementation of [resolve(mergeConflicts:)](resolve%28mergeconflicts_%29.md) and then customize the results.
- Due to the complexity of merging to-many relationships, this class is designed with the expectation that you call super as the base implementation.

## See Also

### Related Documentation

- [Core Data Model Versioning and Data Migration Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreDataVersioning/Articles/Introduction.html#//apple_ref/doc/uid/TP40004399)

### Getting a Merge Policy

- [mergeType](mergetype.md): The merge type.

# initWithMergeType: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a merge policy initialized with a given policy type.

## Declaration

```objectivec
- (id) initWithMergeType:(NSMergePolicyType) ty;
```

## Parameters

- `ty`: A merge policy type.

<a id="return-value"></a>

## Return Value

A merge policy initialized with a given policy type.

<a id="Discussion"></a>

## Discussion

If you override this method in a subclass, you should invoke the superclass’s implementation with the merge policy that is closest to the behavior you want.

- This will make it easier to use the superclass’s implementation of [resolveConflicts:error:](resolve%28mergeconflicts_%29.md) and then customize the results.
- Due to the complexity of merging to-many relationships, this class is designed with the expectation that you call super as the base implementation.

## See Also

### Related Documentation

- [Core Data Model Versioning and Data Migration Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreDataVersioning/Articles/Introduction.html#//apple_ref/doc/uid/TP40004399)

### Getting a Merge Policy

- [mergeType](mergetype.md): The merge type.
