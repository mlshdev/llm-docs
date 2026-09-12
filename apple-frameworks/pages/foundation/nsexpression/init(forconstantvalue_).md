> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexpression/init(forconstantvalue:)](https://developer.apple.com/documentation/foundation/nsexpression/init(forconstantvalue:))

# init(forConstantValue:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an expression that represents a specified constant value.

## Declaration

```swift
init(forConstantValue obj: Any?)
```

## Parameters

- `obj`: The constant value the new expression is to represent.

<a id="return-value"></a>

## Return Value

A new expression that represents the constant value, `obj`.

## See Also

### Creating an Expression for a Value

- [expressionForEvaluatedObject()](expressionforevaluatedobject%28%29.md): Creates an expression that represents the object you’re evaluating.
- [init(forKeyPath:)](init%28forkeypath_%29-1aqf5.md): Creates an expression that invokes the value function with a specified key path.
- [init(forVariable:)](init%28forvariable_%29.md): Creates an expression that extracts a value from the variable bindings dictionary for a specified key.
- [init(forKeyPath:)](init%28forkeypath_%29-98by.md): Creates an expression using a key path you specify.
- [expressionForAnyKey()](expressionforanykey%28%29.md): Creates an expression that represents any key for a Spotlight query.

# expressionForConstantValue: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an expression that represents a specified constant value.

## Declaration

```objectivec
+ (NSExpression *) expressionForConstantValue:(id) obj;
```

## Parameters

- `obj`: The constant value the new expression is to represent.

<a id="return-value"></a>

## Return Value

A new expression that represents the constant value, `obj`.

## See Also

### Creating an Expression for a Value

- [expressionForEvaluatedObject](expressionforevaluatedobject%28%29.md): Creates an expression that represents the object you’re evaluating.
- [expressionForKeyPath:](init%28forkeypath_%29-1aqf5.md): Creates an expression that invokes the value function with a specified key path.
- [expressionForVariable:](init%28forvariable_%29.md): Creates an expression that extracts a value from the variable bindings dictionary for a specified key.
- [expressionForAnyKey](expressionforanykey%28%29.md): Creates an expression that represents any key for a Spotlight query.
