> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsregularexpression/regularexpressionwithpattern:options:error:](https://developer.apple.com/documentation/foundation/nsregularexpression/regularexpressionwithpattern:options:error:)

# regularExpressionWithPattern:options:error:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an NSRegularExpression instance with the specified regular expression pattern and options.

## Declaration

```objectivec
+ (NSRegularExpression *) regularExpressionWithPattern:(NSString *) pattern options:(NSRegularExpressionOptions) options error:(NSError **) error;
```

## Parameters

- `pattern`: The regular expression pattern to compile.
- `options`: The matching options. See [NSRegularExpressionOptions](options-swift.struct.md) for possible values. The values can be combined using the C-bitwise `OR` operator.
- `error`: An out value that returns any error encountered during initialization. Returns an `NSError` object if the regular expression pattern is invalid; otherwise returns `nil`.

<a id="return-value"></a>

## Return Value

An instance of `NSRegularExpression` for the specified regular expression and options.

## See Also

### Creating Regular Expressions

- [initWithPattern:options:error:](init%28pattern_options_%29.md): Returns an initialized NSRegularExpression instance with the specified regular expression pattern and options.
