> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointerinteraction/init(delegate:)](https://developer.apple.com/documentation/uikit/uipointerinteraction/init(delegate:))

# init(delegate:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Initializes a pointer interaction object with a specified delegate object.

## Declaration

```swift
init(delegate: (any UIPointerInteractionDelegate)?)
```

## Parameters

- `delegate`: An object the framework calls to respond to pointer movements.

<a id="Discussion"></a>

## Discussion

If you create a `UIPointerInteraction` without a delegate by passing `nil` to the initializer, UIKit automatically applies a pointer effect it deems appropriate to the view. Initializing with `nil` is the equivalent of creating a `UIPointerStyle` with [UIPointerEffect.automatic(\_:)](../uipointereffect-swift.enum/automatic%28__%29.md). Based on the view’s appearance, `.automatic` transforms into one of the concrete effects (`.highlight`, `.lift`, `.hover`).

# initWithDelegate: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Initializes a pointer interaction object with a specified delegate object.

## Declaration

```objectivec
- (instancetype) initWithDelegate:(id<UIPointerInteractionDelegate>) delegate;
```

## Parameters

- `delegate`: An object the framework calls to respond to pointer movements.

<a id="Discussion"></a>

## Discussion

If you create a `UIPointerInteraction` without a delegate by passing `nil` to the initializer, UIKit automatically applies a pointer effect it deems appropriate to the view. Initializing with `nil` is the equivalent of creating a `UIPointerStyle` with [UIPointerEffect.automatic(\_:)](../uipointereffect-swift.enum/automatic%28__%29.md). Based on the view’s appearance, `.automatic` transforms into one of the concrete effects (`.highlight`, `.lift`, `.hover`).
