> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexpression/init(forkeypath:)-1aqf5](https://developer.apple.com/documentation/foundation/nsexpression/init(forkeypath:)-1aqf5)

# init(forKeyPath:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an expression that invokes the value function with a specified key path.

## Declaration

```swift
init(forKeyPath keyPath: String)
```

## Parameters

- `keyPath`: The key path that the new expression should evaluate.

<a id="return-value"></a>

## Return Value

A new expression that invokes [value(forKeyPath:)](../../objectivec/nsobject-swift.class/value%28forkeypath_%29.md) with `keyPath`.

## See Also

### Creating an Expression for a Value

- [init(forConstantValue:)](init%28forconstantvalue_%29.md): Creates an expression that represents a specified constant value.
- [expressionForEvaluatedObject()](expressionforevaluatedobject%28%29.md): Creates an expression that represents the object you’re evaluating.
- [init(forVariable:)](init%28forvariable_%29.md): Creates an expression that extracts a value from the variable bindings dictionary for a specified key.
- [init(forKeyPath:)](init%28forkeypath_%29-98by.md): Creates an expression using a key path you specify.
- [expressionForAnyKey()](expressionforanykey%28%29.md): Creates an expression that represents any key for a Spotlight query.

# expressionForKeyPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an expression that invokes the value function with a specified key path.

## Declaration

```objectivec
+ (NSExpression *) expressionForKeyPath:(NSString *) keyPath;
```

## Parameters

- `keyPath`: The key path that the new expression should evaluate.

<a id="return-value"></a>

## Return Value

A new expression that invokes [valueForKeyPath:](../../objectivec/nsobject-swift.class/value%28forkeypath_%29.md) with `keyPath`.

## See Also

### Creating an Expression for a Value

- [expressionForConstantValue:](init%28forconstantvalue_%29.md): Creates an expression that represents a specified constant value.
- [expressionForEvaluatedObject](expressionforevaluatedobject%28%29.md): Creates an expression that represents the object you’re evaluating.
- [expressionForVariable:](init%28forvariable_%29.md): Creates an expression that extracts a value from the variable bindings dictionary for a specified key.
- [expressionForAnyKey](expressionforanykey%28%29.md): Creates an expression that represents any key for a Spotlight query.
