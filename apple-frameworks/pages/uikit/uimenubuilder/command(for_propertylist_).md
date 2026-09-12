> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenubuilder/command(for:propertylist:)](https://developer.apple.com/documentation/uikit/uimenubuilder/command(for:propertylist:))

# command(for:propertyList:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 14.0+ · visionOS

Gets the command for the specified selector and property list.

## Declaration

```swift
@MainActor @preconcurrency func command(for action: Selector, propertyList: Any? = nil) -> UICommand?
```

## Parameters

- `action`: The selector of the command to retrieve.
- `propertyList`: The property list object that identifies the command when more than one command uses the same action.

<a id="return-value"></a>

## Return Value

A command object; otherwise, `nil` if there is no such command.

## See Also

### Getting menu systems and elements

- [system](system.md): The menu system that the menu builder modifies.
- [menu(for:)](menu%28for_%29.md): Gets the menu for the specified menu identifier.
- [action(for:)](action%28for_%29.md): Gets the action for the specified action identifier.
