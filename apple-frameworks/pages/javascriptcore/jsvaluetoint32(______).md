> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvaluetoint32(_:_:_:)](https://developer.apple.com/documentation/javascriptcore/jsvaluetoint32(_:_:_:))

# JSValueToInt32(\_:\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```swift
func JSValueToInt32(_ ctx: JSContextRef, _ value: JSValueRef, _ exception: UnsafeMutablePointer<JSValueRef?>?) -> Int32
```

## Parameters

- `ctx`: The execution context to use.
- `value`: The JSValue to convert.
- `exception`: A pointer to a JSValueRef in which to store an exception, if any. To reliable detect exception, initialize this to null before the call. Pass NULL if you do not care to store an exception.

<a id="return-value"></a>

## Return Value

An int32_t with the result of conversion, or 0 if an exception is thrown. Since 0 is valid value, `exception` must be checked after the call.

<a id="discussion"></a>

## Discussion

Converts a JSValue to a singed 32-bit integer and returns the resulting integer.

The JSValue is converted to an integer according to the rules specified by the JavaScript language. If the value is a BigInt, then the JSValue is truncated to an int32_t.

# JSValueToInt32 (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```objectivec
int32_t JSValueToInt32(JSContextRef ctx, JSValueRef value, JSValueRef*exception);
```

## Parameters

- `ctx`: The execution context to use.
- `value`: The JSValue to convert.
- `exception`: A pointer to a JSValueRef in which to store an exception, if any. To reliable detect exception, initialize this to null before the call. Pass NULL if you do not care to store an exception.

<a id="return-value"></a>

## Return Value

An int32_t with the result of conversion, or 0 if an exception is thrown. Since 0 is valid value, `exception` must be checked after the call.

<a id="discussion"></a>

## Discussion

Converts a JSValue to a singed 32-bit integer and returns the resulting integer.

The JSValue is converted to an integer according to the rules specified by the JavaScript language. If the value is a BigInt, then the JSValue is truncated to an int32_t.
