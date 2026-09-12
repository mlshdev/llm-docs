> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/construct(witharguments:)](https://developer.apple.com/documentation/javascriptcore/jsvalue/construct(witharguments:))

# construct(withArguments:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Invokes the value as a JavaScript constructor.

## Declaration

```swift
func construct(withArguments arguments: [Any]!) -> JSValue!
```

## Parameters

- `arguments`: The parameters to pass to the constructor. The objects in this array must be other [JSValue](../jsvalue.md) objects or objects that can be converted to JavaScript values using the methods listed in Creating JavaScript Values.

<a id="return-value"></a>

## Return Value

The result of calling the value as a constructor, or `nil` if the value cannot be treated as a JavaScript constructor.

<a id="Discussion"></a>

## Discussion

Calling a constructor is equivalent to using the `new` keyword in JavaScript.

## See Also

### Working with Function and Constructor Values

- [call(withArguments:)](call%28witharguments_%29.md): Invokes the value as a JavaScript function.
- [invokeMethod(\_:withArguments:)](invokemethod%28__witharguments_%29.md): Calls the named JavaScript method on the value.

# constructWithArguments: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Invokes the value as a JavaScript constructor.

## Declaration

```objectivec
- (JSValue *) constructWithArguments:(NSArray *) arguments;
```

## Parameters

- `arguments`: The parameters to pass to the constructor. The objects in this array must be other [JSValue](../jsvalue.md) objects or objects that can be converted to JavaScript values using the methods listed in Creating JavaScript Values.

<a id="return-value"></a>

## Return Value

The result of calling the value as a constructor, or `nil` if the value cannot be treated as a JavaScript constructor.

<a id="Discussion"></a>

## Discussion

Calling a constructor is equivalent to using the `new` keyword in JavaScript.

## See Also

### Working with Function and Constructor Values

- [callWithArguments:](call%28witharguments_%29.md): Invokes the value as a JavaScript function.
- [invokeMethod:withArguments:](invokemethod%28__witharguments_%29.md): Calls the named JavaScript method on the value.
