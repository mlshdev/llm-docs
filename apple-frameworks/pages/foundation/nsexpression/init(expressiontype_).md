> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexpression/init(expressiontype:)](https://developer.apple.com/documentation/foundation/nsexpression/init(expressiontype:))

# init(expressionType:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates the expression with the specified expression type.

## Declaration

```swift
init(expressionType type: NSExpression.ExpressionType)
```

## Parameters

- `type`: The type of the new expression, as defined by [NSExpression.ExpressionType](expressiontype-swift.enum.md).

<a id="return-value"></a>

## Return Value

An initialized `NSExpression` object of the type `type`.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for `NSExpression`.

## See Also

### Related Documentation

- [Predicate Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Predicates/AdditionalChapters/Introduction.html#//apple_ref/doc/uid/TP40001789)

### Creating an Expression

- [init(format:argumentArray:)](init%28format_argumentarray_%29.md): Creates the expression with the specified expression format and array of arguments.
- [init(format:arguments:)](init%28format_arguments_%29.md): Creates the expression with the specified expression format and arguments list.
- [init(format:\_:)](init%28format___%29.md): Creates the expression with the expression format and arguments list you specify.
- [init(coder:)](init%28coder_%29.md): Creates an expression by decoding from the coder you specify.

# initWithExpressionType: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates the expression with the specified expression type.

## Declaration

```objectivec
- (instancetype) initWithExpressionType:(NSExpressionType) type;
```

## Parameters

- `type`: The type of the new expression, as defined by [NSExpressionType](expressiontype-swift.enum.md).

<a id="return-value"></a>

## Return Value

An initialized `NSExpression` object of the type `type`.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for `NSExpression`.

## See Also

### Related Documentation

- [Predicate Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Predicates/AdditionalChapters/Introduction.html#//apple_ref/doc/uid/TP40001789)
- [expressionWithFormat:](expressionwithformat_.md): Creates the expression with the specified expression arguments.

### Creating an Expression

- [expressionWithFormat:](expressionwithformat_.md): Creates the expression with the specified expression arguments.
- [expressionWithFormat:argumentArray:](init%28format_argumentarray_%29.md): Creates the expression with the specified expression format and array of arguments.
- [expressionWithFormat:arguments:](init%28format_arguments_%29.md): Creates the expression with the specified expression format and arguments list.
- [initWithCoder:](init%28coder_%29.md): Creates an expression by decoding from the coder you specify.
