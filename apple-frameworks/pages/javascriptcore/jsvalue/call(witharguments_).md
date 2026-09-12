> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/call(witharguments:)](https://developer.apple.com/documentation/javascriptcore/jsvalue/call(witharguments:))

# call(withArguments:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Invokes the value as a JavaScript function.

## Declaration

```swift
func call(withArguments arguments: [Any]!) -> JSValue!
```

## Parameters

- `arguments`: The parameters to pass to the function. The objects in this array must be other [JSValue](../jsvalue.md) objects or objects that can be converted to JavaScript values using the methods listed in the Creating JavaScript Values section in [JSValue](../jsvalue.md).

<a id="return-value"></a>

## Return Value

The result of calling the value as a function, or `nil` if the value cannot be treated as a JavaScript function.

<a id="Discussion"></a>

## Discussion

In JavaScript, if a function does not explicitly return a value, it implicitly returns the value `undefined`—use the [isUndefined](isundefined.md) property to test for this result.

## See Also

### Working with Function and Constructor Values

- [construct(withArguments:)](construct%28witharguments_%29.md): Invokes the value as a JavaScript constructor.
- [invokeMethod(\_:withArguments:)](invokemethod%28__witharguments_%29.md): Calls the named JavaScript method on the value.

# callWithArguments: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Invokes the value as a JavaScript function.

## Declaration

```objectivec
- (JSValue *) callWithArguments:(NSArray *) arguments;
```

## Parameters

- `arguments`: The parameters to pass to the function. The objects in this array must be other [JSValue](../jsvalue.md) objects or objects that can be converted to JavaScript values using the methods listed in the Creating JavaScript Values section in [JSValue](../jsvalue.md).

<a id="return-value"></a>

## Return Value

The result of calling the value as a function, or `nil` if the value cannot be treated as a JavaScript function.

<a id="Discussion"></a>

## Discussion

In JavaScript, if a function does not explicitly return a value, it implicitly returns the value `undefined`—use the [isUndefined](isundefined.md) property to test for this result.

## See Also

### Working with Function and Constructor Values

- [constructWithArguments:](construct%28witharguments_%29.md): Invokes the value as a JavaScript constructor.
- [invokeMethod:withArguments:](invokemethod%28__witharguments_%29.md): Calls the named JavaScript method on the value.
