> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvaluemakenull(_:)](https://developer.apple.com/documentation/javascriptcore/jsvaluemakenull(_:))

# JSValueMakeNull(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript value of the null type.

## Declaration

```swift
func JSValueMakeNull(_ ctx: JSContextRef!) -> JSValueRef!
```

## Parameters

- `ctx`: The execution context to use.

<a id="return-value"></a>

## Return Value

The unique null value.

## See Also

### Creating Values

- [JSValueMakeUndefined(\_:)](jsvaluemakeundefined%28__%29.md): Creates a JavaScript value of the undefined type.
- [JSValueMakeBoolean(\_:\_:)](jsvaluemakeboolean%28____%29.md): Creates a JavaScript Boolean value.
- [JSValueMakeNumber(\_:\_:)](jsvaluemakenumber%28____%29.md): Creates a JavaScript value of the number type.
- [JSValueMakeString(\_:\_:)](jsvaluemakestring%28____%29.md): Creates a JavaScript value of the string type.
- [JSValueMakeSymbol(\_:\_:)](jsvaluemakesymbol%28____%29.md): Creates a JavaScript value of the symbol type.

# JSValueMakeNull (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript value of the null type.

## Declaration

```objectivec
JSValueRefJSValueMakeNull(JSContextRef ctx);
```

## Parameters

- `ctx`: The execution context to use.

<a id="return-value"></a>

## Return Value

The unique null value.

## See Also

### Creating Values

- [JSValueMakeUndefined](jsvaluemakeundefined%28__%29.md): Creates a JavaScript value of the undefined type.
- [JSValueMakeBoolean](jsvaluemakeboolean%28____%29.md): Creates a JavaScript Boolean value.
- [JSValueMakeNumber](jsvaluemakenumber%28____%29.md): Creates a JavaScript value of the number type.
- [JSValueMakeString](jsvaluemakestring%28____%29.md): Creates a JavaScript value of the string type.
- [JSValueMakeSymbol](jsvaluemakesymbol%28____%29.md): Creates a JavaScript value of the symbol type.
