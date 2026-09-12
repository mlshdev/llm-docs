> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/symboleffectoptions/repeatbehavior/continuous](https://developer.apple.com/documentation/symbols/symboleffectoptions/repeatbehavior/continuous)

# continuous

**Framework:** Symbols  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A repeat behavior that prefers to repeat indefinitely, using continuous animations if available. Continuous animations have an intro, a body that runs as long as the effect is enabled, and an outro. If available these animations provide a smoother animation when an effect repeats indefinitely.

## Declaration

```swift
static var continuous: SymbolEffectOptions.RepeatBehavior { get }
```

<a id="return-value"></a>

## Return Value

A new behavior that prefers to repeat indefinitely with continuous animations.
