> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/init(newpromiseresolvedwithresult:in:)](https://developer.apple.com/documentation/javascriptcore/jsvalue/init(newpromiseresolvedwithresult:in:))

# init(newPromiseResolvedWithResult:in:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 9.0+ · visionOS 1.0+

Creates a resolved promise object with the specified value.

## Declaration

```swift
init!(newPromiseResolvedWithResult result: Any!, in context: JSContext!)
```

## Parameters

- `result`: The result value to pass to any reactions.
- `context`: The [JSContext](../jscontext.md) the resulting [JSValue](../jsvalue.md) belongs to.

<a id="return-value"></a>

## Return Value

A [JSValue](../jsvalue.md) that represents a new promise JavaScript object.

<a id="Discussion"></a>

## Discussion

This method is equivalent to calling the following:

```objc
[JSValue valueWithNewPromiseFromExecutor:^(JSValue *resolve, JSValue *reject) { 
    [resolve callWithArguments:@[result]]; 
} inContext:context];
```

## See Also

### Creating JavaScript Values

- [init(object:in:)](init%28object_in_%29.md): Creates a JavaScript value by converting the specified native object.
- [init(bool:in:)](init%28bool_in_%29.md): Creates a JavaScript representation of the specified Boolean value.
- [init(double:in:)](init%28double_in_%29.md): Creates a JavaScript representation of the specified floating-point value.
- [init(int32:in:)](init%28int32_in_%29.md): Creates a JavaScript representation of the specified signed integer value.
- [init(uInt32:in:)](init%28uint32_in_%29.md): Creates a JavaScript representation of the specified unsigned integer value.
- [init(newObjectIn:)](init%28newobjectin_%29.md): Creates a new, empty JavaScript object value.
- [init(newArrayIn:)](init%28newarrayin_%29.md): Creates a new, empty JavaScript array value.
- [init(newRegularExpressionFromPattern:flags:in:)](init%28newregularexpressionfrompattern_flags_in_%29.md): Creates a JavaScript regular expression value from the specified pattern.
- [init(newErrorFromMessage:in:)](init%28newerrorfrommessage_in_%29.md): Creates a JavaScript error value with the specified error message.
- [init(undefinedIn:)](init%28undefinedin_%29.md): Creates a JavaScript `undefined` value.
- [init(nullIn:)](init%28nullin_%29.md): Creates a JavaScript `null` value.
- [init(point:inContext:)](init%28point_incontext_%29.md): Creates a JavaScript representation of the specified point.
- [init(range:inContext:)](init%28range_incontext_%29.md): Creates a JavaScript representation of the specified range.
- [init(rect:inContext:)](init%28rect_incontext_%29.md): Creates a JavaScript representation of the specified rectangle.
- [init(size:inContext:)](init%28size_incontext_%29.md): Creates a JavaScript representation of the specified width and height.

# valueWithNewPromiseResolvedWithResult:inContext: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 9.0+ · visionOS 1.0+

Creates a resolved promise object with the specified value.

## Declaration

```objectivec
+ (JSValue *) valueWithNewPromiseResolvedWithResult:(id) result inContext:(JSContext *) context;
```

## Parameters

- `result`: The result value to pass to any reactions.
- `context`: The [JSContext](../jscontext.md) the resulting [JSValue](../jsvalue.md) belongs to.

<a id="return-value"></a>

## Return Value

A [JSValue](../jsvalue.md) that represents a new promise JavaScript object.

<a id="Discussion"></a>

## Discussion

This method is equivalent to calling the following:

```objc
[JSValue valueWithNewPromiseFromExecutor:^(JSValue *resolve, JSValue *reject) { 
    [resolve callWithArguments:@[result]]; 
} inContext:context];
```

## See Also

### Creating JavaScript Values

- [valueWithObject:inContext:](init%28object_in_%29.md): Creates a JavaScript value by converting the specified native object.
- [valueWithBool:inContext:](init%28bool_in_%29.md): Creates a JavaScript representation of the specified Boolean value.
- [valueWithDouble:inContext:](init%28double_in_%29.md): Creates a JavaScript representation of the specified floating-point value.
- [valueWithInt32:inContext:](init%28int32_in_%29.md): Creates a JavaScript representation of the specified signed integer value.
- [valueWithUInt32:inContext:](init%28uint32_in_%29.md): Creates a JavaScript representation of the specified unsigned integer value.
- [valueWithNewObjectInContext:](init%28newobjectin_%29.md): Creates a new, empty JavaScript object value.
- [valueWithNewArrayInContext:](init%28newarrayin_%29.md): Creates a new, empty JavaScript array value.
- [valueWithNewRegularExpressionFromPattern:flags:inContext:](init%28newregularexpressionfrompattern_flags_in_%29.md): Creates a JavaScript regular expression value from the specified pattern.
- [valueWithNewErrorFromMessage:inContext:](init%28newerrorfrommessage_in_%29.md): Creates a JavaScript error value with the specified error message.
- [valueWithUndefinedInContext:](init%28undefinedin_%29.md): Creates a JavaScript `undefined` value.
- [valueWithNullInContext:](init%28nullin_%29.md): Creates a JavaScript `null` value.
- [valueWithNewSymbolFromDescription:inContext:](init%28newsymbolfromdescription_in_%29.md): Creates a unique symbol object.
- [valueWithNewPromiseInContext:fromExecutor:](init%28newpromisein_fromexecutor_%29.md): Creates a promise object using the specified executor callback.
- [valueWithNewPromiseRejectedWithReason:inContext:](init%28newpromiserejectedwithreason_in_%29.md): Creates a rejected promise object with the specified value.
