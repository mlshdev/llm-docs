> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/setactionname(_:)-8lzip](https://developer.apple.com/documentation/foundation/undomanager/setactionname(_:)-8lzip)

# setActionName(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the name of the action associated with the Undo or Redo command.

## Declaration

```swift
func setActionName(_ actionName: String)
```

## Parameters

- `actionName`: The name of the action.

<a id="discussion"></a>

## Discussion

If `actionName` is an empty string, the undo manager removes the action name currently associated with the menu command.

## See Also

### Managing the action name

- [undoActionName](undoactionname.md): The name identifying the undo action.
- [redoActionName](redoactionname.md): The name identifying the redo action.
- [setActionName(\_:)](setactionname%28__%29-cci9.md): Sets the name of the action associated with the Undo or Redo command using a localized string resource.

# setActionName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the name of the action associated with the Undo or Redo command.

## Declaration

```objectivec
- (void) setActionName:(NSString *) actionName;
```

## Parameters

- `actionName`: The name of the action.

<a id="discussion"></a>

## Discussion

If `actionName` is an empty string, the undo manager removes the action name currently associated with the menu command.

## See Also

### Managing the action name

- [undoActionName](undoactionname.md): The name identifying the undo action.
- [redoActionName](redoactionname.md): The name identifying the redo action.
