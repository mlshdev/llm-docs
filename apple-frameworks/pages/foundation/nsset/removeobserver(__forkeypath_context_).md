> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsset/removeobserver(_:forkeypath:context:)](https://developer.apple.com/documentation/foundation/nsset/removeobserver(_:forkeypath:context:))

# removeObserver(\_:forKeyPath:context:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Raises an exception.

## Declaration

```swift
func removeObserver(_ observer: NSObject, forKeyPath keyPath: String, context: UnsafeMutableRawPointer?)
```

## Parameters

- `observer`: The object to remove as an observer.
- `keyPath`: A key-path, relative to the set, for which `observer` is registered to receive KVO change notifications. This value must not be `nil`.
- `context`: Arbitrary data that is passed to `observer` in [observeValue(forKeyPath:of:change:context:)](../../objectivec/nsobject-swift.class/observevalue%28forkeypath_of_change_context_%29.md).

<a id="Discussion"></a>

## Discussion

`NSSet` objects are not observable, so this method raises an exception when invoked on an `NSSet` object. Instead of observing a set, observe the unordered to-many relationship for which the set is the collection of related objects.

## See Also

### Key-Value Observing

- [addObserver(\_:forKeyPath:options:context:)](addobserver%28__forkeypath_options_context_%29.md): Raises an exception.
- [removeObserver(\_:forKeyPath:)](removeobserver%28__forkeypath_%29.md): Raises an exception.

# removeObserver:forKeyPath:context: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Raises an exception.

## Declaration

```objectivec
- (void) removeObserver:(NSObject *) observer forKeyPath:(NSString *) keyPath context:(void *) context;
```

## Parameters

- `observer`: The object to remove as an observer.
- `keyPath`: A key-path, relative to the set, for which `observer` is registered to receive KVO change notifications. This value must not be `nil`.
- `context`: Arbitrary data that is passed to `observer` in [observeValueForKeyPath:ofObject:change:context:](../../objectivec/nsobject-swift.class/observevalue%28forkeypath_of_change_context_%29.md).

<a id="Discussion"></a>

## Discussion

`NSSet` objects are not observable, so this method raises an exception when invoked on an `NSSet` object. Instead of observing a set, observe the unordered to-many relationship for which the set is the collection of related objects.

## See Also

### Key-Value Observing

- [addObserver:forKeyPath:options:context:](addobserver%28__forkeypath_options_context_%29.md): Raises an exception.
- [removeObserver:forKeyPath:](removeobserver%28__forkeypath_%29.md): Raises an exception.
