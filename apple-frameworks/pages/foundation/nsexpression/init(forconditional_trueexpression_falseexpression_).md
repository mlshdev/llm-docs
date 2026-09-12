> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexpression/init(forconditional:trueexpression:falseexpression:)](https://developer.apple.com/documentation/foundation/nsexpression/init(forconditional:trueexpression:falseexpression:))

# init(forConditional:trueExpression:falseExpression:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an expression that returns a result, depending on the value of predicate.

## Declaration

```swift
init(forConditional predicate: NSPredicate, trueExpression: NSExpression, falseExpression: NSExpression)
```

## Parameters

- `predicate`: The predicate for determining whether the element belongs in the result collection.
- `trueExpression`: The expression for evaluation when the predicate evaluates to `true`.
- `falseExpression`: The expression for evaluation when the predicate evaluates to `false`.

# expressionForConditional:trueExpression:falseExpression: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an expression that returns a result, depending on the value of predicate.

## Declaration

```objectivec
+ (NSExpression *) expressionForConditional:(NSPredicate *) predicate trueExpression:(NSExpression *) trueExpression falseExpression:(NSExpression *) falseExpression;
```

## Parameters

- `predicate`: The predicate for determining whether the element belongs in the result collection.
- `trueExpression`: The expression for evaluation when the predicate evaluates to `true`.
- `falseExpression`: The expression for evaluation when the predicate evaluates to `false`.
