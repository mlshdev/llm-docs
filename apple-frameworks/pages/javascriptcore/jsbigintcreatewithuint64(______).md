> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsbigintcreatewithuint64(_:_:_:)](https://developer.apple.com/documentation/javascriptcore/jsbigintcreatewithuint64(_:_:_:))

# JSBigIntCreateWithUInt64(\_:\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```swift
func JSBigIntCreateWithUInt64(_ ctx: JSContextRef, _ integer: UInt64, _ exception: UnsafeMutablePointer<JSValueRef?>?) -> JSValueRef
```

## Parameters

- `ctx`: The execution context to use.
- `integer`: The 64-bit unsigned integer to copy into the new BigInt JSValue.
- `exception`: A pointer to a JSValueRef in which to store an exception, if any. To reliable detect exception, initialize this to null before the call. Pass NULL if you do not care to store an exception.

<a id="return-value"></a>

## Return Value

A BigInt JSValue of the integer, or NULL if an exception is thrown.

<a id="discussion"></a>

## Discussion

Creates a JavaScript BigInt with a 64-bit unsigned integer.

# JSBigIntCreateWithUInt64 (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```objectivec
JSValueRefJSBigIntCreateWithUInt64(JSContextRef ctx, uint64_t integer, JSValueRef*exception);
```

## Parameters

- `ctx`: The execution context to use.
- `integer`: The 64-bit unsigned integer to copy into the new BigInt JSValue.
- `exception`: A pointer to a JSValueRef in which to store an exception, if any. To reliable detect exception, initialize this to null before the call. Pass NULL if you do not care to store an exception.

<a id="return-value"></a>

## Return Value

A BigInt JSValue of the integer, or NULL if an exception is thrown.

<a id="discussion"></a>

## Discussion

Creates a JavaScript BigInt with a 64-bit unsigned integer.
