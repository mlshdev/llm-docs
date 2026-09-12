> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/init(delegate:)](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/init(delegate:))

# init(delegate:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

Creates a writing tools coordinator and assigns the specified delegate object to it.

## Declaration

```swift
init(delegate: (any UIWritingToolsCoordinator.Delegate)?)
```

## Parameters

- `delegate`: An object capable of handling Writing Tools interactions for your view. The delegate must be able to modify your view’s text storage and refresh the view’s layout and appearance.

<a id="discussion"></a>

## Discussion

Create the coordinator object during your view’s initialization, and assign the object to your view. Use the [addInteraction(\_:)](../uiview/addinteraction%28__%29.md) method to add the object to your view.

# initWithDelegate: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

Creates a writing tools coordinator and assigns the specified delegate object to it.

## Declaration

```objectivec
- (instancetype) initWithDelegate:(id<UIWritingToolsCoordinatorDelegate>) delegate;
```

## Parameters

- `delegate`: An object capable of handling Writing Tools interactions for your view. The delegate must be able to modify your view’s text storage and refresh the view’s layout and appearance.

<a id="discussion"></a>

## Discussion

Create the coordinator object during your view’s initialization, and assign the object to your view. Use the [addInteraction:](../uiview/addinteraction%28__%29.md) method to add the object to your view.
