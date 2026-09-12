> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalueisbigint(_:_:)](https://developer.apple.com/documentation/javascriptcore/jsvalueisbigint(_:_:))

# JSValueIsBigInt(\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```swift
func JSValueIsBigInt(_ ctx: JSContextRef, _ value: JSValueRef) -> Bool
```

## Parameters

- `ctx`: The execution context to use.
- `value`: The JSValue to test.

<a id="return-value"></a>

## Return Value

True if value’s type is the BigInt type, otherwise false.

<a id="discussion"></a>

## Discussion

Tests whether a JavaScript value’s type is the BigInt type.

# JSValueIsBigInt (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```objectivec
bool JSValueIsBigInt(JSContextRef ctx, JSValueRef value);
```

## Parameters

- `ctx`: The execution context to use.
- `value`: The JSValue to test.

<a id="return-value"></a>

## Return Value

True if value’s type is the BigInt type, otherwise false.

<a id="discussion"></a>

## Discussion

Tests whether a JavaScript value’s type is the BigInt type.
