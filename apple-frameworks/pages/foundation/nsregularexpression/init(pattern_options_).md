> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsregularexpression/init(pattern:options:)](https://developer.apple.com/documentation/foundation/nsregularexpression/init(pattern:options:))

# init(pattern:options:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an initialized NSRegularExpression instance with the specified regular expression pattern and options.

## Declaration

```swift
init(pattern: String, options: NSRegularExpression.Options = []) throws
```

## Parameters

- `pattern`: The regular expression pattern to compile.
- `options`: The regular expression options that are applied to the expression during matching. See [NSRegularExpression.Options](options-swift.struct.md) for possible values.

<a id="return-value"></a>

## Return Value

An instance of `NSRegularExpression` for the specified regular expression and options.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this API is imported as an initializer and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

# initWithPattern:options:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an initialized NSRegularExpression instance with the specified regular expression pattern and options.

## Declaration

```objectivec
- (instancetype) initWithPattern:(NSString *) pattern options:(NSRegularExpressionOptions) options error:(NSError **) error;
```

## Parameters

- `pattern`: The regular expression pattern to compile.
- `options`: The regular expression options that are applied to the expression during matching. See [NSRegularExpressionOptions](options-swift.struct.md) for possible values.
- `error`: An out value that returns any error encountered during initialization. Returns an `NSError` object if the regular expression pattern is invalid; otherwise returns `nil`.firstMatchInString:options:range

<a id="return-value"></a>

## Return Value

An instance of `NSRegularExpression` for the specified regular expression and options. On failure, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this API is imported as an initializer and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [regularExpressionWithPattern:options:error:](regularexpressionwithpattern_options_error_.md): Creates an NSRegularExpression instance with the specified regular expression pattern and options.

### Creating Regular Expressions

- [regularExpressionWithPattern:options:error:](regularexpressionwithpattern_options_error_.md): Creates an NSRegularExpression instance with the specified regular expression pattern and options.
