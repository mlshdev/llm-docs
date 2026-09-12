> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/confirmationconditions](https://developer.apple.com/documentation/appintents/confirmationconditions)

# ConfirmationConditions

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Conditions for a confirmation request.

## Declaration

```swift
struct ConfirmationConditions
```

<a id="overview"></a>

## Overview

If any of the conditions are met, confirmation will be requested.

## Topics

### Type Properties

- [lowConfidenceSource](confirmationconditions/lowconfidencesource.md): Only confirm if initiated from a low-confidence action source.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Disambiguation

- [IntentChoiceOption](intentchoiceoption.md): A structure representing an entry in a list of options for a person to choose from before an app intent resumes its action.
