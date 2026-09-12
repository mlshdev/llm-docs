> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibandselectioninteraction/init(_:)](https://developer.apple.com/documentation/uikit/uibandselectioninteraction/init(_:))

# init(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Creates a new band selection interaction object with the provided handler code.

## Declaration

```swift
init(_ selectionHandler: @escaping (UIBandSelectionInteraction) -> Void)
```

## Parameters

- `selectionHandler`: The handler block you use to process interaction-related events. The handler block has no return value and takes the following parameter:

  - **interaction**: The band selection interaction object that reported the event. Use the [state](state-swift.property.md) property of this object to determine what actions to take. For example, when the value of the property is [UIBandSelectionInteraction.State.selecting](state-swift.enum/selecting.md), get the current selection rectangle and intersect it with the items in your view.

<a id="return-value"></a>

## Return Value

An initialized band selection interaction object. Add the returned object to a view to begin detecting interactions.

# initWithSelectionHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Creates a new band selection interaction object with the provided handler code.

## Declaration

```objectivec
- (instancetype) initWithSelectionHandler:(void (^)(UIBandSelectionInteraction *interaction)) selectionHandler;
```

## Parameters

- `selectionHandler`: The handler block you use to process interaction-related events. The handler block has no return value and takes the following parameter:

  - **interaction**: The band selection interaction object that reported the event. Use the [state](state-swift.property.md) property of this object to determine what actions to take. For example, when the value of the property is [UIBandSelectionInteractionStateSelecting](state-swift.enum/selecting.md), get the current selection rectangle and intersect it with the items in your view.

<a id="return-value"></a>

## Return Value

An initialized band selection interaction object. Add the returned object to a view to begin detecting interactions.
