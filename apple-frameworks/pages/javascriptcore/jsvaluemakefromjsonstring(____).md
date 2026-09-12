> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvaluemakefromjsonstring(_:_:)](https://developer.apple.com/documentation/javascriptcore/jsvaluemakefromjsonstring(_:_:))

# JSValueMakeFromJSONString(\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript value from a JSON-formatted string.

## Declaration

```swift
func JSValueMakeFromJSONString(_ ctx: JSContextRef!, _ string: JSStringRef!) -> JSValueRef!
```

## Parameters

- `ctx`: The execution context to use.
- `string`: The [JSStringRef](jsstringref.md) that contains the JSON string to parse.

<a id="return-value"></a>

## Return Value

A [JSValueRef](jsvalueref.md) that contains the parsed value, or `NULL` if the input is invalid.

## See Also

### Converting to and from JSON-Formatted Strings

- [JSValueCreateJSONString(\_:\_:\_:\_:)](jsvaluecreatejsonstring%28________%29.md): Creates a JavaScript string that contains the JSON-serialized representation of a JavaScript value.

# JSValueMakeFromJSONString (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript value from a JSON-formatted string.

## Declaration

```objectivec
JSValueRefJSValueMakeFromJSONString(JSContextRef ctx, JSStringRef string);
```

## Parameters

- `ctx`: The execution context to use.
- `string`: The [JSStringRef](jsstringref.md) that contains the JSON string to parse.

<a id="return-value"></a>

## Return Value

A [JSValueRef](jsvalueref.md) that contains the parsed value, or `NULL` if the input is invalid.

## See Also

### Converting to and from JSON-Formatted Strings

- [JSValueCreateJSONString](jsvaluecreatejsonstring%28________%29.md): Creates a JavaScript string that contains the JSON-serialized representation of a JavaScript value.
