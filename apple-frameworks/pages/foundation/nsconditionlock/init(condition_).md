> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconditionlock/init(condition:)](https://developer.apple.com/documentation/foundation/nsconditionlock/init(condition:))

# init(condition:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated `NSConditionLock` object and sets its condition.

## Declaration

```swift
init(condition: Int)
```

## Parameters

- `condition`: The user-defined condition for the lock. The value of `condition` is user-defined; see the class description for more information.

<a id="return-value"></a>

## Return Value

An initialized condition lock object; may be different than the original receiver.

## See Also

### Related Documentation

- [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i)

# initWithCondition: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated `NSConditionLock` object and sets its condition.

## Declaration

```objectivec
- (instancetype) initWithCondition:(NSInteger) condition;
```

## Parameters

- `condition`: The user-defined condition for the lock. The value of `condition` is user-defined; see the class description for more information.

<a id="return-value"></a>

## Return Value

An initialized condition lock object; may be different than the original receiver.

## See Also

### Related Documentation

- [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i)
