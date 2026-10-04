> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/geometricpinscomponent/set(pin:)

# set(pin:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Adds a pin to the collection.

## Declaration

```swift
mutating func set(pin: GeometricPin)
```

<a id="discussion"></a>

## Discussion

If the pin’s name already exists in the collection, the new value replaces the existing one.
