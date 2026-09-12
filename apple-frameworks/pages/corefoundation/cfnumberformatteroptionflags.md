> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnumberformatteroptionflags](https://developer.apple.com/documentation/corefoundation/cfnumberformatteroptionflags)

# CFNumberFormatterOptionFlags (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Type for constants specifying how numbers should be parsed.

## Declaration

```swift
struct CFNumberFormatterOptionFlags
```

<a id="overview"></a>

## Overview

For values, see [Number Format Options](number_format_options.md)

## Topics

### Initializers

- [init(rawValue:)](cfnumberformatteroptionflags/init%28rawvalue_%29.md)

### Type Properties

- [parseIntegersOnly](cfnumberformatteroptionflags/parseintegersonly.md): Specifies that only integers should be parsed.

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

### Data Types

- [CFNumberFormatterStyle](cfnumberformatterstyle.md): Type for constants specifying a formatter style.
- [CFNumberFormatterPadPosition](cfnumberformatterpadposition.md): Type for constants specifying how numbers should be padded.

# CFNumberFormatterOptionFlags (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Type for constants specifying how numbers should be parsed.

## Declaration

```objectivec
enum CFNumberFormatterOptionFlags : CFOptionFlags;
```

<a id="overview"></a>

## Overview

For values, see [Number Format Options](number_format_options.md)

## Topics

### Enumeration Cases

- [kCFNumberFormatterParseIntegersOnly](cfnumberformatteroptionflags/parseintegersonly.md): Specifies that only integers should be parsed.

## See Also

### Data Types

- [CFNumberFormatterStyle](cfnumberformatterstyle.md): Type for constants specifying a formatter style.
- [CFNumberFormatterPadPosition](cfnumberformatterpadposition.md): Type for constants specifying how numbers should be padded.
