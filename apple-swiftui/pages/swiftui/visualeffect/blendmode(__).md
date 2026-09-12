> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/visualeffect/blendmode(_:)](https://developer.apple.com/documentation/swiftui/visualeffect/blendmode(_:))

# blendMode(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets the blend mode for compositing this view with overlapping views.

## Declaration

```swift
func blendMode(_ blendMode: BlendMode) -> some VisualEffect

```

## Parameters

- `blendMode`: The [BlendMode](../blendmode.md) for compositing.

<a id="return-value"></a>

## Return Value

An effect that applies `blendMode` to this view.

<a id="discussion"></a>

## Discussion

Use `blendMode(_:)` to combine overlapping views and use a different visual effect to produce the result. The [BlendMode](../blendmode.md) enumeration defines many possible effects.
