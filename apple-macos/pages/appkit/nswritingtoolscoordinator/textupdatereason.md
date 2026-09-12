> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/textupdatereason](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/textupdatereason)

# NSWritingToolsCoordinator.TextUpdateReason (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 15.2+

Constants that specify the reason you updated your view’s content outside of the Writing Tools workflow.

## Declaration

```swift
enum TextUpdateReason
```

<a id="overview"></a>

## Overview

If you modify your view’s text storage while Writing Tools is active, report those changes to your [NSWritingToolsCoordinator](../nswritingtoolscoordinator.md) object so it can track them correctly. Call the [updateRange(\_:with:reason:forContextWithIdentifier:)](updaterange%28__with_reason_forcontextwithidentifier_%29.md) method to report changes that occur inside one of your context objects. Call the [updateForReflowedTextInContextWithIdentifier(\_:)](updateforreflowedtextincontextwithidentifier%28__%29.md) method for changes that affect the layout of your text, such as text insertions before a context object or changes to your view’s frame rectangle.

## Topics

### Getting the reasons

- [NSWritingToolsCoordinator.TextUpdateReason.typing](textupdatereason/typing.md): An operation that involved a person editing the text in your view.
- [NSWritingToolsCoordinator.TextUpdateReason.undoRedo](textupdatereason/undoredo.md): An operation that changed the view’s text as part of an undo or redo command.

### Initializers

- [init(rawValue:)](textupdatereason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Reporting changes to Writing Tools

- [updateRange(\_:with:reason:forContextWithIdentifier:)](updaterange%28__with_reason_forcontextwithidentifier_%29.md): Informs the coordinator about changes your app made to the text in the specified context object.
- [updateForReflowedTextInContextWithIdentifier(\_:)](updateforreflowedtextincontextwithidentifier%28__%29.md): Informs the coordinator that a change occurred to the view or its text that requires a layout update.

# NSWritingToolsCoordinatorTextUpdateReason (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 15.2+

Constants that specify the reason you updated your view’s content outside of the Writing Tools workflow.

## Declaration

```objectivec
enum NSWritingToolsCoordinatorTextUpdateReason : NSInteger;
```

<a id="overview"></a>

## Overview

If you modify your view’s text storage while Writing Tools is active, report those changes to your [NSWritingToolsCoordinator](../nswritingtoolscoordinator.md) object so it can track them correctly. Call the [updateRange:withText:reason:forContextWithIdentifier:](updaterange%28__with_reason_forcontextwithidentifier_%29.md) method to report changes that occur inside one of your context objects. Call the [updateForReflowedTextInContextWithIdentifier:](updateforreflowedtextincontextwithidentifier%28__%29.md) method for changes that affect the layout of your text, such as text insertions before a context object or changes to your view’s frame rectangle.

## Topics

### Getting the reasons

- [NSWritingToolsCoordinatorTextUpdateReasonTyping](textupdatereason/typing.md): An operation that involved a person editing the text in your view.
- [NSWritingToolsCoordinatorTextUpdateReasonUndoRedo](textupdatereason/undoredo.md): An operation that changed the view’s text as part of an undo or redo command.

## See Also

### Reporting changes to Writing Tools

- [updateRange:withText:reason:forContextWithIdentifier:](updaterange%28__with_reason_forcontextwithidentifier_%29.md): Informs the coordinator about changes your app made to the text in the specified context object.
- [updateForReflowedTextInContextWithIdentifier:](updateforreflowedtextincontextwithidentifier%28__%29.md): Informs the coordinator that a change occurred to the view or its text that requires a layout update.
