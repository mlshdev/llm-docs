> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/personnamecomponentsformatter/style-swift.enum](https://developer.apple.com/documentation/foundation/personnamecomponentsformatter/style-swift.enum)

# PersonNameComponentsFormatter.Style (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The formatting styles for person name components.

## Declaration

```swift
enum Style
```

## Topics

### Constants

- [PersonNameComponentsFormatter.Style.default](style-swift.enum/default.md)
- [PersonNameComponentsFormatter.Style.short](style-swift.enum/short.md)
- [PersonNameComponentsFormatter.Style.medium](style-swift.enum/medium.md)
- [PersonNameComponentsFormatter.Style.long](style-swift.enum/long.md)
- [PersonNameComponentsFormatter.Style.abbreviated](style-swift.enum/abbreviated.md)

### Initializers

- [init(rawValue:)](style-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [PersonNameComponentsFormatter.Options](options.md): Options for formatting person name components.
- [Attributed String Key](../attributed-string-key.md): This constant is used as a key for person name component attributes in attributed strings returned by the [annotatedString(from:)](annotatedstring%28from_%29.md) method
- [Attributed String Components](../attributed-string-components.md): These constants are used to identify individual components of attributed strings returned by the [annotatedString(from:)](annotatedstring%28from_%29.md) method.
- [Component Delimiter](../component-delimiter.md): This constant defines the delimiter used to separate name components.

# NSPersonNameComponentsFormatterStyle (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The formatting styles for person name components.

## Declaration

```objectivec
enum NSPersonNameComponentsFormatterStyle : NSInteger;
```

## Topics

### Constants

- [NSPersonNameComponentsFormatterStyleDefault](style-swift.enum/default.md)
- [NSPersonNameComponentsFormatterStyleShort](style-swift.enum/short.md)
- [NSPersonNameComponentsFormatterStyleMedium](style-swift.enum/medium.md)
- [NSPersonNameComponentsFormatterStyleLong](style-swift.enum/long.md)
- [NSPersonNameComponentsFormatterStyleAbbreviated](style-swift.enum/abbreviated.md)

## See Also

### Constants

- [NSPersonNameComponentsFormatterOptions](options.md): Options for formatting person name components.
- [Attributed String Key](../attributed-string-key.md): This constant is used as a key for person name component attributes in attributed strings returned by the [annotatedStringFromPersonNameComponents:](annotatedstring%28from_%29.md) method
- [Attributed String Components](../attributed-string-components.md): These constants are used to identify individual components of attributed strings returned by the [annotatedStringFromPersonNameComponents:](annotatedstring%28from_%29.md) method.
- [Component Delimiter](../component-delimiter.md): This constant defines the delimiter used to separate name components.
