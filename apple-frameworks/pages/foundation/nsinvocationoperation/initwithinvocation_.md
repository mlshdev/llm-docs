> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsinvocationoperation/initwithinvocation:](https://developer.apple.com/documentation/foundation/nsinvocationoperation/initwithinvocation:)

# initWithInvocation:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSInvocationOperation` object initialized with the specified invocation object.

## Declaration

```objectivec
- (instancetype) initWithInvocation:(NSInvocation *) inv;
```

## Parameters

- `inv`: The invocation object identifying the target object, selector, and parameter objects.

<a id="return-value"></a>

## Return Value

An initialized `NSInvocationOperation` object or `nil` if the object could not be initialized.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer. The receiver tells the invocation object to retain its arguments.

## See Also

### Initialization

- [initWithTarget:selector:object:](initwithtarget_selector_object_.md): Returns an `NSInvocationOperation` object initialized with the specified target and selector.
