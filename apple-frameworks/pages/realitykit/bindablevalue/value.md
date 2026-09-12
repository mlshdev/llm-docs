> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/bindablevalue/value](https://developer.apple.com/documentation/realitykit/bindablevalue/value)

# value

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The main accessor for the bind value.

## Declaration

```swift
var value: T { get set }
```

<a id="discussion"></a>

## Discussion

This property returns the animated value ([animatedValue](animatedvalue.md)) if an animation is active. Otherwise, this property returns the base value ([baseValue](basevalue.md)).

When you assign a value to this property, the setter assigns the value you provide to [baseValue](basevalue.md).

## See Also

### Accessing the value

- [baseValue](basevalue.md): A value that reflects the state of the animated property before or after an animation.
- [animatedValue](animatedvalue.md): A value that represents the state of the animated property as an animation progresses.
