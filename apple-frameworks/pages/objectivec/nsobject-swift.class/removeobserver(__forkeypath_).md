> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/removeobserver(_:forkeypath:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/removeobserver(_:forkeypath:))

# removeObserver(\_:forKeyPath:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Stops the observer object from receiving change notifications for the property specified by the key path relative to the object receiving this message.

## Declaration

```swift
func removeObserver(_ observer: NSObject, forKeyPath keyPath: String)
```

## Parameters

- `observer`: The object to remove as an observer.
- `keyPath`: A key-path, relative to the object receiving this message, for which `observer` is registered to receive KVO change notifications.

<a id="Discussion"></a>

## Discussion

It is an error to call [removeObserver(\_:forKeyPath:)](removeobserver%28__forkeypath_%29.md) for an `object` that has not previously been registered as an observer.

Be sure to invoke this method (or [removeObserver(\_:forKeyPath:context:)](removeobserver%28__forkeypath_context_%29.md)) before any object specified in [addObserver(\_:forKeyPath:options:context:)](addobserver%28__forkeypath_options_context_%29.md) is deallocated.

## See Also

### Registering for Observation

- [addObserver(\_:forKeyPath:options:context:)](addobserver%28__forkeypath_options_context_%29.md): Registers the observer object to receive KVO notifications for the key path relative to the object receiving this message.
- [removeObserver(\_:forKeyPath:context:)](removeobserver%28__forkeypath_context_%29.md): Stops the observer object from receiving change notifications for the property specified by the key path relative to the object receiving this message, given the context.

# removeObserver:forKeyPath: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Stops the observer object from receiving change notifications for the property specified by the key path relative to the object receiving this message.

## Declaration

```objectivec
- (void) removeObserver:(NSObject *) observer forKeyPath:(NSString *) keyPath;
```

## Parameters

- `observer`: The object to remove as an observer.
- `keyPath`: A key-path, relative to the object receiving this message, for which `observer` is registered to receive KVO change notifications.

<a id="Discussion"></a>

## Discussion

It is an error to call [removeObserver:forKeyPath:](removeobserver%28__forkeypath_%29.md) for an `object` that has not previously been registered as an observer.

Be sure to invoke this method (or [removeObserver:forKeyPath:context:](removeobserver%28__forkeypath_context_%29.md)) before any object specified in [addObserver:forKeyPath:options:context:](addobserver%28__forkeypath_options_context_%29.md) is deallocated.

## See Also

### Registering for Observation

- [addObserver:forKeyPath:options:context:](addobserver%28__forkeypath_options_context_%29.md): Registers the observer object to receive KVO notifications for the key path relative to the object receiving this message.
- [removeObserver:forKeyPath:context:](removeobserver%28__forkeypath_context_%29.md): Stops the observer object from receiving change notifications for the property specified by the key path relative to the object receiving this message, given the context.
