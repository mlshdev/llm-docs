> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uimenubuilder/insertelements:aftercommandforaction:propertylist:

# insertElements:afterCommandForAction:propertyList:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Insert elements after an identified command.

## Declaration

```objectivec
- (void) insertElements:(NSArray<UIMenuElement *> *) insertedElements afterCommandForAction:(SEL) siblingAction propertyList:(id) siblingPropertyList;
```

## Parameters

- `insertedElements`: The elements to insert.
- `siblingAction`: The action of the command to insert elements after.
- `siblingPropertyList`: Property list object to distinguish commands, if needed.
