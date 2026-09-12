> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/addobserver(_:toobjectsat:forkeypath:options:context:)](https://developer.apple.com/documentation/foundation/nsarray/addobserver(_:toobjectsat:forkeypath:options:context:))

# addObserver(\_:toObjectsAt:forKeyPath:options:context:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Registers an observer to receive key value observer notifications for the specified key-path relative to the objects at the indexes.

## Declaration

```swift
func addObserver(_ observer: NSObject, toObjectsAt indexes: IndexSet, forKeyPath keyPath: String, options: NSKeyValueObservingOptions = [], context: UnsafeMutableRawPointer?)
```

## Parameters

- `observer`: The observer.
- `indexes`: The index set.
- `keyPath`: The key path, relative to the array, to be observed.
- `options`: The options to be included in the notification.
- `context`: The context passed to the notifications.

<a id="Discussion"></a>

## Discussion

The `options` determine what is included in the notifications, and the `context` is passed in the notifications.

This is not merely a convenience method; invoking this method is potentially much faster than repeatedly invoking [addObserver(\_:forKeyPath:options:context:)](../../objectivec/nsobject-swift.class/addobserver%28__forkeypath_options_context_%29.md).

## See Also

### Key-Value Observing

- [addObserver(\_:forKeyPath:options:context:)](addobserver%28__forkeypath_options_context_%29.md): Raises an exception.
- [removeObserver(\_:forKeyPath:)](removeobserver%28__forkeypath_%29.md): Raises an exception.
- [removeObserver(\_:forKeyPath:context:)](removeobserver%28__forkeypath_context_%29.md): Raises an exception.
- [removeObserver(\_:fromObjectsAt:forKeyPath:context:)](removeobserver%28__fromobjectsat_forkeypath_context_%29.md): Raises an exception.
- [removeObserver(\_:fromObjectsAt:forKeyPath:)](removeobserver%28__fromobjectsat_forkeypath_%29.md): Removes `anObserver` from all key value observer notifications associated with the specified `keyPath` relative to the array’s objects at `indexes`.

# addObserver:toObjectsAtIndexes:forKeyPath:options:context: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Registers an observer to receive key value observer notifications for the specified key-path relative to the objects at the indexes.

## Declaration

```objectivec
- (void) addObserver:(NSObject *) observer toObjectsAtIndexes:(NSIndexSet *) indexes forKeyPath:(NSString *) keyPath options:(NSKeyValueObservingOptions) options context:(void *) context;
```

## Parameters

- `observer`: The observer.
- `indexes`: The index set.
- `keyPath`: The key path, relative to the array, to be observed.
- `options`: The options to be included in the notification.
- `context`: The context passed to the notifications.

<a id="Discussion"></a>

## Discussion

The `options` determine what is included in the notifications, and the `context` is passed in the notifications.

This is not merely a convenience method; invoking this method is potentially much faster than repeatedly invoking [addObserver:forKeyPath:options:context:](../../objectivec/nsobject-swift.class/addobserver%28__forkeypath_options_context_%29.md).

## See Also

### Key-Value Observing

- [addObserver:forKeyPath:options:context:](addobserver%28__forkeypath_options_context_%29.md): Raises an exception.
- [removeObserver:forKeyPath:](removeobserver%28__forkeypath_%29.md): Raises an exception.
- [removeObserver:forKeyPath:context:](removeobserver%28__forkeypath_context_%29.md): Raises an exception.
- [removeObserver:fromObjectsAtIndexes:forKeyPath:context:](removeobserver%28__fromobjectsat_forkeypath_context_%29.md): Raises an exception.
- [removeObserver:fromObjectsAtIndexes:forKeyPath:](removeobserver%28__fromobjectsat_forkeypath_%29.md): Removes `anObserver` from all key value observer notifications associated with the specified `keyPath` relative to the array’s objects at `indexes`.
