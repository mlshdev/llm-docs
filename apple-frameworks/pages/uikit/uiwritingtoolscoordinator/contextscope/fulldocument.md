> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/contextscope/fulldocument](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/contextscope/fulldocument)

# UIWritingToolsCoordinator.ContextScope.fullDocument (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

An option to provide all of your view’s text.

## Declaration

```swift
case fullDocument
```

<a id="discussion"></a>

## Discussion

With this option, include all of the text your view manages. If your view has multiple text storage objects, create a separate context object for each one.

## See Also

### Getting the scope

- [UIWritingToolsCoordinator.ContextScope.userSelection](userselection.md): An option to provide only the view’s currently selected text.
- [UIWritingToolsCoordinator.ContextScope.visibleArea](visiblearea.md): An option to provide only the text in the currently visible portion of your view.

# UIWritingToolsCoordinatorContextScopeFullDocument (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

An option to provide all of your view’s text.

## Declaration

```objectivec
UIWritingToolsCoordinatorContextScopeFullDocument
```

<a id="discussion"></a>

## Discussion

With this option, include all of the text your view manages. If your view has multiple text storage objects, create a separate context object for each one.

## See Also

### Getting the scope

- [UIWritingToolsCoordinatorContextScopeUserSelection](userselection.md): An option to provide only the view’s currently selected text.
- [UIWritingToolsCoordinatorContextScopeVisibleArea](visiblearea.md): An option to provide only the text in the currently visible portion of your view.
