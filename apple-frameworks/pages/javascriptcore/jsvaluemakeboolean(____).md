> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvaluemakeboolean(_:_:)](https://developer.apple.com/documentation/javascriptcore/jsvaluemakeboolean(_:_:))

# JSValueMakeBoolean(\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript Boolean value.

## Declaration

```swift
func JSValueMakeBoolean(_ ctx: JSContextRef!, _ boolean: Bool) -> JSValueRef!
```

## Parameters

- `ctx`: The execution context to use.
- `boolean`: The Boolean value to assign to the newly created [JSValueRef](jsvalueref.md).

<a id="return-value"></a>

## Return Value

A [JSValueRef](jsvalueref.md) of the Boolean type that represents the value of `boolean`.

## See Also

### Creating Values

- [JSValueMakeUndefined(\_:)](jsvaluemakeundefined%28__%29.md): Creates a JavaScript value of the undefined type.
- [JSValueMakeNull(\_:)](jsvaluemakenull%28__%29.md): Creates a JavaScript value of the null type.
- [JSValueMakeNumber(\_:\_:)](jsvaluemakenumber%28____%29.md): Creates a JavaScript value of the number type.
- [JSValueMakeString(\_:\_:)](jsvaluemakestring%28____%29.md): Creates a JavaScript value of the string type.
- [JSValueMakeSymbol(\_:\_:)](jsvaluemakesymbol%28____%29.md): Creates a JavaScript value of the symbol type.

# JSValueMakeBoolean (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript Boolean value.

## Declaration

```objectivec
JSValueRefJSValueMakeBoolean(JSContextRef ctx, bool boolean);
```

## Parameters

- `ctx`: The execution context to use.
- `boolean`: The Boolean value to assign to the newly created [JSValueRef](jsvalueref.md).

<a id="return-value"></a>

## Return Value

A [JSValueRef](jsvalueref.md) of the Boolean type that represents the value of `boolean`.

## See Also

### Creating Values

- [JSValueMakeUndefined](jsvaluemakeundefined%28__%29.md): Creates a JavaScript value of the undefined type.
- [JSValueMakeNull](jsvaluemakenull%28__%29.md): Creates a JavaScript value of the null type.
- [JSValueMakeNumber](jsvaluemakenumber%28____%29.md): Creates a JavaScript value of the number type.
- [JSValueMakeString](jsvaluemakestring%28____%29.md): Creates a JavaScript value of the string type.
- [JSValueMakeSymbol](jsvaluemakesymbol%28____%29.md): Creates a JavaScript value of the symbol type.
