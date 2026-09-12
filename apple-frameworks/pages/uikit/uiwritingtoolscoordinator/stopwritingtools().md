> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/stopwritingtools()](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/stopwritingtools())

# stopWritingTools() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

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
- [UIWritingToolsCoordinator.State](state-swift.enum.md): The states that indicate the current activity, if any, Writing Tools is performing in your view.

# stopWritingTools (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

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
- [UIWritingToolsCoordinatorState](state-swift.enum.md): The states that indicate the current activity, if any, Writing Tools is performing in your view.
