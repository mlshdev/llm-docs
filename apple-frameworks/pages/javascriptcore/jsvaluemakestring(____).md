> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvaluemakestring(_:_:)](https://developer.apple.com/documentation/javascriptcore/jsvaluemakestring(_:_:))

# JSValueMakeString(\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript value of the string type.

## Declaration

```swift
func JSValueMakeString(_ ctx: JSContextRef!, _ string: JSStringRef!) -> JSValueRef!
```

## Parameters

- `ctx`: The execution context to use.
- `string`: The [JSStringRef](jsstringref.md) to assign to the newly created [JSValueRef](jsvalueref.md). The newly created [JSValueRef](jsvalueref.md) retains `string`, and releases it upon garbage collection.

<a id="return-value"></a>

## Return Value

A [JSValueRef](jsvalueref.md) of the string type that represents the value of `string`.

## See Also

### Creating Values

- [JSValueMakeUndefined(\_:)](jsvaluemakeundefined%28__%29.md): Creates a JavaScript value of the undefined type.
- [JSValueMakeNull(\_:)](jsvaluemakenull%28__%29.md): Creates a JavaScript value of the null type.
- [JSValueMakeBoolean(\_:\_:)](jsvaluemakeboolean%28____%29.md): Creates a JavaScript Boolean value.
- [JSValueMakeNumber(\_:\_:)](jsvaluemakenumber%28____%29.md): Creates a JavaScript value of the number type.
- [JSValueMakeSymbol(\_:\_:)](jsvaluemakesymbol%28____%29.md): Creates a JavaScript value of the symbol type.

# JSValueMakeString (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript value of the string type.

## Declaration

```objectivec
JSValueRefJSValueMakeString(JSContextRef ctx, JSStringRef string);
```

## Parameters

- `ctx`: The execution context to use.
- `string`: The [JSStringRef](jsstringref.md) to assign to the newly created [JSValueRef](jsvalueref.md). The newly created [JSValueRef](jsvalueref.md) retains `string`, and releases it upon garbage collection.

<a id="return-value"></a>

## Return Value

A [JSValueRef](jsvalueref.md) of the string type that represents the value of `string`.

## See Also

### Creating Values

- [JSValueMakeUndefined](jsvaluemakeundefined%28__%29.md): Creates a JavaScript value of the undefined type.
- [JSValueMakeNull](jsvaluemakenull%28__%29.md): Creates a JavaScript value of the null type.
- [JSValueMakeBoolean](jsvaluemakeboolean%28____%29.md): Creates a JavaScript Boolean value.
- [JSValueMakeNumber](jsvaluemakenumber%28____%29.md): Creates a JavaScript value of the number type.
- [JSValueMakeSymbol](jsvaluemakesymbol%28____%29.md): Creates a JavaScript value of the symbol type.
