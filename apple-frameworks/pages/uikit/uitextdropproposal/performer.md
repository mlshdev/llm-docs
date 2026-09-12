> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdropproposal/performer](https://developer.apple.com/documentation/uikit/uitextdropproposal/performer)

# UITextDropProposal.Performer (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The performers that are responsible for handling the drop operation.

## Declaration

```swift
enum Performer
```

<a id="overview"></a>

## Overview

A performer is responsible for:

- Proving a preview for the drop activity.
- Loading data from the item providers.
- Inserting the data into the text view.

## Topics

### Performers

- [UITextDropProposal.Performer.view](performer/view.md): A performer type that indicates that the text view is responsible for doing the drop operation.
- [UITextDropProposal.Performer.delegate](performer/delegate.md): A performer type that indicates the delegate object is responsible for doing the drop operation.

### Initializers

- [init(rawValue:)](performer/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Drop management

- [UITextDropRequest](../uitextdroprequest.md): The interface for specifying the attributes of a drop request for a text view.
- [UITextDropProposal](../uitextdropproposal.md): A proposed configuration for the behavior of a text drop interaction.
- [UITextDropProposal.Action](action.md): The text drop action styles for text views.
- [UITextDropProposal.ProgressMode](progressmode.md): The text drop progress styles for user-visible progress indication.

# UITextDropPerformer (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The performers that are responsible for handling the drop operation.

## Declaration

```objectivec
enum UITextDropPerformer : NSUInteger;
```

<a id="overview"></a>

## Overview

A performer is responsible for:

- Proving a preview for the drop activity.
- Loading data from the item providers.
- Inserting the data into the text view.

## Topics

### Performers

- [UITextDropPerformerView](performer/view.md): A performer type that indicates that the text view is responsible for doing the drop operation.
- [UITextDropPerformerDelegate](performer/delegate.md): A performer type that indicates the delegate object is responsible for doing the drop operation.

## See Also

### Drop management

- [UITextDropRequest](../uitextdroprequest.md): The interface for specifying the attributes of a drop request for a text view.
- [UITextDropProposal](../uitextdropproposal.md): A proposed configuration for the behavior of a text drop interaction.
- [UITextDropAction](action.md): The text drop action styles for text views.
- [UITextDropProgressMode](progressmode.md): The text drop progress styles for user-visible progress indication.
