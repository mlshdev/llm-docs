> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicellaccessorypopupmenu/selectedelementdidchangehandler

# selectedElementDidChangeHandler

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An optional closure that the system calls when a user selects an element in the menu.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^selectedElementDidChangeHandler)(UIMenu *menu);
```

## See Also

### Accessing configuration options

- [menu](menu.md): The menu to display when a user taps the popup menu accessory.
