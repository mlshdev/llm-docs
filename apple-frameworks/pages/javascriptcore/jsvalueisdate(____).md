> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalueisdate(_:_:)](https://developer.apple.com/documentation/javascriptcore/jsvalueisdate(_:_:))

# JSValueIsDate(\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Tests whether a JavaScript value is a date.

## Declaration

```swift
func JSValueIsDate(_ ctx: JSContextRef!, _ value: JSValueRef!) -> Bool
```

## Parameters

- `ctx`: The execution context to use.
- `value`: The [JSValueRef](jsvalueref.md) to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `value` is a date; otherwise, [false](https://developer.apple.com/documentation/swift/false).

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
- [JSValueIsObjectOfClass(\_:\_:\_:)](jsvalueisobjectofclass%28______%29.md): Tests whether a JavaScript value is an object with a specified class in its class chain.
- [JSValueIsArray(\_:\_:)](jsvalueisarray%28____%29.md): Tests whether a JavaScript value is an array.
- [JSValueGetTypedArrayType(\_:\_:\_:)](jsvaluegettypedarraytype%28______%29.md): Returns a JavaScript value’s typed array type.
- [JSType](jstype.md): Constants that identify the type of a JavaScript value.

# JSValueIsDate (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Tests whether a JavaScript value is a date.

## Declaration

```objectivec
bool JSValueIsDate(JSContextRef ctx, JSValueRef value);
```

## Parameters

- `ctx`: The execution context to use.
- `value`: The [JSValueRef](jsvalueref.md) to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `value` is a date; otherwise, [false](https://developer.apple.com/documentation/swift/false).

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
- [JSValueIsObjectOfClass](jsvalueisobjectofclass%28______%29.md): Tests whether a JavaScript value is an object with a specified class in its class chain.
- [JSValueIsArray](jsvalueisarray%28____%29.md): Tests whether a JavaScript value is an array.
- [JSValueGetTypedArrayType](jsvaluegettypedarraytype%28______%29.md): Returns a JavaScript value’s typed array type.
- [JSType](jstype.md): Constants that identify the type of a JavaScript value.
