> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incarsignaloptions](https://developer.apple.com/documentation/intents/incarsignaloptions)

# INCarSignalOptions (Swift)

**Framework:** Intents  
**Kind:** Structure  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The signals produced by the user’s car.

## Declaration

```swift
struct INCarSignalOptions
```

<a id="overview"></a>

## Overview

In Swift, you can select more than one option from the option set. In Objective-C, you can select more than one option by combining the enums using a bitwise `OR` operation.

## Topics

### Signal Types

- [audible](incarsignaloptions/audible.md): An audible signal; for example, honking the car horn.
- [visible](incarsignaloptions/visible.md): A visual signal; for example, flashing the hazard lights.

### Initializers

- [init(rawValue:)](incarsignaloptions/init%28rawvalue_%29.md): Initializes a new car signal option based on the provided raw value.

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

# INCarSignalOptions (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The signals produced by the user’s car.

## Declaration

```objectivec
enum INCarSignalOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

In Swift, you can select more than one option from the option set. In Objective-C, you can select more than one option by combining the enums using a bitwise `OR` operation.

## Topics

### Signal Types

- [INCarSignalOptionAudible](incarsignaloptions/audible.md): An audible signal; for example, honking the car horn.
- [INCarSignalOptionVisible](incarsignaloptions/visible.md): A visual signal; for example, flashing the hazard lights.
