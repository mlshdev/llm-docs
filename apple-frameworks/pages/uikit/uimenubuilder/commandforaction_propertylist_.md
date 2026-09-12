> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenubuilder/commandforaction:propertylist:](https://developer.apple.com/documentation/uikit/uimenubuilder/commandforaction:propertylist:)

# commandForAction:propertyList:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Gets the command for the specified selector and property list.

## Declaration

```objectivec
- (UICommand *) commandForAction:(SEL) action propertyList:(id) propertyList;
```

## Parameters

- `action`: The selector of the command to retrieve.
- `propertyList`: The property list object that distinguish the command.

<a id="return-value"></a>

## Return Value

A command object; otherwise, `nil` if there is no such command.

## See Also

### Getting menu systems and elements

- [system](system.md): The menu system that the menu builder modifies.
- [menuForIdentifier:](menu%28for_%29.md): Gets the menu for the specified menu identifier.
- [actionForIdentifier:](action%28for_%29.md): Gets the action for the specified action identifier.
