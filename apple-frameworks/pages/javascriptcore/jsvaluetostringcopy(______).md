> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvaluetostringcopy(_:_:_:)](https://developer.apple.com/documentation/javascriptcore/jsvaluetostringcopy(_:_:_:))

# JSValueToStringCopy(\_:\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Converts a JavaScript value to a string and copies the result into a JavaScript string.

## Declaration

```swift
func JSValueToStringCopy(_ ctx: JSContextRef!, _ value: JSValueRef!, _ exception: UnsafeMutablePointer<JSValueRef?>!) -> JSStringRef!
```

## Parameters

- `ctx`: The execution context to use.
- `value`: The [JSValueRef](jsvalueref.md) to convert.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` to discard any exception.

<a id="return-value"></a>

## Return Value

A [JSStringRef](jsstringref.md) with the result of conversion, or `NULL` if the system throws an exception. Ownership follows [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Converting to Primitive Values

- [JSValueToBoolean(\_:\_:)](jsvaluetoboolean%28____%29.md): Converts a JavaScript value to a Boolean and returns the resulting Boolean.
- [JSValueToNumber(\_:\_:\_:)](jsvaluetonumber%28______%29.md): Converts a JavaScript value to a number and returns the resulting number.
- [JSValueToObject(\_:\_:\_:)](jsvaluetoobject%28______%29.md): Converts a JavaScript value to an object and returns the resulting object.

# JSValueToStringCopy (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Converts a JavaScript value to a string and copies the result into a JavaScript string.

## Declaration

```objectivec
JSStringRefJSValueToStringCopy(JSContextRef ctx, JSValueRef value, JSValueRef*exception);
```

## Parameters

- `ctx`: The execution context to use.
- `value`: The [JSValueRef](jsvalueref.md) to convert.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` to discard any exception.

<a id="return-value"></a>

## Return Value

A [JSStringRef](jsstringref.md) with the result of conversion, or `NULL` if the system throws an exception. Ownership follows [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Converting to Primitive Values

- [JSValueToBoolean](jsvaluetoboolean%28____%29.md): Converts a JavaScript value to a Boolean and returns the resulting Boolean.
- [JSValueToNumber](jsvaluetonumber%28______%29.md): Converts a JavaScript value to a number and returns the resulting number.
- [JSValueToObject](jsvaluetoobject%28______%29.md): Converts a JavaScript value to an object and returns the resulting object.
