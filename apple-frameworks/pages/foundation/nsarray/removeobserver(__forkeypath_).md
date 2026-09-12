> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/removeobserver(_:forkeypath:)](https://developer.apple.com/documentation/foundation/nsarray/removeobserver(_:forkeypath:))

# removeObserver(\_:forKeyPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Raises an exception.

## Declaration

```swift
func removeObserver(_ observer: NSObject, forKeyPath keyPath: String)
```

## Parameters

- `observer`: The object to remove as an observer.
- `keyPath`: A key-path, relative to the array, for which `observer` is registered to receive KVO change notifications. This value must not be `nil`.

<a id="Discussion"></a>

## Discussion

`NSArray` objects are not observable, so this method raises an exception when invoked on an `NSArray` object. Instead of observing an array, observe the to-many relationship for which the array is the collection of related objects.

## See Also

### Key-Value Observing

- [addObserver(\_:forKeyPath:options:context:)](addobserver%28__forkeypath_options_context_%29.md): Raises an exception.
- [removeObserver(\_:forKeyPath:context:)](removeobserver%28__forkeypath_context_%29.md): Raises an exception.
- [removeObserver(\_:fromObjectsAt:forKeyPath:context:)](removeobserver%28__fromobjectsat_forkeypath_context_%29.md): Raises an exception.
- [addObserver(\_:toObjectsAt:forKeyPath:options:context:)](addobserver%28__toobjectsat_forkeypath_options_context_%29.md): Registers an observer to receive key value observer notifications for the specified key-path relative to the objects at the indexes.
- [removeObserver(\_:fromObjectsAt:forKeyPath:)](removeobserver%28__fromobjectsat_forkeypath_%29.md): Removes `anObserver` from all key value observer notifications associated with the specified `keyPath` relative to the array’s objects at `indexes`.

# removeObserver:forKeyPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Raises an exception.

## Declaration

```objectivec
- (void) removeObserver:(NSObject *) observer forKeyPath:(NSString *) keyPath;
```

## Parameters

- `observer`: The object to remove as an observer.
- `keyPath`: A key-path, relative to the array, for which `observer` is registered to receive KVO change notifications. This value must not be `nil`.

<a id="Discussion"></a>

## Discussion

`NSArray` objects are not observable, so this method raises an exception when invoked on an `NSArray` object. Instead of observing an array, observe the to-many relationship for which the array is the collection of related objects.

## See Also

### Key-Value Observing

- [addObserver:forKeyPath:options:context:](addobserver%28__forkeypath_options_context_%29.md): Raises an exception.
- [removeObserver:forKeyPath:context:](removeobserver%28__forkeypath_context_%29.md): Raises an exception.
- [removeObserver:fromObjectsAtIndexes:forKeyPath:context:](removeobserver%28__fromobjectsat_forkeypath_context_%29.md): Raises an exception.
- [addObserver:toObjectsAtIndexes:forKeyPath:options:context:](addobserver%28__toobjectsat_forkeypath_options_context_%29.md): Registers an observer to receive key value observer notifications for the specified key-path relative to the objects at the indexes.
- [removeObserver:fromObjectsAtIndexes:forKeyPath:](removeobserver%28__fromobjectsat_forkeypath_%29.md): Removes `anObserver` from all key value observer notifications associated with the specified `keyPath` relative to the array’s objects at `indexes`.
