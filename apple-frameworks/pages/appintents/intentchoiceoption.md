> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentchoiceoption](https://developer.apple.com/documentation/appintents/intentchoiceoption)

# IntentChoiceOption

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A structure representing an entry in a list of options for a person to choose from before an app intent resumes its action.

## Declaration

```swift
struct IntentChoiceOption
```

<a id="overview"></a>

## Overview

Each option includes display text and an optional style that influences its visual presentation. For example, an option for deleting a file might use a text and style to communicate its destructive action.

## Topics

### Structures

- [IntentChoiceOption.Style](intentchoiceoption/style-swift.struct.md): Defines the visual style and semantic meaning of an [IntentChoiceOption](intentchoiceoption.md).

### Initializers

- [init(title:style:)](intentchoiceoption/init%28title_style_%29.md): Creates a new option for a person to choose to continue an app intent.

### Instance Properties

- [style](intentchoiceoption/style-swift.property.md): The style applied to the option, affecting its visual appearance in the system UI.
- [title](intentchoiceoption/title.md): The localized text displayed for this option.

### Type Properties

- [cancel](intentchoiceoption/cancel.md): A system-provided option that cancel the app intent.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Disambiguation

- [ConfirmationConditions](confirmationconditions.md): Conditions for a confirmation request.
