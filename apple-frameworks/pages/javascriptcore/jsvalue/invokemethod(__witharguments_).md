> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/invokemethod(_:witharguments:)](https://developer.apple.com/documentation/javascriptcore/jsvalue/invokemethod(_:witharguments:))

# invokeMethod(\_:withArguments:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Calls the named JavaScript method on the value.

## Declaration

```swift
func invokeMethod(_ method: String!, withArguments arguments: [Any]!) -> JSValue!
```

## Parameters

- `method`: The name of a method on the value; that is, of a field whose contents are a function value.
- `arguments`: The parameters to pass to the method. The objects in this array must be other [JSValue](../jsvalue.md) objects or objects that can be converted to JavaScript values using the methods listed in the Creating JavaScript Values section in [JSValue](../jsvalue.md).

<a id="return-value"></a>

## Return Value

The result of calling the value as a constructor, or `nil` if the value cannot be treated as a JavaScript constructor.

<a id="Discussion"></a>

## Discussion

Calling this Objective-C method first uses the [forProperty(\_:)](forproperty%28__%29.md) method to look up the named field of the JavaScript value. Then, JavaScriptCore treats that field’s contents as a JavaScript function and sets the JavaScript `this` keyword to refer to this [JSValue](../jsvalue.md) instance.

## See Also

### Working with Function and Constructor Values

- [call(withArguments:)](call%28witharguments_%29.md): Invokes the value as a JavaScript function.
- [construct(withArguments:)](construct%28witharguments_%29.md): Invokes the value as a JavaScript constructor.

# invokeMethod:withArguments: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Calls the named JavaScript method on the value.

## Declaration

```objectivec
- (JSValue *) invokeMethod:(NSString *) method withArguments:(NSArray *) arguments;
```

## Parameters

- `method`: The name of a method on the value; that is, of a field whose contents are a function value.
- `arguments`: The parameters to pass to the method. The objects in this array must be other [JSValue](../jsvalue.md) objects or objects that can be converted to JavaScript values using the methods listed in the Creating JavaScript Values section in [JSValue](../jsvalue.md).

<a id="return-value"></a>

## Return Value

The result of calling the value as a constructor, or `nil` if the value cannot be treated as a JavaScript constructor.

<a id="Discussion"></a>

## Discussion

Calling this Objective-C method first uses the [valueForProperty:](forproperty%28__%29.md) method to look up the named field of the JavaScript value. Then, JavaScriptCore treats that field’s contents as a JavaScript function and sets the JavaScript `this` keyword to refer to this [JSValue](../jsvalue.md) instance.

## See Also

### Working with Function and Constructor Values

- [callWithArguments:](call%28witharguments_%29.md): Invokes the value as a JavaScript function.
- [constructWithArguments:](construct%28witharguments_%29.md): Invokes the value as a JavaScript constructor.
