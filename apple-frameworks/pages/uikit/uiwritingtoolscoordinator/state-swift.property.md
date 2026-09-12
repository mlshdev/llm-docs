> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/state-swift.property](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/state-swift.property)

# state (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The current level of Writing Tools activity in your view.

## Declaration

```swift
var state: UIWritingToolsCoordinator.State { get }
```

<a id="discussion"></a>

## Discussion

Use this property to determine when Writing Tools is actively making changes to your view. During the course of Writing Tools interactions, the system reports state changes to the delegate’s [writingToolsCoordinator(\_:willChangeTo:completion:)](delegate-swift.protocol/writingtoolscoordinator%28__willchangeto_completion_%29.md) method and updates this property accordingly.

## See Also

### Managing the current state

- [stopWritingTools()](stopwritingtools%28%29.md): Stops the current Writing Tools operation and dismisses the system UI.
- [UIWritingToolsCoordinator.State](state-swift.enum.md): The states that indicate the current activity, if any, Writing Tools is performing in your view.

# state (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The current level of Writing Tools activity in your view.

## Declaration

```objectivec
@property (nonatomic, readonly) UIWritingToolsCoordinatorState state;
```

<a id="discussion"></a>

## Discussion

Use this property to determine when Writing Tools is actively making changes to your view. During the course of Writing Tools interactions, the system reports state changes to the delegate’s [writingToolsCoordinator:willChangeToState:completion:](delegate-swift.protocol/writingtoolscoordinator%28__willchangeto_completion_%29.md) method and updates this property accordingly.

## See Also

### Managing the current state

- [stopWritingTools](stopwritingtools%28%29.md): Stops the current Writing Tools operation and dismisses the system UI.
- [UIWritingToolsCoordinatorState](state-swift.enum.md): The states that indicate the current activity, if any, Writing Tools is performing in your view.
