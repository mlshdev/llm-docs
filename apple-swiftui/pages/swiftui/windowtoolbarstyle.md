> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowtoolbarstyle](https://developer.apple.com/documentation/swiftui/windowtoolbarstyle)

# WindowToolbarStyle

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** macOS 11.0+

A specification for the appearance and behavior of a window’s toolbar.

## Declaration

```swift
protocol WindowToolbarStyle
```

## Topics

### Getting built-in window toolbar styles

- [automatic](windowtoolbarstyle/automatic.md): Conforms when `Self` is `DefaultWindowToolbarStyle`. The automatic window toolbar style.
- [expanded](windowtoolbarstyle/expanded.md): Conforms when `Self` is `ExpandedWindowToolbarStyle`. A window toolbar style which displays its title bar area above the toolbar.
- [unified](windowtoolbarstyle/unified.md): Conforms when `Self` is `UnifiedWindowToolbarStyle`. A window toolbar style which displays its toolbar and title bar inline.
- [unified(showsTitle:)](windowtoolbarstyle/unified%28showstitle_%29.md): Conforms when `Self` is `UnifiedWindowToolbarStyle`. A window toolbar style which displays its toolbar and title bar inline.
- [unifiedCompact](windowtoolbarstyle/unifiedcompact.md): Conforms when `Self` is `UnifiedCompactWindowToolbarStyle`. A window toolbar style similar to [unified](windowtoolbarstyle/unified.md), but with a more compact vertical sizing.
- [unifiedCompact(showsTitle:)](windowtoolbarstyle/unifiedcompact%28showstitle_%29.md): Conforms when `Self` is `UnifiedCompactWindowToolbarStyle`. A window toolbar style similar to [unified](windowtoolbarstyle/unified.md), but with a more compact vertical sizing.

### Supporting types

- [DefaultWindowToolbarStyle](defaultwindowtoolbarstyle.md): The default window toolbar style.
- [ExpandedWindowToolbarStyle](expandedwindowtoolbarstyle.md): A window toolbar style which displays its title bar area above the toolbar.
- [UnifiedWindowToolbarStyle](unifiedwindowtoolbarstyle.md): A window toolbar style which displays its toolbar and title bar inline.
- [UnifiedCompactWindowToolbarStyle](unifiedcompactwindowtoolbarstyle.md): A window toolbar style similar to [unified](windowtoolbarstyle/unified.md), but with a more compact vertical sizing.

## Relationships

### Conforming Types

- [DefaultWindowToolbarStyle](defaultwindowtoolbarstyle.md)
- [ExpandedWindowToolbarStyle](expandedwindowtoolbarstyle.md)
- [UnifiedCompactWindowToolbarStyle](unifiedcompactwindowtoolbarstyle.md)
- [UnifiedWindowToolbarStyle](unifiedwindowtoolbarstyle.md)

## See Also

### Styling a toolbar

- [toolbarBackground(\_:for:)](view/toolbarbackground%28__for_%29.md): Specifies the preferred shape style of the background of a bar managed by SwiftUI.
- [toolbarColorScheme(\_:for:)](view/toolbarcolorscheme%28__for_%29.md): Specifies the preferred color scheme of a bar managed by SwiftUI.
- [toolbarForegroundStyle(\_:for:)](view/toolbarforegroundstyle%28__for_%29.md): Specifies the preferred foreground style of bars managed by SwiftUI.
- [windowToolbarStyle(\_:)](scene/windowtoolbarstyle%28__%29.md): Sets the style for the toolbar defined within this scene.
- [toolbarLabelStyle](environmentvalues/toolbarlabelstyle.md): The label style to apply to controls within a toolbar.
- [ToolbarLabelStyle](toolbarlabelstyle.md): The label style of a toolbar.
- [SpacerSizing](spacersizing.md): A type which defines how spacers should size themselves.
