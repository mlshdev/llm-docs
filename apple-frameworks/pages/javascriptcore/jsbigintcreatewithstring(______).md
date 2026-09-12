> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsbigintcreatewithstring(_:_:_:)](https://developer.apple.com/documentation/javascriptcore/jsbigintcreatewithstring(_:_:_:))

# JSBigIntCreateWithString(\_:\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```swift
func JSBigIntCreateWithString(_ ctx: JSContextRef, _ string: JSStringRef, _ exception: UnsafeMutablePointer<JSValueRef?>?) -> JSValueRef
```

## Parameters

- `ctx`: The execution context to use.
- `string`: The JSStringRef representation of an integer.
- `exception`: A pointer to a JSValueRef in which to store an exception, if any. To reliable detect exception, initialize this to null before the call. Pass NULL if you do not care to store an exception.

<a id="return-value"></a>

## Return Value

A BigInt JSValue of the string, or NULL if an exception is thrown.

<a id="discussion"></a>

## Discussion

Creates a JavaScript BigInt with an integer represented in string.

This is equivalent to calling the `BigInt` constructor from JavaScript with a string argument.

# JSBigIntCreateWithString (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```objectivec
JSValueRefJSBigIntCreateWithString(JSContextRef ctx, JSStringRef string, JSValueRef*exception);
```

## Parameters

- `ctx`: The execution context to use.
- `string`: The JSStringRef representation of an integer.
- `exception`: A pointer to a JSValueRef in which to store an exception, if any. To reliable detect exception, initialize this to null before the call. Pass NULL if you do not care to store an exception.

<a id="return-value"></a>

## Return Value

A BigInt JSValue of the string, or NULL if an exception is thrown.

<a id="discussion"></a>

## Discussion

Creates a JavaScript BigInt with an integer represented in string.

This is equivalent to calling the `BigInt` constructor from JavaScript with a string argument.
