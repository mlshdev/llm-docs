> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenubuilder/menu(for:)](https://developer.apple.com/documentation/uikit/uimenubuilder/menu(for:))

# menu(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Gets the menu for the specified menu identifier.

## Declaration

```swift
func menu(for identifier: UIMenu.Identifier) -> UIMenu?
```

## Parameters

- `identifier`: The identifier of the menu to retrieve.

<a id="return-value"></a>

## Return Value

A menu object; otherwise, `nil` if there are no menus with the specified identifier.

## See Also

### Getting menu systems and elements

- [system](system.md): The menu system that the menu builder modifies.
- [action(for:)](action%28for_%29.md): Gets the action for the specified action identifier.
- [command(for:propertyList:)](command%28for_propertylist_%29.md): Gets the command for the specified selector and property list.

# menuForIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Gets the menu for the specified menu identifier.

## Declaration

```objectivec
- (UIMenu *) menuForIdentifier:(UIMenuIdentifier) identifier;
```

## Parameters

- `identifier`: The identifier of the menu to retrieve.

<a id="return-value"></a>

## Return Value

A menu object; otherwise, `nil` if there are no menus with the specified identifier.

## See Also

### Getting menu systems and elements

- [system](system.md): The menu system that the menu builder modifies.
- [actionForIdentifier:](action%28for_%29.md): Gets the action for the specified action identifier.
- [commandForAction:propertyList:](commandforaction_propertylist_.md): Gets the command for the specified selector and property list.
