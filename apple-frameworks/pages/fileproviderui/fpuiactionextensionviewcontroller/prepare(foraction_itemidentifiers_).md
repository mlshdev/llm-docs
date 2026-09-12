> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileproviderui/fpuiactionextensionviewcontroller/prepare(foraction:itemidentifiers:)](https://developer.apple.com/documentation/fileproviderui/fpuiactionextensionviewcontroller/prepare(foraction:itemidentifiers:))

# prepare(forAction:itemIdentifiers:) (Swift)

**Framework:** File Provider UI  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.15+ · visionOS 1.0+

Performs any necessary setup or configuration for the specified action.

## Declaration

```swift
func prepare(forAction actionIdentifier: String, itemIdentifiers: [NSFileProviderItemIdentifier])
```

## Parameters

- `actionIdentifier`: The identifier for the action performed by the user.
- `itemIdentifiers`: The identifiers of the items affected by the action.

## Mentioned In

- [Adding Actions to the Context Menu](../adding-actions-to-the-context-menu.md)

<a id="Discussion"></a>

## Discussion

Use this method to prepare a user interface for handling the action. At a minimum, you should display feedback about the action.

For more information, see [Adding Actions to the Context Menu](../adding-actions-to-the-context-menu.md).

## See Also

### Working with Actions

- [prepare(forError:)](prepare%28forerror_%29.md): Performs any necessary setup or configuration when an authentication error occurs.
- [extensionContext](extensioncontext.md): The extension context provided by the host app.
- [FPUIActionExtensionContext](../fpuiactionextensioncontext.md): An extension context provided to File Provider UI extensions.

# prepareForActionWithIdentifier:itemIdentifiers: (Objective-C)

**Framework:** File Provider UI  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.15+ · visionOS 1.0+

Performs any necessary setup or configuration for the specified action.

## Declaration

```objectivec
- (void) prepareForActionWithIdentifier:(NSString *) actionIdentifier itemIdentifiers:(NSArray<NSString *> *) itemIdentifiers;
```

## Parameters

- `actionIdentifier`: The identifier for the action performed by the user.
- `itemIdentifiers`: The identifiers of the items affected by the action.

## Mentioned In

- [Adding Actions to the Context Menu](../adding-actions-to-the-context-menu.md)

<a id="Discussion"></a>

## Discussion

Use this method to prepare a user interface for handling the action. At a minimum, you should display feedback about the action.

For more information, see [Adding Actions to the Context Menu](../adding-actions-to-the-context-menu.md).

## See Also

### Working with Actions

- [prepareForError:](prepare%28forerror_%29.md): Performs any necessary setup or configuration when an authentication error occurs.
- [extensionContext](extensioncontext.md): The extension context provided by the host app.
- [FPUIActionExtensionContext](../fpuiactionextensioncontext.md): An extension context provided to File Provider UI extensions.
