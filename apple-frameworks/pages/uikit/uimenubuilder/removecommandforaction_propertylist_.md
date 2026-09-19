> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uimenubuilder/removecommandforaction:propertylist:

# removeCommandForAction:propertyList:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Remove an identified command.

## Declaration

```objectivec
- (void) removeCommandForAction:(SEL) removedAction propertyList:(id) removedPropertyList;
```

## Parameters

- `removedAction`: The action of the command to remove.
- `removedPropertyList`: Property list object to distinguish commands, if needed.
