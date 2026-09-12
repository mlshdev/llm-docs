> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/removeobserver(_:forkeypath:context:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/removeobserver(_:forkeypath:context:))

# removeObserver(\_:forKeyPath:context:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Stops the observer object from receiving change notifications for the property specified by the key path relative to the object receiving this message, given the context.

## Declaration

```swift
func removeObserver(_ observer: NSObject, forKeyPath keyPath: String, context: UnsafeMutableRawPointer?)
```

## Parameters

- `observer`: The object to remove as an observer.
- `keyPath`: A key-path, relative to the observed object, for which `observer` is registered to receive KVO change notifications.
- `context`: Arbitrary data that more specifically identifies the observer to be removed.

<a id="Discussion"></a>

## Discussion

Examining the value in `context` you are able to determine precisely which [addObserver(\_:forKeyPath:options:context:)](addobserver%28__forkeypath_options_context_%29.md) invocation was used to create the observation relationship. When the same observer is registered for the same key-path multiple times, but with different context pointers, an application can determine specifically which object to stop observing. It is an error to call [removeObserver(\_:forKeyPath:context:)](removeobserver%28__forkeypath_context_%29.md) if the object has not been registered as an observer.

Be sure to invoke this method (or [removeObserver(\_:forKeyPath:)](removeobserver%28__forkeypath_%29.md)) before any object specified in [addObserver(\_:forKeyPath:options:context:)](addobserver%28__forkeypath_options_context_%29.md) is deallocated.

## See Also

### Registering for Observation

- [addObserver(\_:forKeyPath:options:context:)](addobserver%28__forkeypath_options_context_%29.md): Registers the observer object to receive KVO notifications for the key path relative to the object receiving this message.
- [removeObserver(\_:forKeyPath:)](removeobserver%28__forkeypath_%29.md): Stops the observer object from receiving change notifications for the property specified by the key path relative to the object receiving this message.

# removeObserver:forKeyPath:context: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Stops the observer object from receiving change notifications for the property specified by the key path relative to the object receiving this message, given the context.

## Declaration

```objectivec
- (void) removeObserver:(NSObject *) observer forKeyPath:(NSString *) keyPath context:(void *) context;
```

## Parameters

- `observer`: The object to remove as an observer.
- `keyPath`: A key-path, relative to the observed object, for which `observer` is registered to receive KVO change notifications.
- `context`: Arbitrary data that more specifically identifies the observer to be removed.

<a id="Discussion"></a>

## Discussion

Examining the value in `context` you are able to determine precisely which [addObserver:forKeyPath:options:context:](addobserver%28__forkeypath_options_context_%29.md) invocation was used to create the observation relationship. When the same observer is registered for the same key-path multiple times, but with different context pointers, an application can determine specifically which object to stop observing. It is an error to call [removeObserver:forKeyPath:context:](removeobserver%28__forkeypath_context_%29.md) if the object has not been registered as an observer.

Be sure to invoke this method (or [removeObserver:forKeyPath:](removeobserver%28__forkeypath_%29.md)) before any object specified in [addObserver:forKeyPath:options:context:](addobserver%28__forkeypath_options_context_%29.md) is deallocated.

## See Also

### Registering for Observation

- [addObserver:forKeyPath:options:context:](addobserver%28__forkeypath_options_context_%29.md): Registers the observer object to receive KVO notifications for the key path relative to the object receiving this message.
- [removeObserver:forKeyPath:](removeobserver%28__forkeypath_%29.md): Stops the observer object from receiving change notifications for the property specified by the key path relative to the object receiving this message.
