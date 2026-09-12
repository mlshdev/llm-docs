> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/save()](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/save())

# save() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Attempts to commit unsaved changes to registered objects to the context’s parent store.

## Declaration

```swift
func save() throws
```

## Mentioned In

- [Accessing data when the store changes](../accessing-data-when-the-store-changes.md)

<a id="Discussion"></a>

## Discussion

If there were multiple errors (for example several edited objects had validation failures) the description of `NSError` returned indicates that there were multiple errors, and its userInfo dictionary contains the key `NSDetailedErrors`. The value associated with the `NSDetailedErrors` key is an array that contains the individual `NSError` objects.

If a context’s parent store is a persistent store coordinator, then changes are committed to the external store. If a context’s parent store is another managed object context, then [save()](save%28%29.md) only updates managed objects in that parent store. To commit changes to the external store, you must save changes in the chain of contexts up to and including the context whose parent is the persistent store coordinator.

> **Important**

>  Always verify that the context has uncommitted changes (using the [hasChanges](haschanges.md) property) before invoking the `save:` method. Otherwise, Core Data may perform unnecessary work.

## See Also

### Managing unsaved and uncommitted changes

- [hasChanges](haschanges.md): A Boolean value that indicates whether the context has uncommitted changes.

# save: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Attempts to commit unsaved changes to registered objects to the context’s parent store.

## Declaration

```objectivec
- (BOOL) save:(NSError **) error;
```

## Parameters

- `error`: A pointer to an `NSError` object. You do not need to create an `NSError` object. The save operation aborts after the first failure if you pass `NULL`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the save succeeds, otherwise [false](https://developer.apple.com/documentation/swift/false).

## Mentioned In

- [Accessing data when the store changes](../accessing-data-when-the-store-changes.md)

<a id="Discussion"></a>

## Discussion

If there were multiple errors (for example several edited objects had validation failures) the description of `NSError` returned indicates that there were multiple errors, and its userInfo dictionary contains the key `NSDetailedErrors`. The value associated with the `NSDetailedErrors` key is an array that contains the individual `NSError` objects.

If a context’s parent store is a persistent store coordinator, then changes are committed to the external store. If a context’s parent store is another managed object context, then [save:](save%28%29.md) only updates managed objects in that parent store. To commit changes to the external store, you must save changes in the chain of contexts up to and including the context whose parent is the persistent store coordinator.

> **Important**

>  Always verify that the context has uncommitted changes (using the [hasChanges](haschanges.md) property) before invoking the `save:` method. Otherwise, Core Data may perform unnecessary work.

## See Also

### Managing unsaved and uncommitted changes

- [hasChanges](haschanges.md): A Boolean value that indicates whether the context has uncommitted changes.
