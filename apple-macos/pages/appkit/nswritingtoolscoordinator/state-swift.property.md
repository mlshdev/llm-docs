> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/state-swift.property](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/state-swift.property)

# state (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.2+

The current level of Writing Tools activity in your view.

## Declaration

```swift
var state: NSWritingToolsCoordinator.State { get }
```

<a id="discussion"></a>

## Discussion

Use this property to determine when Writing Tools is actively making changes to your view. During the course of Writing Tools interactions, the system reports state changes to the delegate’s [writingToolsCoordinator(\_:willChangeTo:completion:)](delegate-swift.protocol/writingtoolscoordinator%28__willchangeto_completion_%29.md) method and updates this property accordingly.

## See Also

### Managing the current state

- [stopWritingTools()](stopwritingtools%28%29.md): Stops the current Writing Tools operation and dismisses the system UI.
- [NSWritingToolsCoordinator.State](state-swift.enum.md): The states that indicate the current activity, if any, Writing Tools is performing in your view.

# state (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.2+

The current level of Writing Tools activity in your view.

## Declaration

```objectivec
@property (readonly) NSWritingToolsCoordinatorState state;
```

<a id="discussion"></a>

## Discussion

Use this property to determine when Writing Tools is actively making changes to your view. During the course of Writing Tools interactions, the system reports state changes to the delegate’s [writingToolsCoordinator:willChangeToState:completion:](delegate-swift.protocol/writingtoolscoordinator%28__willchangeto_completion_%29.md) method and updates this property accordingly.

## See Also

### Managing the current state

- [stopWritingTools](stopwritingtools%28%29.md): Stops the current Writing Tools operation and dismisses the system UI.
- [NSWritingToolsCoordinatorState](state-swift.enum.md): The states that indicate the current activity, if any, Writing Tools is performing in your view.
