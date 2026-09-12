> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/init(delegate:)](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/init(delegate:))

# init(delegate:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 15.2+

Creates a writing tools coordinator and assigns the specified delegate object to it.

## Declaration

```swift
init(delegate: (any NSWritingToolsCoordinator.Delegate)?)
```

## Parameters

- `delegate`: An object capable of handling Writing Tools interactions for your view. The delegate must be able to modify your view’s text storage and refresh the view’s layout and appearance.

<a id="discussion"></a>

## Discussion

Create the coordinator object during your view’s initialization, and assign the object to your view. Assign the coordinator to the [writingToolsCoordinator](../nsview/writingtoolscoordinator.md) property of your view.

# initWithDelegate: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.2+

Creates a writing tools coordinator and assigns the specified delegate object to it.

## Declaration

```objectivec
- (instancetype) initWithDelegate:(id<NSWritingToolsCoordinatorDelegate>) delegate;
```

## Parameters

- `delegate`: An object capable of handling Writing Tools interactions for your view. The delegate must be able to modify your view’s text storage and refresh the view’s layout and appearance.

<a id="discussion"></a>

## Discussion

Create the coordinator object during your view’s initialization, and assign the object to your view. Assign the coordinator to the [writingToolsCoordinator](../nsview/writingtoolscoordinator.md) property of your view.
