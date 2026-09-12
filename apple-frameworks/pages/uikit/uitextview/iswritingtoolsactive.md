> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextview/iswritingtoolsactive](https://developer.apple.com/documentation/uikit/uitextview/iswritingtoolsactive)

# isWritingToolsActive (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.4+

A Boolean value that indicates whether the writing tools are currently interacting with the text view’s content.

## Declaration

```swift
var isWritingToolsActive: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to determine when someone is using the writing tools to rewrite text in the current text view. When writing tools are active, the system can change significant portions of the text view’s content. You might use this property to prevent your app from performing actions that interfere with those changes. For example, you might stop synchronizing text to iCloud while the UI is active.

To receive notifications when writing tools interactions start and stop, implement the  [textViewWritingToolsWillBegin(\_:)](../uitextviewdelegate/textviewwritingtoolswillbegin%28__%29.md) and [textViewWritingToolsDidEnd(\_:)](../uitextviewdelegate/textviewwritingtoolsdidend%28__%29.md) delegate methods.

## See Also

### Getting the Writing Tools configuration

- [writingToolsBehavior](writingtoolsbehavior.md): The level of Writing Tools support to use in the text view.
- [allowedWritingToolsResultOptions](allowedwritingtoolsresultoptions.md): The type of content Writing Tools generates for your text view.
- [writingToolsCoordinator](writingtoolscoordinator.md): The object that coordinates interactions between Writing Tools and the text view.
- [subclassForWritingToolsCoordinator](subclassforwritingtoolscoordinator.md)

# writingToolsActive (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.4+

A Boolean value that indicates whether the writing tools are currently interacting with the text view’s content.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isWritingToolsActive) BOOL writingToolsActive;
```

<a id="Discussion"></a>

## Discussion

Use this property to determine when someone is using the writing tools to rewrite text in the current text view. When writing tools are active, the system can change significant portions of the text view’s content. You might use this property to prevent your app from performing actions that interfere with those changes. For example, you might stop synchronizing text to iCloud while the UI is active.

To receive notifications when writing tools interactions start and stop, implement the  [textViewWritingToolsWillBegin:](../uitextviewdelegate/textviewwritingtoolswillbegin%28__%29.md) and [textViewWritingToolsDidEnd:](../uitextviewdelegate/textviewwritingtoolsdidend%28__%29.md) delegate methods.

## See Also

### Getting the Writing Tools configuration

- [writingToolsBehavior](writingtoolsbehavior.md): The level of Writing Tools support to use in the text view.
- [allowedWritingToolsResultOptions](allowedwritingtoolsresultoptions.md): The type of content Writing Tools generates for your text view.
- [writingToolsCoordinator](writingtoolscoordinator.md): The object that coordinates interactions between Writing Tools and the text view.
- [subclassForWritingToolsCoordinator](subclassforwritingtoolscoordinator.md)
