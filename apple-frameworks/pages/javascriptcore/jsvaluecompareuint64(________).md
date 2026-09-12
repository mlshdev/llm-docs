> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvaluecompareuint64(_:_:_:_:)](https://developer.apple.com/documentation/javascriptcore/jsvaluecompareuint64(_:_:_:_:))

# JSValueCompareUInt64(\_:\_:\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```swift
func JSValueCompareUInt64(_ ctx: JSContextRef, _ left: JSValueRef, _ right: UInt64, _ exception: UnsafeMutablePointer<JSValueRef?>?) -> JSRelationCondition
```

## Parameters

- `ctx`: The execution context to use.
- `left`: The JSValue as the left operand.
- `right`: The uint64_t as the right operand.
- `exception`: A pointer to a JSValueRef in which to store an exception, if any. To reliable detect exception, initialize this to null before the call. Pass NULL if you do not care to store an exception.

<a id="return-value"></a>

## Return Value

A value of JSRelationCondition, a kJSRelationConditionUndefined is returned if an exception is thrown.

<a id="discussion"></a>

## Discussion

Compares a JSValue with an unsigned 64-bit integer.

`left` is converted to an integer according to the rules specified by the JavaScript language then compared with `right`.

# JSValueCompareUInt64 (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```objectivec
JSRelationCondition JSValueCompareUInt64(JSContextRef ctx, JSValueRef left, uint64_t right, JSValueRef*exception);
```

## Parameters

- `ctx`: The execution context to use.
- `left`: The JSValue as the left operand.
- `right`: The uint64_t as the right operand.
- `exception`: A pointer to a JSValueRef in which to store an exception, if any. To reliable detect exception, initialize this to null before the call. Pass NULL if you do not care to store an exception.

<a id="return-value"></a>

## Return Value

A value of JSRelationCondition, a kJSRelationConditionUndefined is returned if an exception is thrown.

<a id="discussion"></a>

## Discussion

Compares a JSValue with an unsigned 64-bit integer.

`left` is converted to an integer according to the rules specified by the JavaScript language then compared with `right`.
