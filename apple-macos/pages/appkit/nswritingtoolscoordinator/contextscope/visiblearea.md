> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/contextscope/visiblearea

# NSWritingToolsCoordinator.ContextScope.visibleArea (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 15.2+

An option to provide only the text in the currently visible portion of your view.

## Declaration

```swift
case visibleArea
```

<a id="discussion"></a>

## Discussion

With this option, include only the currently visible text, along with some additional text before and after the visible text.

## See Also

### Getting the scope

- [NSWritingToolsCoordinator.ContextScope.userSelection](userselection.md): An option to provide only the view’s currently selected text.
- [NSWritingToolsCoordinator.ContextScope.fullDocument](fulldocument.md): An option to provide all of your view’s text.

# NSWritingToolsCoordinatorContextScopeVisibleArea (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.2+

An option to provide only the text in the currently visible portion of your view.

## Declaration

```objectivec
NSWritingToolsCoordinatorContextScopeVisibleArea
```

<a id="discussion"></a>

## Discussion

With this option, include only the currently visible text, along with some additional text before and after the visible text.

## See Also

### Getting the scope

- [NSWritingToolsCoordinatorContextScopeUserSelection](userselection.md): An option to provide only the view’s currently selected text.
- [NSWritingToolsCoordinatorContextScopeFullDocument](fulldocument.md): An option to provide all of your view’s text.
