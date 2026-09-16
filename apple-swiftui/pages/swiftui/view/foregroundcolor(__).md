> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/view/foregroundcolor(_:)

# foregroundColor(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.0+ (deprecated in 27.2) · macOS 10.15+ (deprecated in 27.2) · tvOS 13.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 6.0+ (deprecated in 27.2)

Sets the color of the foreground elements displayed by this view.

> Use [foregroundStyle(\_:)](foregroundstyle%28__%29.md) instead.

## Declaration

```swift
nonisolated func foregroundColor(_ color: Color?) -> some View

```

## Parameters

- `color`: The foreground color to use when displaying this view. Pass `nil` to remove any custom foreground color and to allow the system or the container to provide its own foreground color. If a container-specific override doesn’t exist, the system uses the primary color.

<a id="return-value"></a>

## Return Value

A view that uses the foreground color you supply.

## See Also

### Appearance modifiers

- [colorScheme(\_:)](colorscheme%28__%29.md): Deprecated. Sets this view’s color scheme.
- [listRowPlatterColor(\_:)](listrowplattercolor%28__%29.md): Deprecated. Sets the color that the system applies to the row background when this view is placed in a list.
- [background(\_:alignment:)](background%28__alignment_%29.md): Deprecated. Layers the given view behind this view.
- [overlay(\_:alignment:)](overlay%28__alignment_%29.md): Deprecated. Layers a secondary view in front of this view.
- [complicationForeground()](complicationforeground%28%29.md): Deprecated. Promotes this view to the foreground in a complication.
