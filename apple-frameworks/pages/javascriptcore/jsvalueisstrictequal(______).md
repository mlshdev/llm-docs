> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalueisstrictequal(_:_:_:)](https://developer.apple.com/documentation/javascriptcore/jsvalueisstrictequal(_:_:_:))

# JSValueIsStrictEqual(\_:\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Tests whether two JavaScript values are strict equal.

## Declaration

```swift
func JSValueIsStrictEqual(_ ctx: JSContextRef!, _ a: JSValueRef!, _ b: JSValueRef!) -> Bool
```

## Parameters

- `ctx`: The execution context to use.
- `a`: The first value to test.
- `b`: The second value to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the two values are strict equal according to the JavaScript `===` operator; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing Values

- [JSValueIsEqual(\_:\_:\_:\_:)](jsvalueisequal%28________%29.md): Tests whether two JavaScript values are equal.
- [JSValueIsInstanceOfConstructor(\_:\_:\_:\_:)](jsvalueisinstanceofconstructor%28________%29.md): Tests whether a JavaScript value is an object that the specified constructor creates.

# JSValueIsStrictEqual (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Tests whether two JavaScript values are strict equal.

## Declaration

```objectivec
bool JSValueIsStrictEqual(JSContextRef ctx, JSValueRef a, JSValueRef b);
```

## Parameters

- `ctx`: The execution context to use.
- `a`: The first value to test.
- `b`: The second value to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the two values are strict equal according to the JavaScript `===` operator; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing Values

- [JSValueIsEqual](jsvalueisequal%28________%29.md): Tests whether two JavaScript values are equal.
- [JSValueIsInstanceOfConstructor](jsvalueisinstanceofconstructor%28________%29.md): Tests whether a JavaScript value is an object that the specified constructor creates.
