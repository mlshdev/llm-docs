> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/removeobserver(_:fromobjectsat:forkeypath:context:)](https://developer.apple.com/documentation/foundation/nsarray/removeobserver(_:fromobjectsat:forkeypath:context:))

# removeObserver(\_:fromObjectsAt:forKeyPath:context:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Raises an exception.

## Declaration

```swift
func removeObserver(_ observer: NSObject, fromObjectsAt indexes: IndexSet, forKeyPath keyPath: String, context: UnsafeMutableRawPointer?)
```

## Parameters

- `observer`: The object to remove as an observer.
- `indexes`: The index set.
- `keyPath`: A key-path, relative to the array, for which `observer` is registered to receive KVO change notifications. This value must not be `nil`.
- `context`: The context passed to the notifications.

<a id="Discussion"></a>

## Discussion

`NSArray` objects are not observable, so this method raises an exception when invoked on an `NSArray` object. Instead of observing an array, observe the to-many relationship for which the array is the collection of related objects.

## See Also

### Key-Value Observing

- [addObserver(\_:forKeyPath:options:context:)](addobserver%28__forkeypath_options_context_%29.md): Raises an exception.
- [removeObserver(\_:forKeyPath:)](removeobserver%28__forkeypath_%29.md): Raises an exception.
- [removeObserver(\_:forKeyPath:context:)](removeobserver%28__forkeypath_context_%29.md): Raises an exception.
- [addObserver(\_:toObjectsAt:forKeyPath:options:context:)](addobserver%28__toobjectsat_forkeypath_options_context_%29.md): Registers an observer to receive key value observer notifications for the specified key-path relative to the objects at the indexes.
- [removeObserver(\_:fromObjectsAt:forKeyPath:)](removeobserver%28__fromobjectsat_forkeypath_%29.md): Removes `anObserver` from all key value observer notifications associated with the specified `keyPath` relative to the array’s objects at `indexes`.

# removeObserver:fromObjectsAtIndexes:forKeyPath:context: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Raises an exception.

## Declaration

```objectivec
- (void) removeObserver:(NSObject *) observer fromObjectsAtIndexes:(NSIndexSet *) indexes forKeyPath:(NSString *) keyPath context:(void *) context;
```

## Parameters

- `observer`: The object to remove as an observer.
- `indexes`: The index set.
- `keyPath`: A key-path, relative to the array, for which `observer` is registered to receive KVO change notifications. This value must not be `nil`.
- `context`: The context passed to the notifications.

<a id="Discussion"></a>

## Discussion

`NSArray` objects are not observable, so this method raises an exception when invoked on an `NSArray` object. Instead of observing an array, observe the to-many relationship for which the array is the collection of related objects.

## See Also

### Key-Value Observing

- [addObserver:forKeyPath:options:context:](addobserver%28__forkeypath_options_context_%29.md): Raises an exception.
- [removeObserver:forKeyPath:](removeobserver%28__forkeypath_%29.md): Raises an exception.
- [removeObserver:forKeyPath:context:](removeobserver%28__forkeypath_context_%29.md): Raises an exception.
- [addObserver:toObjectsAtIndexes:forKeyPath:options:context:](addobserver%28__toobjectsat_forkeypath_options_context_%29.md): Registers an observer to receive key value observer notifications for the specified key-path relative to the objects at the indexes.
- [removeObserver:fromObjectsAtIndexes:forKeyPath:](removeobserver%28__fromobjectsat_forkeypath_%29.md): Removes `anObserver` from all key value observer notifications associated with the specified `keyPath` relative to the array’s objects at `indexes`.
