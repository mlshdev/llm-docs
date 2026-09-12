> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexpression/init(format:arguments:)](https://developer.apple.com/documentation/foundation/nsexpression/init(format:arguments:))

# init(format:arguments:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates the expression with the specified expression format and arguments list.

## Declaration

```swift
init(format expressionFormat: String, arguments argList: CVaListPointer)
```

## Parameters

- `expressionFormat`: The expression format.
- `argList`: A list of arguments to be inserted into the `expressionFormat` string. The argument list is terminated by `nil`.

<a id="return-value"></a>

## Return Value

An initialized `NSExpression` object with the specified arguments.

## See Also

### Creating an Expression

- [init(expressionType:)](init%28expressiontype_%29.md): Creates the expression with the specified expression type.
- [init(format:argumentArray:)](init%28format_argumentarray_%29.md): Creates the expression with the specified expression format and array of arguments.
- [init(format:\_:)](init%28format___%29.md): Creates the expression with the expression format and arguments list you specify.
- [init(coder:)](init%28coder_%29.md): Creates an expression by decoding from the coder you specify.

# expressionWithFormat:arguments: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates the expression with the specified expression format and arguments list.

## Declaration

```objectivec
+ (NSExpression *) expressionWithFormat:(NSString *) expressionFormat arguments:(va_list) argList;
```

## Parameters

- `expressionFormat`: The expression format.
- `argList`: A list of arguments to be inserted into the `expressionFormat` string. The argument list is terminated by `nil`.

<a id="return-value"></a>

## Return Value

An initialized `NSExpression` object with the specified arguments.

## See Also

### Related Documentation

- [expressionWithFormat:](expressionwithformat_.md): Creates the expression with the specified expression arguments.

### Creating an Expression

- [initWithExpressionType:](init%28expressiontype_%29.md): Creates the expression with the specified expression type.
- [expressionWithFormat:](expressionwithformat_.md): Creates the expression with the specified expression arguments.
- [expressionWithFormat:argumentArray:](init%28format_argumentarray_%29.md): Creates the expression with the specified expression format and array of arguments.
- [initWithCoder:](init%28coder_%29.md): Creates an expression by decoding from the coder you specify.
