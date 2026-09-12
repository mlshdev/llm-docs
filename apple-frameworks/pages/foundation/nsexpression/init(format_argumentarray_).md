> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexpression/init(format:argumentarray:)](https://developer.apple.com/documentation/foundation/nsexpression/init(format:argumentarray:))

# init(format:argumentArray:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates the expression with the specified expression format and array of arguments.

## Declaration

```swift
init(format expressionFormat: String, argumentArray arguments: [Any])
```

## Parameters

- `expressionFormat`: The expression format.
- `arguments`: An array of arguments to be used with the `expressionFormat` string.

<a id="return-value"></a>

## Return Value

An initialized `NSExpression` object with the specified arguments.

## See Also

### Creating an Expression

- [init(expressionType:)](init%28expressiontype_%29.md): Creates the expression with the specified expression type.
- [init(format:arguments:)](init%28format_arguments_%29.md): Creates the expression with the specified expression format and arguments list.
- [init(format:\_:)](init%28format___%29.md): Creates the expression with the expression format and arguments list you specify.
- [init(coder:)](init%28coder_%29.md): Creates an expression by decoding from the coder you specify.

# expressionWithFormat:argumentArray: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates the expression with the specified expression format and array of arguments.

## Declaration

```objectivec
+ (NSExpression *) expressionWithFormat:(NSString *) expressionFormat argumentArray:(NSArray *) arguments;
```

## Parameters

- `expressionFormat`: The expression format.
- `arguments`: An array of arguments to be used with the `expressionFormat` string.

<a id="return-value"></a>

## Return Value

An initialized `NSExpression` object with the specified arguments.

## See Also

### Related Documentation

- [expressionWithFormat:](expressionwithformat_.md): Creates the expression with the specified expression arguments.

### Creating an Expression

- [initWithExpressionType:](init%28expressiontype_%29.md): Creates the expression with the specified expression type.
- [expressionWithFormat:](expressionwithformat_.md): Creates the expression with the specified expression arguments.
- [expressionWithFormat:arguments:](init%28format_arguments_%29.md): Creates the expression with the specified expression format and arguments list.
- [initWithCoder:](init%28coder_%29.md): Creates an expression by decoding from the coder you specify.
