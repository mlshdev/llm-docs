> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/thread/init(target:selector:object:)](https://developer.apple.com/documentation/foundation/thread/init(target:selector:object:))

# init(target:selector:object:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSThread` object initialized with the given arguments.

## Declaration

```swift
convenience init(target: Any, selector: Selector, object argument: Any?)
```

## Parameters

- `target`: The object to which the message specified by `selector` is sent.
- `selector`: The selector for the message to send to `target`. This selector must take only one argument and must not have a return value.
- `argument`: The single argument passed to the target. May be `nil`.

<a id="return-value"></a>

## Return Value

An `NSThread` object initialized with the given arguments.

<a id="Discussion"></a>

## Discussion

The objects `target` and `argument` are retained during the execution of the detached thread. They are released when the thread finally exits.

## See Also

### Related Documentation

- [start()](start%28%29.md): Starts the receiver.

### Initializing an NSThread Object

- [init()](init%28%29.md): Returns an initialized `NSThread` object.

# initWithTarget:selector:object: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSThread` object initialized with the given arguments.

## Declaration

```objectivec
- (instancetype) initWithTarget:(id) target selector:(SEL) selector object:(id) argument;
```

## Parameters

- `target`: The object to which the message specified by `selector` is sent.
- `selector`: The selector for the message to send to `target`. This selector must take only one argument and must not have a return value.
- `argument`: The single argument passed to the target. May be `nil`.

<a id="return-value"></a>

## Return Value

An `NSThread` object initialized with the given arguments.

<a id="Discussion"></a>

## Discussion

The objects `target` and `argument` are retained during the execution of the detached thread. They are released when the thread finally exits.

## See Also

### Related Documentation

- [start](start%28%29.md): Starts the receiver.

### Initializing an NSThread Object

- [init](init%28%29.md): Returns an initialized `NSThread` object.
