> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexpression/init(coder:)](https://developer.apple.com/documentation/foundation/nsexpression/init(coder:))

# init(coder:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an expression by decoding from the coder you specify.

## Declaration

```swift
init?(coder: NSCoder)
```

## Parameters

- `coder`: The coder to read data from.

## See Also

### Creating an Expression

- [init(expressionType:)](init%28expressiontype_%29.md): Creates the expression with the specified expression type.
- [init(format:argumentArray:)](init%28format_argumentarray_%29.md): Creates the expression with the specified expression format and array of arguments.
- [init(format:arguments:)](init%28format_arguments_%29.md): Creates the expression with the specified expression format and arguments list.
- [init(format:\_:)](init%28format___%29.md): Creates the expression with the expression format and arguments list you specify.

# initWithCoder: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an expression by decoding from the coder you specify.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: The coder to read data from.

## See Also

### Creating an Expression

- [initWithExpressionType:](init%28expressiontype_%29.md): Creates the expression with the specified expression type.
- [expressionWithFormat:](expressionwithformat_.md): Creates the expression with the specified expression arguments.
- [expressionWithFormat:argumentArray:](init%28format_argumentarray_%29.md): Creates the expression with the specified expression format and array of arguments.
- [expressionWithFormat:arguments:](init%28format_arguments_%29.md): Creates the expression with the specified expression format and arguments list.
