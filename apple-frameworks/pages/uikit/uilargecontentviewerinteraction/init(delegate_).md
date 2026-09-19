> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uilargecontentviewerinteraction/init(delegate:)

# init(delegate:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates an interaction object with the specified delegate.

## Declaration

```swift
init(delegate: (any UILargeContentViewerInteractionDelegate)?)
```

## Parameters

- `delegate`: An object that implements the [UILargeContentViewerInteractionDelegate](../uilargecontentviewerinteractiondelegate.md) protocol.

<a id="Discussion"></a>

## Discussion

To add the interaction to a view, use [addInteraction(\_:)](../uiview/addinteraction%28__%29.md).

# initWithDelegate: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates an interaction object with the specified delegate.

## Declaration

```objectivec
- (instancetype) initWithDelegate:(id<UILargeContentViewerInteractionDelegate>) delegate;
```

## Parameters

- `delegate`: An object that implements the [UILargeContentViewerInteractionDelegate](../uilargecontentviewerinteractiondelegate.md) protocol.

<a id="Discussion"></a>

## Discussion

To add the interaction to a view, use [addInteraction:](../uiview/addinteraction%28__%29.md).
