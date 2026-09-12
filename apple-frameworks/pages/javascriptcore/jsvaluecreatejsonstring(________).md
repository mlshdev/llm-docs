> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvaluecreatejsonstring(_:_:_:_:)](https://developer.apple.com/documentation/javascriptcore/jsvaluecreatejsonstring(_:_:_:_:))

# JSValueCreateJSONString(\_:\_:\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript string that contains the JSON-serialized representation of a JavaScript value.

## Declaration

```swift
func JSValueCreateJSONString(_ ctx: JSContextRef!, _ value: JSValueRef!, _ indent: UInt32, _ exception: UnsafeMutablePointer<JSValueRef?>!) -> JSStringRef!
```

## Parameters

- `ctx`: The execution context to use.
- `value`: The value to serialize.
- `indent`: The number of spaces to indent when nesting. If `0`, the resulting JSON string doesn’t contain new lines. The size of the indent clamps to 10 spaces.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` to discard any exception.

<a id="return-value"></a>

## Return Value

A [JSStringRef](jsstringref.md) with the result of serialization, or `NULL` if the system throws an exception.

## See Also

### Converting to and from JSON-Formatted Strings

- [JSValueMakeFromJSONString(\_:\_:)](jsvaluemakefromjsonstring%28____%29.md): Creates a JavaScript value from a JSON-formatted string.

# JSValueCreateJSONString (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript string that contains the JSON-serialized representation of a JavaScript value.

## Declaration

```objectivec
JSStringRefJSValueCreateJSONString(JSContextRef ctx, JSValueRef value, unsigned int indent, JSValueRef*exception);
```

## Parameters

- `ctx`: The execution context to use.
- `value`: The value to serialize.
- `indent`: The number of spaces to indent when nesting. If `0`, the resulting JSON string doesn’t contain new lines. The size of the indent clamps to 10 spaces.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` to discard any exception.

<a id="return-value"></a>

## Return Value

A [JSStringRef](jsstringref.md) with the result of serialization, or `NULL` if the system throws an exception.

## See Also

### Converting to and from JSON-Formatted Strings

- [JSValueMakeFromJSONString](jsvaluemakefromjsonstring%28____%29.md): Creates a JavaScript value from a JSON-formatted string.
