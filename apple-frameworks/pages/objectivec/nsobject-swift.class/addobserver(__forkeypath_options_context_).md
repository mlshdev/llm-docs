> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/addobserver(_:forkeypath:options:context:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/addobserver(_:forkeypath:options:context:))

# addObserver(\_:forKeyPath:options:context:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Registers the observer object to receive KVO notifications for the key path relative to the object receiving this message.

## Declaration

```swift
func addObserver(_ observer: NSObject, forKeyPath keyPath: String, options: NSKeyValueObservingOptions = [], context: UnsafeMutableRawPointer?)
```

## Parameters

- `observer`: The object to register for KVO notifications. The observer must implement the key-value observing method [observeValue(forKeyPath:of:change:context:)](observevalue%28forkeypath_of_change_context_%29.md).
- `keyPath`: The key path, relative to the object receiving this message, of the property to observe. This value must not be `nil`.
- `options`: A combination of the `NSKeyValueObservingOptions` values that specifies what is included in observation notifications. For possible values, see [NSKeyValueObservingOptions](../../foundation/nskeyvalueobservingoptions.md).
- `context`: Arbitrary data that is passed to `observer` in [observeValue(forKeyPath:of:change:context:)](observevalue%28forkeypath_of_change_context_%29.md).

<a id="Discussion"></a>

## Discussion

Neither the object receiving this message, nor `observer`, are retained. An object that calls this method must also eventually call either the [removeObserver(\_:forKeyPath:)](removeobserver%28__forkeypath_%29.md) or [removeObserver(\_:forKeyPath:context:)](removeobserver%28__forkeypath_context_%29.md) method to unregister the observer when participating in KVO.

## See Also

### Registering for Observation

- [removeObserver(\_:forKeyPath:)](removeobserver%28__forkeypath_%29.md): Stops the observer object from receiving change notifications for the property specified by the key path relative to the object receiving this message.
- [removeObserver(\_:forKeyPath:context:)](removeobserver%28__forkeypath_context_%29.md): Stops the observer object from receiving change notifications for the property specified by the key path relative to the object receiving this message, given the context.

# addObserver:forKeyPath:options:context: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Registers the observer object to receive KVO notifications for the key path relative to the object receiving this message.

## Declaration

```objectivec
- (void) addObserver:(NSObject *) observer forKeyPath:(NSString *) keyPath options:(NSKeyValueObservingOptions) options context:(void *) context;
```

## Parameters

- `observer`: The object to register for KVO notifications. The observer must implement the key-value observing method [observeValueForKeyPath:ofObject:change:context:](observevalue%28forkeypath_of_change_context_%29.md).
- `keyPath`: The key path, relative to the object receiving this message, of the property to observe. This value must not be `nil`.
- `options`: A combination of the `NSKeyValueObservingOptions` values that specifies what is included in observation notifications. For possible values, see [NSKeyValueObservingOptions](../../foundation/nskeyvalueobservingoptions.md).
- `context`: Arbitrary data that is passed to `observer` in [observeValueForKeyPath:ofObject:change:context:](observevalue%28forkeypath_of_change_context_%29.md).

<a id="Discussion"></a>

## Discussion

Neither the object receiving this message, nor `observer`, are retained. An object that calls this method must also eventually call either the [removeObserver:forKeyPath:](removeobserver%28__forkeypath_%29.md) or [removeObserver:forKeyPath:context:](removeobserver%28__forkeypath_context_%29.md) method to unregister the observer when participating in KVO.

## See Also

### Registering for Observation

- [removeObserver:forKeyPath:](removeobserver%28__forkeypath_%29.md): Stops the observer object from receiving change notifications for the property specified by the key path relative to the object receiving this message.
- [removeObserver:forKeyPath:context:](removeobserver%28__forkeypath_context_%29.md): Stops the observer object from receiving change notifications for the property specified by the key path relative to the object receiving this message, given the context.
