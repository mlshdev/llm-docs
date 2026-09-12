> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uieditmenuinteraction/init(delegate:)](https://developer.apple.com/documentation/uikit/uieditmenuinteraction/init(delegate:))

# init(delegate:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Initializes an edit menu interaction object with the delegate object you specify.

## Declaration

```swift
init(delegate: (any UIEditMenuInteractionDelegate)?)
```

<a id="Discussion"></a>

## Discussion

Create an object that conforms to the [UIEditMenuInteractionDelegate](../uieditmenuinteractiondelegate.md) protocol and assign it to this property. The interaction uses the system delegate if no delegate is provided (if you pass in `nil`).

# initWithDelegate: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Initializes an edit menu interaction object with the delegate object you specify.

## Declaration

```objectivec
- (instancetype) initWithDelegate:(id<UIEditMenuInteractionDelegate>) delegate;
```

<a id="Discussion"></a>

## Discussion

Create an object that conforms to the [UIEditMenuInteractionDelegate](../uieditmenuinteractiondelegate.md) protocol and assign it to this property. The interaction uses the system delegate if no delegate is provided (if you pass in `nil`).
