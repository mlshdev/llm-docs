> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uibuttonconfiguration/buttonsize

# buttonSize

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A size that requests a preferred size for the button.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) UIButtonConfigurationSize buttonSize;
```

<a id="Discussion"></a>

## Discussion

The size indicates a system-defined size you prefer for this button. The exact size of the button may change regardless of this value.

## See Also

### Configuring layout

- [UIButtonConfigurationSize](../uibuttonconfigurationsize.md): A predefined size for button elements.
- [contentInsets](contentinsets.md): The distance from the button’s content area to its bounds.
- [setDefaultContentInsets](setdefaultcontentinsets.md): Restores the default content insets.
