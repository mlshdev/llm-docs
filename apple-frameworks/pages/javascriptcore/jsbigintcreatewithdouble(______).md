> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsbigintcreatewithdouble(_:_:_:)](https://developer.apple.com/documentation/javascriptcore/jsbigintcreatewithdouble(_:_:_:))

# JSBigIntCreateWithDouble(\_:\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```swift
func JSBigIntCreateWithDouble(_ ctx: JSContextRef, _ value: Double, _ exception: UnsafeMutablePointer<JSValueRef?>?) -> JSValueRef
```

## Parameters

- `ctx`: The execution context to use.
- `value`: The value to copy into the new BigInt JSValue.
- `exception`: A pointer to a JSValueRef in which to store an exception, if any. To reliable detect exception, initialize this to null before the call. Pass NULL if you do not care to store an exception.

<a id="return-value"></a>

## Return Value

A BigInt JSValue of the value, or NULL if an exception is thrown.

<a id="discussion"></a>

## Discussion

Creates a JavaScript BigInt with a double.

If the value is not an integer, an exception is thrown.

# JSBigIntCreateWithDouble (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```objectivec
JSValueRefJSBigIntCreateWithDouble(JSContextRef ctx, double value, JSValueRef*exception);
```

## Parameters

- `ctx`: The execution context to use.
- `value`: The value to copy into the new BigInt JSValue.
- `exception`: A pointer to a JSValueRef in which to store an exception, if any. To reliable detect exception, initialize this to null before the call. Pass NULL if you do not care to store an exception.

<a id="return-value"></a>

## Return Value

A BigInt JSValue of the value, or NULL if an exception is thrown.

<a id="discussion"></a>

## Discussion

Creates a JavaScript BigInt with a double.

If the value is not an integer, an exception is thrown.
