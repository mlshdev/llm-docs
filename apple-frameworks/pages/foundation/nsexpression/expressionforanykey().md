> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexpression/expressionforanykey()](https://developer.apple.com/documentation/foundation/nsexpression/expressionforanykey())

# expressionForAnyKey() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an expression that represents any key for a Spotlight query.

## Declaration

```swift
class func expressionForAnyKey() -> NSExpression
```

<a id="return-value"></a>

## Return Value

A new expression that represents any key for a Spotlight query.

## See Also

### Creating an Expression for a Value

- [init(forConstantValue:)](init%28forconstantvalue_%29.md): Creates an expression that represents a specified constant value.
- [expressionForEvaluatedObject()](expressionforevaluatedobject%28%29.md): Creates an expression that represents the object you’re evaluating.
- [init(forKeyPath:)](init%28forkeypath_%29-1aqf5.md): Creates an expression that invokes the value function with a specified key path.
- [init(forVariable:)](init%28forvariable_%29.md): Creates an expression that extracts a value from the variable bindings dictionary for a specified key.
- [init(forKeyPath:)](init%28forkeypath_%29-98by.md): Creates an expression using a key path you specify.

# expressionForAnyKey (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an expression that represents any key for a Spotlight query.

## Declaration

```objectivec
+ (NSExpression *) expressionForAnyKey;
```

<a id="return-value"></a>

## Return Value

A new expression that represents any key for a Spotlight query.

## See Also

### Creating an Expression for a Value

- [expressionForConstantValue:](init%28forconstantvalue_%29.md): Creates an expression that represents a specified constant value.
- [expressionForEvaluatedObject](expressionforevaluatedobject%28%29.md): Creates an expression that represents the object you’re evaluating.
- [expressionForKeyPath:](init%28forkeypath_%29-1aqf5.md): Creates an expression that invokes the value function with a specified key path.
- [expressionForVariable:](init%28forvariable_%29.md): Creates an expression that extracts a value from the variable bindings dictionary for a specified key.
