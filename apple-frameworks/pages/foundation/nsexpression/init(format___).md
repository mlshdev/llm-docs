> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexpression/init(format:_:)](https://developer.apple.com/documentation/foundation/nsexpression/init(format:_:))

# init(format:\_:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates the expression with the expression format and arguments list you specify.

## Declaration

```swift
convenience init(format expressionFormat: String, _ args: any CVarArg...)
```

## Parameters

- `expressionFormat`: The expression format.
- `args`: A list of arguments to insert into the `expressionFormat` string.

## See Also

### Creating an Expression

- [init(expressionType:)](init%28expressiontype_%29.md): Creates the expression with the specified expression type.
- [init(format:argumentArray:)](init%28format_argumentarray_%29.md): Creates the expression with the specified expression format and array of arguments.
- [init(format:arguments:)](init%28format_arguments_%29.md): Creates the expression with the specified expression format and arguments list.
- [init(coder:)](init%28coder_%29.md): Creates an expression by decoding from the coder you specify.
