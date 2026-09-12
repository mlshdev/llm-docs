> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvaluemakesymbol(_:_:)](https://developer.apple.com/documentation/javascriptcore/jsvaluemakesymbol(_:_:))

# JSValueMakeSymbol(\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript value of the symbol type.

## Declaration

```swift
func JSValueMakeSymbol(_ ctx: JSContextRef!, _ description: JSStringRef!) -> JSValueRef!
```

## Parameters

- `ctx`: The execution context to use.
- `description`: A description of the newly created symbol value.

<a id="return-value"></a>

## Return Value

A unique [JSValueRef](jsvalueref.md) of the symbol type with a description that matches `description`.

## See Also

### Creating Values

- [JSValueMakeUndefined(\_:)](jsvaluemakeundefined%28__%29.md): Creates a JavaScript value of the undefined type.
- [JSValueMakeNull(\_:)](jsvaluemakenull%28__%29.md): Creates a JavaScript value of the null type.
- [JSValueMakeBoolean(\_:\_:)](jsvaluemakeboolean%28____%29.md): Creates a JavaScript Boolean value.
- [JSValueMakeNumber(\_:\_:)](jsvaluemakenumber%28____%29.md): Creates a JavaScript value of the number type.
- [JSValueMakeString(\_:\_:)](jsvaluemakestring%28____%29.md): Creates a JavaScript value of the string type.

# JSValueMakeSymbol (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript value of the symbol type.

## Declaration

```objectivec
JSValueRefJSValueMakeSymbol(JSContextRef ctx, JSStringRef description);
```

## Parameters

- `ctx`: The execution context to use.
- `description`: A description of the newly created symbol value.

<a id="return-value"></a>

## Return Value

A unique [JSValueRef](jsvalueref.md) of the symbol type with a description that matches `description`.

## See Also

### Creating Values

- [JSValueMakeUndefined](jsvaluemakeundefined%28__%29.md): Creates a JavaScript value of the undefined type.
- [JSValueMakeNull](jsvaluemakenull%28__%29.md): Creates a JavaScript value of the null type.
- [JSValueMakeBoolean](jsvaluemakeboolean%28____%29.md): Creates a JavaScript Boolean value.
- [JSValueMakeNumber](jsvaluemakenumber%28____%29.md): Creates a JavaScript value of the number type.
- [JSValueMakeString](jsvaluemakestring%28____%29.md): Creates a JavaScript value of the string type.
