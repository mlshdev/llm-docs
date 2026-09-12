> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexpression/init(forfunction:selectorname:arguments:)](https://developer.apple.com/documentation/foundation/nsexpression/init(forfunction:selectorname:arguments:))

# init(forFunction:selectorName:arguments:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an expression that returns the result of invoking a selector with a specified name using specified arguments.

## Declaration

```swift
init(forFunction target: NSExpression, selectorName name: String, arguments parameters: [Any]?)
```

## Parameters

- `target`: An `NSExpression` object which will evaluate an object on which the selector identified by `name` may be invoked.
- `name`: The name of the method to be invoked.
- `parameters`: An array containing `NSExpression` objects which can be evaluated to provide parameters for the method specified by `name`.

<a id="return-value"></a>

## Return Value

An expression which will return the result of invoking the selector named `name` on the result of evaluating the target expression with the parameters specified by evaluating the elements of `parameters`.

<a id="Discussion"></a>

## Discussion

See the description of [init(forFunction:arguments:)](init%28forfunction_arguments_%29.md) for examples of how to construct the parameter array.

<a id="Special-Considerations"></a>

### Special Considerations

This method throws an exception immediately if the selector is unknown; it throws at runtime if the parameters are incorrect.

This expression effectively allows your application to invoke any method on any object it can navigate to at runtime. You must consider the security implications of this type of evaluation.

## See Also

### Creating an Expression for a Function

- [init(forFunction:arguments:)](init%28forfunction_arguments_%29.md): Creates an expression that invokes one of the predefined functions.

# expressionForFunction:selectorName:arguments: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an expression that returns the result of invoking a selector with a specified name using specified arguments.

## Declaration

```objectivec
+ (NSExpression *) expressionForFunction:(NSExpression *) target selectorName:(NSString *) name arguments:(NSArray *) parameters;
```

## Parameters

- `target`: An `NSExpression` object which will evaluate an object on which the selector identified by `name` may be invoked.
- `name`: The name of the method to be invoked.
- `parameters`: An array containing `NSExpression` objects which can be evaluated to provide parameters for the method specified by `name`.

<a id="return-value"></a>

## Return Value

An expression which will return the result of invoking the selector named `name` on the result of evaluating the target expression with the parameters specified by evaluating the elements of `parameters`.

<a id="Discussion"></a>

## Discussion

See the description of [expressionForFunction:arguments:](init%28forfunction_arguments_%29.md) for examples of how to construct the parameter array.

<a id="Special-Considerations"></a>

### Special Considerations

This method throws an exception immediately if the selector is unknown; it throws at runtime if the parameters are incorrect.

This expression effectively allows your application to invoke any method on any object it can navigate to at runtime. You must consider the security implications of this type of evaluation.

## See Also

### Creating an Expression for a Function

- [expressionForFunction:arguments:](init%28forfunction_arguments_%29.md): Creates an expression that invokes one of the predefined functions.
