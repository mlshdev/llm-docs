> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/environmentvalues/isfocuseffectenabled

# isFocusEffectEnabled

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A Boolean value that indicates whether the view associated with this environment allows focus effects to be displayed.

## Declaration

```swift
var isFocusEffectEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `true`.

## See Also

### Configuring effects

- [focusEffectDisabled(\_:)](../view/focuseffectdisabled%28__%29.md): Adds a condition that controls whether this view can display focus effects, such as a default focus ring or hover effect.
