> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/windowtoolbarstyle/unifiedcompact(showstitle:)

# unifiedCompact(showsTitle:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** macOS 11.0+

A window toolbar style similar to [unified](unified.md), but with a more compact vertical sizing.

## Declaration

```swift
@export(implementation) static func unifiedCompact(showsTitle: Bool) -> UnifiedCompactWindowToolbarStyle
```

## Parameters

- `showsTitle`: Whether the title should be displayed.

## See Also

### Getting built-in window toolbar styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultWindowToolbarStyle`. The automatic window toolbar style.
- [expanded](expanded.md): Conforms when `Self` is `ExpandedWindowToolbarStyle`. A window toolbar style which displays its title bar area above the toolbar.
- [unified](unified.md): Conforms when `Self` is `UnifiedWindowToolbarStyle`. A window toolbar style which displays its toolbar and title bar inline.
- [unified(showsTitle:)](unified%28showstitle_%29.md): Conforms when `Self` is `UnifiedWindowToolbarStyle`. A window toolbar style which displays its toolbar and title bar inline.
- [unifiedCompact](unifiedcompact.md): Conforms when `Self` is `UnifiedCompactWindowToolbarStyle`. A window toolbar style similar to [unified](unified.md), but with a more compact vertical sizing.
