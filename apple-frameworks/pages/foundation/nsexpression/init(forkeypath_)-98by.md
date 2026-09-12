> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexpression/init(forkeypath:)-98by](https://developer.apple.com/documentation/foundation/nsexpression/init(forkeypath:)-98by)

# init(forKeyPath:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an expression using a key path you specify.

## Declaration

```swift
convenience init<Root, Value>(forKeyPath keyPath: KeyPath<Root, Value>)
```

## Parameters

- `keyPath`: The key path that the new expression evaluates.

## See Also

### Creating an Expression for a Value

- [init(forConstantValue:)](init%28forconstantvalue_%29.md): Creates an expression that represents a specified constant value.
- [expressionForEvaluatedObject()](expressionforevaluatedobject%28%29.md): Creates an expression that represents the object you’re evaluating.
- [init(forKeyPath:)](init%28forkeypath_%29-1aqf5.md): Creates an expression that invokes the value function with a specified key path.
- [init(forVariable:)](init%28forvariable_%29.md): Creates an expression that extracts a value from the variable bindings dictionary for a specified key.
- [expressionForAnyKey()](expressionforanykey%28%29.md): Creates an expression that represents any key for a Spotlight query.
