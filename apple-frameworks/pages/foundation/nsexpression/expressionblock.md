> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexpression/expressionblock](https://developer.apple.com/documentation/foundation/nsexpression/expressionblock)

# expressionBlock (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The block that executes to evaluate the expression.

## Declaration

```swift
var expressionBlock: (Any?, [NSExpression], NSMutableDictionary?) -> Any { get }
```

## See Also

### Related Documentation

- [init(block:arguments:)](init%28block_arguments_%29.md): Creates an expression object that uses the block for evaluating objects.

# expressionBlock (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The block that executes to evaluate the expression.

## Declaration

```objectivec
@property (copy, readonly) id (^expressionBlock)(id , NSArray<NSExpression *> *, NSMutableDictionary *);
```

## See Also

### Related Documentation

- [expressionForBlock:arguments:](init%28block_arguments_%29.md): Creates an expression object that uses the block for evaluating objects.
