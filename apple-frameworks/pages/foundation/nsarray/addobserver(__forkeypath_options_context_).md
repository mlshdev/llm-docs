> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/addobserver(_:forkeypath:options:context:)](https://developer.apple.com/documentation/foundation/nsarray/addobserver(_:forkeypath:options:context:))

# addObserver(\_:forKeyPath:options:context:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Raises an exception.

## Declaration

```swift
func addObserver(_ observer: NSObject, forKeyPath keyPath: String, options: NSKeyValueObservingOptions = [], context: UnsafeMutableRawPointer?)
```

## Parameters

- `observer`: The object to register for KVO notifications. The observer must implement the key-value observing method [observeValue(forKeyPath:of:change:context:)](../../objectivec/nsobject-swift.class/observevalue%28forkeypath_of_change_context_%29.md).
- `keyPath`: The key path, relative to the array, of the property to observe. This value must not be `nil`.
- `options`: A combination of [NSKeyValueObservingOptions](../nskeyvalueobservingoptions.md) values that specifies what is included in observation notifications.
- `context`: Arbitrary data that is passed to `observer` in [observeValue(forKeyPath:of:change:context:)](../../objectivec/nsobject-swift.class/observevalue%28forkeypath_of_change_context_%29.md).

<a id="Discussion"></a>

## Discussion

`NSArray` objects are not observable, so this method raises an exception when invoked on an `NSArray` object. Instead of observing an array, observe the to-many relationship for which the array is the collection of related objects.

## See Also

### Key-Value Observing

- [removeObserver(\_:forKeyPath:)](removeobserver%28__forkeypath_%29.md): Raises an exception.
- [removeObserver(\_:forKeyPath:context:)](removeobserver%28__forkeypath_context_%29.md): Raises an exception.
- [removeObserver(\_:fromObjectsAt:forKeyPath:context:)](removeobserver%28__fromobjectsat_forkeypath_context_%29.md): Raises an exception.
- [addObserver(\_:toObjectsAt:forKeyPath:options:context:)](addobserver%28__toobjectsat_forkeypath_options_context_%29.md): Registers an observer to receive key value observer notifications for the specified key-path relative to the objects at the indexes.
- [removeObserver(\_:fromObjectsAt:forKeyPath:)](removeobserver%28__fromobjectsat_forkeypath_%29.md): Removes `anObserver` from all key value observer notifications associated with the specified `keyPath` relative to the array’s objects at `indexes`.

# addObserver:forKeyPath:options:context: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Raises an exception.

## Declaration

```objectivec
- (void) addObserver:(NSObject *) observer forKeyPath:(NSString *) keyPath options:(NSKeyValueObservingOptions) options context:(void *) context;
```

## Parameters

- `observer`: The object to register for KVO notifications. The observer must implement the key-value observing method [observeValueForKeyPath:ofObject:change:context:](../../objectivec/nsobject-swift.class/observevalue%28forkeypath_of_change_context_%29.md).
- `keyPath`: The key path, relative to the array, of the property to observe. This value must not be `nil`.
- `options`: A combination of [NSKeyValueObservingOptions](../nskeyvalueobservingoptions.md) values that specifies what is included in observation notifications.
- `context`: Arbitrary data that is passed to `observer` in [observeValueForKeyPath:ofObject:change:context:](../../objectivec/nsobject-swift.class/observevalue%28forkeypath_of_change_context_%29.md).

<a id="Discussion"></a>

## Discussion

`NSArray` objects are not observable, so this method raises an exception when invoked on an `NSArray` object. Instead of observing an array, observe the to-many relationship for which the array is the collection of related objects.

## See Also

### Key-Value Observing

- [removeObserver:forKeyPath:](removeobserver%28__forkeypath_%29.md): Raises an exception.
- [removeObserver:forKeyPath:context:](removeobserver%28__forkeypath_context_%29.md): Raises an exception.
- [removeObserver:fromObjectsAtIndexes:forKeyPath:context:](removeobserver%28__fromobjectsat_forkeypath_context_%29.md): Raises an exception.
- [addObserver:toObjectsAtIndexes:forKeyPath:options:context:](addobserver%28__toobjectsat_forkeypath_options_context_%29.md): Registers an observer to receive key value observer notifications for the specified key-path relative to the objects at the indexes.
- [removeObserver:fromObjectsAtIndexes:forKeyPath:](removeobserver%28__fromobjectsat_forkeypath_%29.md): Removes `anObserver` from all key value observer notifications associated with the specified `keyPath` relative to the array’s objects at `indexes`.
