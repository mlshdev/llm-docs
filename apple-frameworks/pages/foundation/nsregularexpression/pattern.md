> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsregularexpression/pattern](https://developer.apple.com/documentation/foundation/nsregularexpression/pattern)

# pattern (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the regular expression pattern.

## Declaration

```swift
var pattern: String { get }
```

## See Also

### Related Documentation

- [init(pattern:options:)](init%28pattern_options_%29.md): Returns an initialized NSRegularExpression instance with the specified regular expression pattern and options.

### Getting the Regular Expression and Options

- [options](options-swift.property.md): Returns the options used when the regular expression option was created.
- [numberOfCaptureGroups](numberofcapturegroups.md): Returns the number of capture groups in the regular expression.

# pattern (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the regular expression pattern.

## Declaration

```objectivec
@property (copy, readonly) NSString * pattern;
```

## See Also

### Related Documentation

- [regularExpressionWithPattern:options:error:](regularexpressionwithpattern_options_error_.md): Creates an NSRegularExpression instance with the specified regular expression pattern and options.
- [initWithPattern:options:error:](init%28pattern_options_%29.md): Returns an initialized NSRegularExpression instance with the specified regular expression pattern and options.

### Getting the Regular Expression and Options

- [options](options-swift.property.md): Returns the options used when the regular expression option was created.
- [numberOfCaptureGroups](numberofcapturegroups.md): Returns the number of capture groups in the regular expression.
