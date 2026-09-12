> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsregularexpression/options-swift.property](https://developer.apple.com/documentation/foundation/nsregularexpression/options-swift.property)

# options (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the options used when the regular expression option was created.

## Declaration

```swift
var options: NSRegularExpression.Options { get }
```

<a id="Discussion"></a>

## Discussion

The options property specifies aspects of the regular expression matching that are always used when matching the regular expression. For example, if the expression is case sensitive, allows comments, ignores metacharacters, etc. See [NSRegularExpression.Options](options-swift.struct.md) for a complete discussion of the possible constants and their meanings.

## See Also

### Related Documentation

- [init(pattern:options:)](init%28pattern_options_%29.md): Returns an initialized NSRegularExpression instance with the specified regular expression pattern and options.

### Getting the Regular Expression and Options

- [pattern](pattern.md): Returns the regular expression pattern.
- [numberOfCaptureGroups](numberofcapturegroups.md): Returns the number of capture groups in the regular expression.

# options (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the options used when the regular expression option was created.

## Declaration

```objectivec
@property (readonly) NSRegularExpressionOptions options;
```

<a id="Discussion"></a>

## Discussion

The options property specifies aspects of the regular expression matching that are always used when matching the regular expression. For example, if the expression is case sensitive, allows comments, ignores metacharacters, etc. See [NSRegularExpressionOptions](options-swift.struct.md) for a complete discussion of the possible constants and their meanings.

## See Also

### Related Documentation

- [regularExpressionWithPattern:options:error:](regularexpressionwithpattern_options_error_.md): Creates an NSRegularExpression instance with the specified regular expression pattern and options.
- [initWithPattern:options:error:](init%28pattern_options_%29.md): Returns an initialized NSRegularExpression instance with the specified regular expression pattern and options.

### Getting the Regular Expression and Options

- [pattern](pattern.md): Returns the regular expression pattern.
- [numberOfCaptureGroups](numberofcapturegroups.md): Returns the number of capture groups in the regular expression.
