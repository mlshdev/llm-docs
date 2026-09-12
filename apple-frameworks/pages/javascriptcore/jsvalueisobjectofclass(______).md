> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalueisobjectofclass(_:_:_:)](https://developer.apple.com/documentation/javascriptcore/jsvalueisobjectofclass(_:_:_:))

# JSValueIsObjectOfClass(\_:\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Tests whether a JavaScript value is an object with a specified class in its class chain.

## Declaration

```swift
func JSValueIsObjectOfClass(_ ctx: JSContextRef!, _ value: JSValueRef!, _ jsClass: JSClassRef!) -> Bool
```

## Parameters

- `ctx`: The execution context to use.
- `value`: The [JSValueRef](jsvalueref.md) to test.
- `jsClass`: The [JSClassRef](jsclassref.md) to test against.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `value` is an object and has `jsClass` in its class chain; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Testing the Value’s Type

- [JSValueGetType(\_:\_:)](jsvaluegettype%28____%29.md): Returns a JavaScript value’s type.
- [JSValueIsUndefined(\_:\_:)](jsvalueisundefined%28____%29.md): Tests whether a JavaScript value’s type is the undefined type.
- [JSValueIsNull(\_:\_:)](jsvalueisnull%28____%29.md): Tests whether a JavaScript value’s type is the null type.
- [JSValueIsBoolean(\_:\_:)](jsvalueisboolean%28____%29.md): Tests whether a JavaScript value is Boolean.
- [JSValueIsNumber(\_:\_:)](jsvalueisnumber%28____%29.md): Tests whether a JavaScript value’s type is the number type.
- [JSValueIsString(\_:\_:)](jsvalueisstring%28____%29.md): Tests whether a JavaScript value’s type is the string type.
- [JSValueIsSymbol(\_:\_:)](jsvalueissymbol%28____%29.md): Tests whether a JavaScript value’s type is the symbol type.
- [JSValueIsObject(\_:\_:)](jsvalueisobject%28____%29.md): Tests whether a JavaScript value’s type is the object type.
- [JSValueIsArray(\_:\_:)](jsvalueisarray%28____%29.md): Tests whether a JavaScript value is an array.
- [JSValueIsDate(\_:\_:)](jsvalueisdate%28____%29.md): Tests whether a JavaScript value is a date.
- [JSValueGetTypedArrayType(\_:\_:\_:)](jsvaluegettypedarraytype%28______%29.md): Returns a JavaScript value’s typed array type.
- [JSType](jstype.md): Constants that identify the type of a JavaScript value.

# JSValueIsObjectOfClass (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Tests whether a JavaScript value is an object with a specified class in its class chain.

## Declaration

```objectivec
bool JSValueIsObjectOfClass(JSContextRef ctx, JSValueRef value, JSClassRef jsClass);
```

## Parameters

- `ctx`: The execution context to use.
- `value`: The [JSValueRef](jsvalueref.md) to test.
- `jsClass`: The [JSClassRef](jsclassref.md) to test against.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `value` is an object and has `jsClass` in its class chain; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Testing the Value’s Type

- [JSValueGetType](jsvaluegettype%28____%29.md): Returns a JavaScript value’s type.
- [JSValueIsUndefined](jsvalueisundefined%28____%29.md): Tests whether a JavaScript value’s type is the undefined type.
- [JSValueIsNull](jsvalueisnull%28____%29.md): Tests whether a JavaScript value’s type is the null type.
- [JSValueIsBoolean](jsvalueisboolean%28____%29.md): Tests whether a JavaScript value is Boolean.
- [JSValueIsNumber](jsvalueisnumber%28____%29.md): Tests whether a JavaScript value’s type is the number type.
- [JSValueIsString](jsvalueisstring%28____%29.md): Tests whether a JavaScript value’s type is the string type.
- [JSValueIsSymbol](jsvalueissymbol%28____%29.md): Tests whether a JavaScript value’s type is the symbol type.
- [JSValueIsObject](jsvalueisobject%28____%29.md): Tests whether a JavaScript value’s type is the object type.
- [JSValueIsArray](jsvalueisarray%28____%29.md): Tests whether a JavaScript value is an array.
- [JSValueIsDate](jsvalueisdate%28____%29.md): Tests whether a JavaScript value is a date.
- [JSValueGetTypedArrayType](jsvaluegettypedarraytype%28______%29.md): Returns a JavaScript value’s typed array type.
- [JSType](jstype.md): Constants that identify the type of a JavaScript value.
