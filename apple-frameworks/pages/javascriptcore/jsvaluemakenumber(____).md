> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvaluemakenumber(_:_:)](https://developer.apple.com/documentation/javascriptcore/jsvaluemakenumber(_:_:))

# JSValueMakeNumber(\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript value of the number type.

## Declaration

```swift
func JSValueMakeNumber(_ ctx: JSContextRef!, _ number: Double) -> JSValueRef!
```

## Parameters

- `ctx`: The execution context to use.
- `number`: The double to assign to the newly created [JSValueRef](jsvalueref.md).

<a id="return-value"></a>

## Return Value

A [JSValueRef](jsvalueref.md) of the number type that represents the value of `number`.

## See Also

### Creating Values

- [JSValueMakeUndefined(\_:)](jsvaluemakeundefined%28__%29.md): Creates a JavaScript value of the undefined type.
- [JSValueMakeNull(\_:)](jsvaluemakenull%28__%29.md): Creates a JavaScript value of the null type.
- [JSValueMakeBoolean(\_:\_:)](jsvaluemakeboolean%28____%29.md): Creates a JavaScript Boolean value.
- [JSValueMakeString(\_:\_:)](jsvaluemakestring%28____%29.md): Creates a JavaScript value of the string type.
- [JSValueMakeSymbol(\_:\_:)](jsvaluemakesymbol%28____%29.md): Creates a JavaScript value of the symbol type.

# JSValueMakeNumber (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript value of the number type.

## Declaration

```objectivec
JSValueRefJSValueMakeNumber(JSContextRef ctx, double number);
```

## Parameters

- `ctx`: The execution context to use.
- `number`: The double to assign to the newly created [JSValueRef](jsvalueref.md).

<a id="return-value"></a>

## Return Value

A [JSValueRef](jsvalueref.md) of the number type that represents the value of `number`.

## See Also

### Creating Values

- [JSValueMakeUndefined](jsvaluemakeundefined%28__%29.md): Creates a JavaScript value of the undefined type.
- [JSValueMakeNull](jsvaluemakenull%28__%29.md): Creates a JavaScript value of the null type.
- [JSValueMakeBoolean](jsvaluemakeboolean%28____%29.md): Creates a JavaScript Boolean value.
- [JSValueMakeString](jsvaluemakestring%28____%29.md): Creates a JavaScript value of the string type.
- [JSValueMakeSymbol](jsvaluemakesymbol%28____%29.md): Creates a JavaScript value of the symbol type.
