> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/setactionname(_:)-cci9](https://developer.apple.com/documentation/foundation/undomanager/setactionname(_:)-cci9)

# setActionName(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Sets the name of the action associated with the Undo or Redo command using a localized string resource.

## Declaration

```swift
@MainActor @preconcurrency final func setActionName(_ actionNameResource: LocalizedStringResource?)
```

## Parameters

- `actionNameResource`: The name of the action, as a [LocalizedStringResource](../localizedstringresource.md). Pass in `nil` to reset the action name currently associated with the menu command.

<a id="discussion"></a>

## Discussion

This version of `setActionName(_:)` takes a [LocalizedStringResource](../localizedstringresource.md). When using this version, [undoActionName](undoactionname.md), [redoActionName](redoactionname.md), [undoMenuItemTitle](undomenuitemtitle.md), and [redoMenuItemTitle](redomenuitemtitle.md) interpret the provided resource using the current locale.

The undo manager parses the parameter as Markdown using [init(localized:)](../attributedstring/init%28localized_%29.md) in order to support inflection.

If `actionNameResource` is `nil`, the undo manager removes the action name currently associated with the menu command.

## See Also

### Managing the action name

- [undoActionName](undoactionname.md): The name identifying the undo action.
- [redoActionName](redoactionname.md): The name identifying the redo action.
- [setActionName(\_:)](setactionname%28__%29-8lzip.md): Sets the name of the action associated with the Undo or Redo command.
