> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexpression/expressionwithformat:](https://developer.apple.com/documentation/foundation/nsexpression/expressionwithformat:)

# expressionWithFormat:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates the expression with the specified expression arguments.

## Declaration

```objectivec
+ (NSExpression *) expressionWithFormat:(NSString *) expressionFormat;
```

## Parameters

- `expressionFormat`: The expression format.

<a id="return-value"></a>

## Return Value

An initialized `NSExpression` object with the specified format.

<a id="discussion"></a>

## Discussion

After `expressionFormat`, pass a comma-separated list of arguments to substitute into format as variadic arguments. The list is terminated by `nil`.

## See Also

### Creating an Expression

- [initWithExpressionType:](init%28expressiontype_%29.md): Creates the expression with the specified expression type.
- [expressionWithFormat:argumentArray:](init%28format_argumentarray_%29.md): Creates the expression with the specified expression format and array of arguments.
- [expressionWithFormat:arguments:](init%28format_arguments_%29.md): Creates the expression with the specified expression format and arguments list.
- [initWithCoder:](init%28coder_%29.md): Creates an expression by decoding from the coder you specify.
