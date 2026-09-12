> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/contextscope/userselection](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/contextscope/userselection)

# UIWritingToolsCoordinator.ContextScope.userSelection (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

An option to provide only the view’s currently selected text.

## Declaration

```swift
case userSelection
```

<a id="discussion"></a>

## Discussion

With this option, include the selected text in your context object, along with some additional text before and after the selection. When performing changes inline with your view’s content, Writing Tools applies animations only to the selected text.

## See Also

### Getting the scope

- [UIWritingToolsCoordinator.ContextScope.fullDocument](fulldocument.md): An option to provide all of your view’s text.
- [UIWritingToolsCoordinator.ContextScope.visibleArea](visiblearea.md): An option to provide only the text in the currently visible portion of your view.

# UIWritingToolsCoordinatorContextScopeUserSelection (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

An option to provide only the view’s currently selected text.

## Declaration

```objectivec
UIWritingToolsCoordinatorContextScopeUserSelection
```

<a id="discussion"></a>

## Discussion

With this option, include the selected text in your context object, along with some additional text before and after the selection. When performing changes inline with your view’s content, Writing Tools applies animations only to the selected text.

## See Also

### Getting the scope

- [UIWritingToolsCoordinatorContextScopeFullDocument](fulldocument.md): An option to provide all of your view’s text.
- [UIWritingToolsCoordinatorContextScopeVisibleArea](visiblearea.md): An option to provide only the text in the currently visible portion of your view.
