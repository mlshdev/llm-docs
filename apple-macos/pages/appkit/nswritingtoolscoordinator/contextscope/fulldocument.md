> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/contextscope/fulldocument](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/contextscope/fulldocument)

# NSWritingToolsCoordinator.ContextScope.fullDocument (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 15.2+

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

- [NSWritingToolsCoordinator.ContextScope.userSelection](userselection.md): An option to provide only the view’s currently selected text.
- [NSWritingToolsCoordinator.ContextScope.visibleArea](visiblearea.md): An option to provide only the text in the currently visible portion of your view.

# NSWritingToolsCoordinatorContextScopeFullDocument (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.2+

An option to provide all of your view’s text.

## Declaration

```objectivec
NSWritingToolsCoordinatorContextScopeFullDocument
```

<a id="discussion"></a>

## Discussion

With this option, include all of the text your view manages. If your view has multiple text storage objects, create a separate context object for each one.

## See Also

### Getting the scope

- [NSWritingToolsCoordinatorContextScopeUserSelection](userselection.md): An option to provide only the view’s currently selected text.
- [NSWritingToolsCoordinatorContextScopeVisibleArea](visiblearea.md): An option to provide only the text in the currently visible portion of your view.
