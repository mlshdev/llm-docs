> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexpression/init(forvariable:)](https://developer.apple.com/documentation/foundation/nsexpression/init(forvariable:))

# init(forVariable:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an expression that extracts a value from the variable bindings dictionary for a specified key.

## Declaration

```swift
init(forVariable string: String)
```

## Parameters

- `string`: The key for the variable to extract from the variable bindings dictionary.

<a id="return-value"></a>

## Return Value

A new expression that extracts from the variable bindings dictionary the value for the key `string`.

## See Also

### Creating an Expression for a Value

- [init(forConstantValue:)](init%28forconstantvalue_%29.md): Creates an expression that represents a specified constant value.
- [expressionForEvaluatedObject()](expressionforevaluatedobject%28%29.md): Creates an expression that represents the object you’re evaluating.
- [init(forKeyPath:)](init%28forkeypath_%29-1aqf5.md): Creates an expression that invokes the value function with a specified key path.
- [init(forKeyPath:)](init%28forkeypath_%29-98by.md): Creates an expression using a key path you specify.
- [expressionForAnyKey()](expressionforanykey%28%29.md): Creates an expression that represents any key for a Spotlight query.

# expressionForVariable: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an expression that extracts a value from the variable bindings dictionary for a specified key.

## Declaration

```objectivec
+ (NSExpression *) expressionForVariable:(NSString *) string;
```

## Parameters

- `string`: The key for the variable to extract from the variable bindings dictionary.

<a id="return-value"></a>

## Return Value

A new expression that extracts from the variable bindings dictionary the value for the key `string`.

## See Also

### Creating an Expression for a Value

- [expressionForConstantValue:](init%28forconstantvalue_%29.md): Creates an expression that represents a specified constant value.
- [expressionForEvaluatedObject](expressionforevaluatedobject%28%29.md): Creates an expression that represents the object you’re evaluating.
- [expressionForKeyPath:](init%28forkeypath_%29-1aqf5.md): Creates an expression that invokes the value function with a specified key path.
- [expressionForAnyKey](expressionforanykey%28%29.md): Creates an expression that represents any key for a Spotlight query.
