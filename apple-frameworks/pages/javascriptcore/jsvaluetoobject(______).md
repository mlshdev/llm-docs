> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvaluetoobject(_:_:_:)](https://developer.apple.com/documentation/javascriptcore/jsvaluetoobject(_:_:_:))

# JSValueToObject(\_:\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Converts a JavaScript value to an object and returns the resulting object.

## Declaration

```swift
func JSValueToObject(_ ctx: JSContextRef!, _ value: JSValueRef!, _ exception: UnsafeMutablePointer<JSValueRef?>!) -> JSObjectRef!
```

## Parameters

- `ctx`: The execution context to use.
- `value`: The [JSValueRef](jsvalueref.md) to convert.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` to discard any exception.

<a id="return-value"></a>

## Return Value

The [JSObjectRef](jsobjectref.md) result of conversion, or `NULL` if the system throws an exception.

## See Also

### Converting to Primitive Values

- [JSValueToBoolean(\_:\_:)](jsvaluetoboolean%28____%29.md): Converts a JavaScript value to a Boolean and returns the resulting Boolean.
- [JSValueToNumber(\_:\_:\_:)](jsvaluetonumber%28______%29.md): Converts a JavaScript value to a number and returns the resulting number.
- [JSValueToStringCopy(\_:\_:\_:)](jsvaluetostringcopy%28______%29.md): Converts a JavaScript value to a string and copies the result into a JavaScript string.

# JSValueToObject (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Converts a JavaScript value to an object and returns the resulting object.

## Declaration

```objectivec
JSObjectRefJSValueToObject(JSContextRef ctx, JSValueRef value, JSValueRef*exception);
```

## Parameters

- `ctx`: The execution context to use.
- `value`: The [JSValueRef](jsvalueref.md) to convert.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` to discard any exception.

<a id="return-value"></a>

## Return Value

The [JSObjectRef](jsobjectref.md) result of conversion, or `NULL` if the system throws an exception.

## See Also

### Converting to Primitive Values

- [JSValueToBoolean](jsvaluetoboolean%28____%29.md): Converts a JavaScript value to a Boolean and returns the resulting Boolean.
- [JSValueToNumber](jsvaluetonumber%28______%29.md): Converts a JavaScript value to a number and returns the resulting number.
- [JSValueToStringCopy](jsvaluetostringcopy%28______%29.md): Converts a JavaScript value to a string and copies the result into a JavaScript string.
