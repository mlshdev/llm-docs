> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/removeobserver(_:fromobjectsat:forkeypath:)](https://developer.apple.com/documentation/foundation/nsarray/removeobserver(_:fromobjectsat:forkeypath:))

# removeObserver(\_:fromObjectsAt:forKeyPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes `anObserver` from all key value observer notifications associated with the specified `keyPath` relative to the array’s objects at `indexes`.

## Declaration

```swift
func removeObserver(_ observer: NSObject, fromObjectsAt indexes: IndexSet, forKeyPath keyPath: String)
```

## Parameters

- `observer`: The observer.
- `indexes`: The index set.
- `keyPath`: The key path, relative to the array, to be observed.

<a id="Discussion"></a>

## Discussion

This is not merely a convenience method; invoking this method is potentially much faster than repeatedly invoking [removeObserver(\_:forKeyPath:)](../../objectivec/nsobject-swift.class/removeobserver%28__forkeypath_%29.md).

## See Also

### Key-Value Observing

- [addObserver(\_:forKeyPath:options:context:)](addobserver%28__forkeypath_options_context_%29.md): Raises an exception.
- [removeObserver(\_:forKeyPath:)](removeobserver%28__forkeypath_%29.md): Raises an exception.
- [removeObserver(\_:forKeyPath:context:)](removeobserver%28__forkeypath_context_%29.md): Raises an exception.
- [removeObserver(\_:fromObjectsAt:forKeyPath:context:)](removeobserver%28__fromobjectsat_forkeypath_context_%29.md): Raises an exception.
- [addObserver(\_:toObjectsAt:forKeyPath:options:context:)](addobserver%28__toobjectsat_forkeypath_options_context_%29.md): Registers an observer to receive key value observer notifications for the specified key-path relative to the objects at the indexes.

# removeObserver:fromObjectsAtIndexes:forKeyPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes `anObserver` from all key value observer notifications associated with the specified `keyPath` relative to the array’s objects at `indexes`.

## Declaration

```objectivec
- (void) removeObserver:(NSObject *) observer fromObjectsAtIndexes:(NSIndexSet *) indexes forKeyPath:(NSString *) keyPath;
```

## Parameters

- `observer`: The observer.
- `indexes`: The index set.
- `keyPath`: The key path, relative to the array, to be observed.

<a id="Discussion"></a>

## Discussion

This is not merely a convenience method; invoking this method is potentially much faster than repeatedly invoking [removeObserver:forKeyPath:](../../objectivec/nsobject-swift.class/removeobserver%28__forkeypath_%29.md).

## See Also

### Key-Value Observing

- [addObserver:forKeyPath:options:context:](addobserver%28__forkeypath_options_context_%29.md): Raises an exception.
- [removeObserver:forKeyPath:](removeobserver%28__forkeypath_%29.md): Raises an exception.
- [removeObserver:forKeyPath:context:](removeobserver%28__forkeypath_context_%29.md): Raises an exception.
- [removeObserver:fromObjectsAtIndexes:forKeyPath:context:](removeobserver%28__fromobjectsat_forkeypath_context_%29.md): Raises an exception.
- [addObserver:toObjectsAtIndexes:forKeyPath:options:context:](addobserver%28__toobjectsat_forkeypath_options_context_%29.md): Registers an observer to receive key value observer notifications for the specified key-path relative to the objects at the indexes.
