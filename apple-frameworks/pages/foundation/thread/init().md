> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/thread/init()](https://developer.apple.com/documentation/foundation/thread/init())

# init() (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an initialized `NSThread` object.

## Declaration

```swift
init()
```

<a id="return-value"></a>

## Return Value

An initialized `NSThread` object.

<a id="Discussion"></a>

## Discussion

This is the designated initializer for `NSThread`.

## See Also

### Related Documentation

- [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i)
- [start()](start%28%29.md): Starts the receiver.

### Initializing an NSThread Object

- [init(target:selector:object:)](init%28target_selector_object_%29.md): Returns an `NSThread` object initialized with the given arguments.

# init (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an initialized `NSThread` object.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

An initialized `NSThread` object.

<a id="Discussion"></a>

## Discussion

This is the designated initializer for `NSThread`.

## See Also

### Related Documentation

- [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i)
- [start](start%28%29.md): Starts the receiver.

### Initializing an NSThread Object

- [initWithTarget:selector:object:](init%28target_selector_object_%29.md): Returns an `NSThread` object initialized with the given arguments.
