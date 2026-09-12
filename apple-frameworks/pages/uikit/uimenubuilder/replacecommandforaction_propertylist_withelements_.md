> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenubuilder/replacecommandforaction:propertylist:withelements:](https://developer.apple.com/documentation/uikit/uimenubuilder/replacecommandforaction:propertylist:withelements:)

# replaceCommandForAction:propertyList:withElements:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Replace an identified command with menu elements.

## Declaration

```objectivec
- (void) replaceCommandForAction:(SEL) replacedAction propertyList:(id) replacedPropertyList withElements:(NSArray<UIMenuElement *> *) replacementElements;
```

## Parameters

- `replacedAction`: The action of the command to be replaced.
- `replacedPropertyList`: Property list object to distinguish commands, if needed.
- `replacementElements`: The replacement elements.
