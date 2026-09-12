> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/contextscope/userselection](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/contextscope/userselection)

# NSWritingToolsCoordinator.ContextScope.userSelection (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 15.2+

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

- [NSWritingToolsCoordinator.ContextScope.fullDocument](fulldocument.md): An option to provide all of your view’s text.
- [NSWritingToolsCoordinator.ContextScope.visibleArea](visiblearea.md): An option to provide only the text in the currently visible portion of your view.

# NSWritingToolsCoordinatorContextScopeUserSelection (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.2+

An option to provide only the view’s currently selected text.

## Declaration

```objectivec
NSWritingToolsCoordinatorContextScopeUserSelection
```

<a id="discussion"></a>

## Discussion

With this option, include the selected text in your context object, along with some additional text before and after the selection. When performing changes inline with your view’s content, Writing Tools applies animations only to the selected text.

## See Also

### Getting the scope

- [NSWritingToolsCoordinatorContextScopeFullDocument](fulldocument.md): An option to provide all of your view’s text.
- [NSWritingToolsCoordinatorContextScopeVisibleArea](visiblearea.md): An option to provide only the text in the currently visible portion of your view.
