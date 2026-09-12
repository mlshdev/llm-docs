> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/personnamecomponentsformatter/options](https://developer.apple.com/documentation/foundation/personnamecomponentsformatter/options)

# PersonNameComponentsFormatter.Options (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for formatting person name components.

## Declaration

```swift
struct Options
```

## Topics

### Constants

- [phonetic](options/phonetic.md): The formatter should format the component object’s `phoneticRepresentation` components instead of its own components.

### Initializers

- [init(rawValue:)](options/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [PersonNameComponentsFormatter.Style](style-swift.enum.md): The formatting styles for person name components.
- [Attributed String Key](../attributed-string-key.md): This constant is used as a key for person name component attributes in attributed strings returned by the [annotatedString(from:)](annotatedstring%28from_%29.md) method
- [Attributed String Components](../attributed-string-components.md): These constants are used to identify individual components of attributed strings returned by the [annotatedString(from:)](annotatedstring%28from_%29.md) method.
- [Component Delimiter](../component-delimiter.md): This constant defines the delimiter used to separate name components.

# NSPersonNameComponentsFormatterOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for formatting person name components.

## Declaration

```objectivec
enum NSPersonNameComponentsFormatterOptions : NSUInteger;
```

## Topics

### Constants

- [NSPersonNameComponentsFormatterPhonetic](options/phonetic.md): The formatter should format the component object’s `phoneticRepresentation` components instead of its own components.

## See Also

### Constants

- [NSPersonNameComponentsFormatterStyle](style-swift.enum.md): The formatting styles for person name components.
- [Attributed String Key](../attributed-string-key.md): This constant is used as a key for person name component attributes in attributed strings returned by the [annotatedStringFromPersonNameComponents:](annotatedstring%28from_%29.md) method
- [Attributed String Components](../attributed-string-components.md): These constants are used to identify individual components of attributed strings returned by the [annotatedStringFromPersonNameComponents:](annotatedstring%28from_%29.md) method.
- [Component Delimiter](../component-delimiter.md): This constant defines the delimiter used to separate name components.
