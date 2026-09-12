> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextview/writingtoolsbehavior](https://developer.apple.com/documentation/uikit/uitextview/writingtoolsbehavior)

# writingToolsBehavior (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.4+

The level of Writing Tools support to use in the text view.

## Declaration

```swift
var writingToolsBehavior: UIWritingToolsBehavior { get set }
```

<a id="discussion"></a>

## Discussion

The system chooses an initial value based on the device’s capabilities. The value in this property is never the default option, and is instead one of the specific options such as [UIWritingToolsBehavior.none](../uiwritingtoolsbehavior/none.md), [UIWritingToolsBehavior.limited](../uiwritingtoolsbehavior/limited.md), or [UIWritingToolsBehavior.complete](../uiwritingtoolsbehavior/complete.md). Change the initial value to customize your text view’s Writing Tools support.

## See Also

### Getting the Writing Tools configuration

- [allowedWritingToolsResultOptions](allowedwritingtoolsresultoptions.md): The type of content Writing Tools generates for your text view.
- [isWritingToolsActive](iswritingtoolsactive.md): A Boolean value that indicates whether the writing tools are currently interacting with the text view’s content.
- [writingToolsCoordinator](writingtoolscoordinator.md): The object that coordinates interactions between Writing Tools and the text view.
- [subclassForWritingToolsCoordinator](subclassforwritingtoolscoordinator.md)

# writingToolsBehavior (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.4+

The level of Writing Tools support to use in the text view.

## Declaration

```objectivec
@property UIWritingToolsBehavior writingToolsBehavior;
```

<a id="discussion"></a>

## Discussion

The system chooses an initial value based on the device’s capabilities. The value in this property is never the default option, and is instead one of the specific options such as [UIWritingToolsBehaviorNone](../uiwritingtoolsbehavior/none.md), [UIWritingToolsBehaviorLimited](../uiwritingtoolsbehavior/limited.md), or [UIWritingToolsBehaviorComplete](../uiwritingtoolsbehavior/complete.md). Change the initial value to customize your text view’s Writing Tools support.

## See Also

### Getting the Writing Tools configuration

- [allowedWritingToolsResultOptions](allowedwritingtoolsresultoptions.md): The type of content Writing Tools generates for your text view.
- [writingToolsActive](iswritingtoolsactive.md): A Boolean value that indicates whether the writing tools are currently interacting with the text view’s content.
- [writingToolsCoordinator](writingtoolscoordinator.md): The object that coordinates interactions between Writing Tools and the text view.
- [subclassForWritingToolsCoordinator](subclassforwritingtoolscoordinator.md)
