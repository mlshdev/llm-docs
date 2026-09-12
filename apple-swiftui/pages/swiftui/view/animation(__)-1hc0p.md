> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/animation(_:)-1hc0p](https://developer.apple.com/documentation/swiftui/view/animation(_:)-1hc0p)

# animation(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.0+ (deprecated in 15.0) · macOS 10.15+ (deprecated in 12.0) · tvOS 13.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

Applies the given animation to all animatable values within this view.

> Use [withAnimation(\_:\_:)](../withanimation%28____%29.md) or [animation(\_:value:)](animation%28__value_%29.md) instead.

## Declaration

```swift
nonisolated func animation(_ animation: Animation?) -> some View

```

## Parameters

- `animation`: The animation to apply to animatable values within this view.

<a id="return-value"></a>

## Return Value

A view that wraps this view and applies `animation` to all animatable values used within the view.

<a id="discussion"></a>

## Discussion

Use this modifier on leaf views rather than container views. The animation applies to all child views within this view; calling `animation(_:)` on a container view can lead to unbounded scope.
