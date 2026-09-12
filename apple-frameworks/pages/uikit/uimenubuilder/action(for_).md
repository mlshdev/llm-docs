> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenubuilder/action(for:)](https://developer.apple.com/documentation/uikit/uimenubuilder/action(for:))

# action(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Gets the action for the specified action identifier.

## Declaration

```swift
func action(for identifier: UIAction.Identifier) -> UIAction?
```

## Parameters

- `identifier`: The identifier of the action to retrieve.

<a id="return-value"></a>

## Return Value

An action object; otherwise, `nil` if there are no actions with the specified identifier.

## See Also

### Getting menu systems and elements

- [system](system.md): The menu system that the menu builder modifies.
- [menu(for:)](menu%28for_%29.md): Gets the menu for the specified menu identifier.
- [command(for:propertyList:)](command%28for_propertylist_%29.md): Gets the command for the specified selector and property list.

# actionForIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Gets the action for the specified action identifier.

## Declaration

```objectivec
- (UIAction *) actionForIdentifier:(UIActionIdentifier) identifier;
```

## Parameters

- `identifier`: The identifier of the action to retrieve.

<a id="return-value"></a>

## Return Value

An action object; otherwise, `nil` if there are no actions with the specified identifier.

## See Also

### Getting menu systems and elements

- [system](system.md): The menu system that the menu builder modifies.
- [menuForIdentifier:](menu%28for_%29.md): Gets the menu for the specified menu identifier.
- [commandForAction:propertyList:](commandforaction_propertylist_.md): Gets the command for the specified selector and property list.
