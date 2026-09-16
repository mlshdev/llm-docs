> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/transition/properties

# properties

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns the properties this transition type has.

## Declaration

```swift
@MainActor @preconcurrency static var properties: TransitionProperties { get }
```

<a id="discussion"></a>

## Discussion

Defaults to `TransitionProperties()`.

## Default Implementations

### Transition Implementations

- [properties](properties-3v8pe.md): Returns the properties this transition type has.

## See Also

### Configuring a transition

- [animation(\_:)](animation%28__%29.md): Attaches an animation to this transition.
