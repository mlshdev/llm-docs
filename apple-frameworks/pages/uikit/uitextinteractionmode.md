> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinteractionmode](https://developer.apple.com/documentation/uikit/uitextinteractionmode)

# UITextInteractionMode (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Modes that determine the selection behaviors that a text interaction provides.

## Declaration

```swift
enum UITextInteractionMode
```

## Topics

### Modes

- [UITextInteractionMode.editable](uitextinteractionmode/editable.md): A mode indicating that the text interaction should provide selection behaviors for editable text.
- [UITextInteractionMode.nonEditable](uitextinteractionmode/noneditable.md): A mode indicating that the text interaction should provide selection behaviors for non-editable, read-only text.

### Initializers

- [init(rawValue:)](uitextinteractionmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Text interactions

- [UITextInteraction](uitextinteraction.md): An interaction that provides text selection gestures and UI to custom text views.
- [UITextInteractionDelegate](uitextinteractiondelegate.md): An interface that an object implements to receive information about text interaction events.

# UITextInteractionMode (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Modes that determine the selection behaviors that a text interaction provides.

## Declaration

```objectivec
enum UITextInteractionMode : NSInteger;
```

## Topics

### Modes

- [UITextInteractionModeEditable](uitextinteractionmode/editable.md): A mode indicating that the text interaction should provide selection behaviors for editable text.
- [UITextInteractionModeNonEditable](uitextinteractionmode/noneditable.md): A mode indicating that the text interaction should provide selection behaviors for non-editable, read-only text.

## See Also

### Text interactions

- [UITextInteraction](uitextinteraction.md): An interaction that provides text selection gestures and UI to custom text views.
- [UITextInteractionDelegate](uitextinteractiondelegate.md): An interface that an object implements to receive information about text interaction events.
