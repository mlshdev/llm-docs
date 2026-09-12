> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvaluetoboolean(_:_:)](https://developer.apple.com/documentation/javascriptcore/jsvaluetoboolean(_:_:))

# JSValueToBoolean(\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Converts a JavaScript value to a Boolean and returns the resulting Boolean.

## Declaration

```swift
func JSValueToBoolean(_ ctx: JSContextRef!, _ value: JSValueRef!) -> Bool
```

## Parameters

- `ctx`: The execution context to use.
- `value`: The [JSValueRef](jsvalueref.md) to convert.

<a id="return-value"></a>

## Return Value

The Boolean result of conversion.

## See Also

### Converting to Primitive Values

- [JSValueToNumber(\_:\_:\_:)](jsvaluetonumber%28______%29.md): Converts a JavaScript value to a number and returns the resulting number.
- [JSValueToStringCopy(\_:\_:\_:)](jsvaluetostringcopy%28______%29.md): Converts a JavaScript value to a string and copies the result into a JavaScript string.
- [JSValueToObject(\_:\_:\_:)](jsvaluetoobject%28______%29.md): Converts a JavaScript value to an object and returns the resulting object.

# JSValueToBoolean (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Converts a JavaScript value to a Boolean and returns the resulting Boolean.

## Declaration

```objectivec
bool JSValueToBoolean(JSContextRef ctx, JSValueRef value);
```

## Parameters

- `ctx`: The execution context to use.
- `value`: The [JSValueRef](jsvalueref.md) to convert.

<a id="return-value"></a>

## Return Value

The Boolean result of conversion.

## See Also

### Converting to Primitive Values

- [JSValueToNumber](jsvaluetonumber%28______%29.md): Converts a JavaScript value to a number and returns the resulting number.
- [JSValueToStringCopy](jsvaluetostringcopy%28______%29.md): Converts a JavaScript value to a string and copies the result into a JavaScript string.
- [JSValueToObject](jsvaluetoobject%28______%29.md): Converts a JavaScript value to an object and returns the resulting object.
