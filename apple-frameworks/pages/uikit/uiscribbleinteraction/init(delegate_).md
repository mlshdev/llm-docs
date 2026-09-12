> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscribbleinteraction/init(delegate:)](https://developer.apple.com/documentation/uikit/uiscribbleinteraction/init(delegate:))

# init(delegate:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a Scribble interaction that allows customizing the behavior of Scribble on text input views with the delegate you provide.

## Declaration

```swift
init(delegate: any UIScribbleInteractionDelegate)
```

## Parameters

- `delegate`: The object that acts as the delegate of this [UIScribbleInteraction](../uiscribbleinteraction.md) instance.

# initWithDelegate: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a Scribble interaction that allows customizing the behavior of Scribble on text input views with the delegate you provide.

## Declaration

```objectivec
- (instancetype) initWithDelegate:(id<UIScribbleInteractionDelegate>) delegate;
```

## Parameters

- `delegate`: The object that acts as the delegate of this [UIScribbleInteraction](../uiscribbleinteraction.md) instance.
