> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/undoactionname](https://developer.apple.com/documentation/foundation/undomanager/undoactionname)

# undoActionName (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The name identifying the undo action.

## Declaration

```swift
var undoActionName: String { get }
```

<a id="Discussion"></a>

## Discussion

The undo action name. Returns an empty string (`@""`) if no action name has been assigned or if there is nothing to undo.

For example, if the menu title is “Undo Delete,” the string returned is “Delete.”

## See Also

### Managing the action name

- [redoActionName](redoactionname.md): The name identifying the redo action.
- [setActionName(\_:)](setactionname%28__%29-cci9.md): Sets the name of the action associated with the Undo or Redo command using a localized string resource.
- [setActionName(\_:)](setactionname%28__%29-8lzip.md): Sets the name of the action associated with the Undo or Redo command.

# undoActionName (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The name identifying the undo action.

## Declaration

```objectivec
@property (copy, readonly) NSString * undoActionName;
```

<a id="Discussion"></a>

## Discussion

The undo action name. Returns an empty string (`@""`) if no action name has been assigned or if there is nothing to undo.

For example, if the menu title is “Undo Delete,” the string returned is “Delete.”

## See Also

### Managing the action name

- [redoActionName](redoactionname.md): The name identifying the redo action.
- [setActionName:](setactionname%28__%29-8lzip.md): Sets the name of the action associated with the Undo or Redo command.
