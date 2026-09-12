> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextview/writingtoolscoordinator](https://developer.apple.com/documentation/uikit/uitextview/writingtoolscoordinator)

# writingToolsCoordinator (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The object that coordinates interactions between Writing Tools and the text view.

## Declaration

```swift
var writingToolsCoordinator: UIWritingToolsCoordinator { get }
```

<a id="discussion"></a>

## Discussion

When you get the value of this property, the system creates a Writing Tools coordinator object if one doesn’t already exist for this view.

## See Also

### Getting the Writing Tools configuration

- [writingToolsBehavior](writingtoolsbehavior.md): The level of Writing Tools support to use in the text view.
- [allowedWritingToolsResultOptions](allowedwritingtoolsresultoptions.md): The type of content Writing Tools generates for your text view.
- [isWritingToolsActive](iswritingtoolsactive.md): A Boolean value that indicates whether the writing tools are currently interacting with the text view’s content.
- [subclassForWritingToolsCoordinator](subclassforwritingtoolscoordinator.md)

# writingToolsCoordinator (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The object that coordinates interactions between Writing Tools and the text view.

## Declaration

```objectivec
@property (nonatomic, readonly) UIWritingToolsCoordinator * writingToolsCoordinator;
```

<a id="discussion"></a>

## Discussion

When you get the value of this property, the system creates a Writing Tools coordinator object if one doesn’t already exist for this view.

## See Also

### Getting the Writing Tools configuration

- [writingToolsBehavior](writingtoolsbehavior.md): The level of Writing Tools support to use in the text view.
- [allowedWritingToolsResultOptions](allowedwritingtoolsresultoptions.md): The type of content Writing Tools generates for your text view.
- [writingToolsActive](iswritingtoolsactive.md): A Boolean value that indicates whether the writing tools are currently interacting with the text view’s content.
- [subclassForWritingToolsCoordinator](subclassforwritingtoolscoordinator.md)
