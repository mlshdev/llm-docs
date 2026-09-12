> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextview/allowedwritingtoolsresultoptions](https://developer.apple.com/documentation/uikit/uitextview/allowedwritingtoolsresultoptions)

# allowedWritingToolsResultOptions (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.4+

The type of content Writing Tools generates for your text view.

## Declaration

```swift
var allowedWritingToolsResultOptions: UIWritingToolsResultOptions { get set }
```

<a id="discussion"></a>

## Discussion

Text views support most types of generated content. However, if you set this property to a value that includes the [table](../uiwritingtoolsresultoptions/table.md) option, UIKit raises [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md).

## See Also

### Getting the Writing Tools configuration

- [writingToolsBehavior](writingtoolsbehavior.md): The level of Writing Tools support to use in the text view.
- [isWritingToolsActive](iswritingtoolsactive.md): A Boolean value that indicates whether the writing tools are currently interacting with the text view’s content.
- [writingToolsCoordinator](writingtoolscoordinator.md): The object that coordinates interactions between Writing Tools and the text view.
- [subclassForWritingToolsCoordinator](subclassforwritingtoolscoordinator.md)

# allowedWritingToolsResultOptions (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.4+

The type of content Writing Tools generates for your text view.

## Declaration

```objectivec
@property UIWritingToolsResultOptions allowedWritingToolsResultOptions;
```

<a id="discussion"></a>

## Discussion

Text views support most types of generated content. However, if you set this property to a value that includes the [UIWritingToolsResultTable](../uiwritingtoolsresultoptions/table.md) option, UIKit raises [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md).

## See Also

### Getting the Writing Tools configuration

- [writingToolsBehavior](writingtoolsbehavior.md): The level of Writing Tools support to use in the text view.
- [writingToolsActive](iswritingtoolsactive.md): A Boolean value that indicates whether the writing tools are currently interacting with the text view’s content.
- [writingToolsCoordinator](writingtoolscoordinator.md): The object that coordinates interactions between Writing Tools and the text view.
- [subclassForWritingToolsCoordinator](subclassforwritingtoolscoordinator.md)
