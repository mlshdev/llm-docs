> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalueisinstanceofconstructor(_:_:_:_:)](https://developer.apple.com/documentation/javascriptcore/jsvalueisinstanceofconstructor(_:_:_:_:))

# JSValueIsInstanceOfConstructor(\_:\_:\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Tests whether a JavaScript value is an object that the specified constructor creates.

## Declaration

```swift
func JSValueIsInstanceOfConstructor(_ ctx: JSContextRef!, _ value: JSValueRef!, _ constructor: JSObjectRef!, _ exception: UnsafeMutablePointer<JSValueRef?>!) -> Bool
```

## Parameters

- `ctx`: The execution context to use.
- `value`: The [JSValueRef](jsvalueref.md) to test.
- `constructor`: The constructor to test against.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` to discard any exception.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the value is an object that `constructor` creates, according to the JavaScript `instanceof` operator; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing Values

- [JSValueIsEqual(\_:\_:\_:\_:)](jsvalueisequal%28________%29.md): Tests whether two JavaScript values are equal.
- [JSValueIsStrictEqual(\_:\_:\_:)](jsvalueisstrictequal%28______%29.md): Tests whether two JavaScript values are strict equal.

# JSValueIsInstanceOfConstructor (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Tests whether a JavaScript value is an object that the specified constructor creates.

## Declaration

```objectivec
bool JSValueIsInstanceOfConstructor(JSContextRef ctx, JSValueRef value, JSObjectRef constructor, JSValueRef*exception);
```

## Parameters

- `ctx`: The execution context to use.
- `value`: The [JSValueRef](jsvalueref.md) to test.
- `constructor`: The constructor to test against.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` to discard any exception.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the value is an object that `constructor` creates, according to the JavaScript `instanceof` operator; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing Values

- [JSValueIsEqual](jsvalueisequal%28________%29.md): Tests whether two JavaScript values are equal.
- [JSValueIsStrictEqual](jsvalueisstrictequal%28______%29.md): Tests whether two JavaScript values are strict equal.
