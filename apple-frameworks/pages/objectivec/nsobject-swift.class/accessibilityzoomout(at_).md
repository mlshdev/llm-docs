> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/accessibilityzoomout(at:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityzoomout(at:))

# accessibilityZoomOut(at:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Zooms out from the content at the specified point.

## Declaration

```swift
@MainActor func accessibilityZoomOut(at point: CGPoint) -> Bool
```

## Parameters

- `point`: The point where a person performs the zoom out action.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if this method successfully handles zooming; otherwise, [NO](../no.md). By default, this method returns [NO](../no.md).

<a id="Discussion"></a>

## Discussion

If your element has the [supportsZoom](../../uikit/uiaccessibilitytraits/supportszoom.md) trait, you need to implement this method and [accessibilityZoomIn(at:)](accessibilityzoomin%28at_%29.md). Use this method to zoom out from the specified point. For example, if the element allows a pinch gesture to zoom out from the view’s content, implement this method so that the VoiceOver zoom action receives the same behavior.

# accessibilityZoomOutAtPoint: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Zooms out from the content at the specified point.

## Declaration

```objectivec
- (BOOL) accessibilityZoomOutAtPoint:(CGPoint) point;
```

## Parameters

- `point`: The point where a person performs the zoom out action.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if this method successfully handles zooming; otherwise, [NO](../no.md). By default, this method returns [NO](../no.md).

<a id="Discussion"></a>

## Discussion

If your element has the [UIAccessibilityTraitSupportsZoom](../../uikit/uiaccessibilitytraits/supportszoom.md) trait, you need to implement this method and [accessibilityZoomInAtPoint:](accessibilityzoomin%28at_%29.md). Use this method to zoom out from the specified point. For example, if the element allows a pinch gesture to zoom out from the view’s content, implement this method so that the VoiceOver zoom action receives the same behavior.
