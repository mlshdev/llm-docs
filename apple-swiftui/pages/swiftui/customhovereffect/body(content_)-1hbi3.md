> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/customhovereffect/body(content:)-1hbi3](https://developer.apple.com/documentation/swiftui/customhovereffect/body(content:)-1hbi3)

# body(content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Defines the effect produced by this effect.

## Declaration

```swift
func body(content: Self.Content) -> Self.Body
```

## Parameters

- `content`: An empty effect you use to compose the custom effect.

<a id="return-value"></a>

## Return Value

A custom effect.

<a id="discussion"></a>

## Discussion

You implement this method to describe a custom effect to apply to a view. `content` is an empty effect you use to build your effect, which will later be applied to a View, or combined with other `CustomHoverEffect`s.
