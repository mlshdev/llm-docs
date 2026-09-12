> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/stopwritingtools()](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/stopwritingtools())

# stopWritingTools() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.2+

Stops the current Writing Tools operation and dismisses the system UI.

## Declaration

```swift
func stopWritingTools()
```

<a id="discussion"></a>

## Discussion

Call this method to abort the current Writing Tools operation. This method dismisses the system’s Writing Tools UI and stops any in-flight interactions with your view. This method does not undo any changes that Writing Tools already made to your view’s content.

## See Also

### Managing the current state

- [state](state-swift.property.md): The current level of Writing Tools activity in your view.
- [NSWritingToolsCoordinator.State](state-swift.enum.md): The states that indicate the current activity, if any, Writing Tools is performing in your view.

# stopWritingTools (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.2+

Stops the current Writing Tools operation and dismisses the system UI.

## Declaration

```objectivec
- (void) stopWritingTools;
```

<a id="discussion"></a>

## Discussion

Call this method to abort the current Writing Tools operation. This method dismisses the system’s Writing Tools UI and stops any in-flight interactions with your view. This method does not undo any changes that Writing Tools already made to your view’s content.

## See Also

### Managing the current state

- [state](state-swift.property.md): The current level of Writing Tools activity in your view.
- [NSWritingToolsCoordinatorState](state-swift.enum.md): The states that indicate the current activity, if any, Writing Tools is performing in your view.
