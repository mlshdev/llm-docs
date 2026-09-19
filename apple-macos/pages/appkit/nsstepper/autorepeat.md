> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsstepper/autorepeat

# autorepeat (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates how the stepper responds to mouse events.

## Declaration

```swift
var autorepeat: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the first mouse down does one increment (or decrement) and, after a delay of 0.5 seconds, increments (or decrements) at a rate of ten times per second. [false](https://developer.apple.com/documentation/swift/false) if the receiver does one increment (decrement) on a mouse up. The default is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Specifying how the stepper responds

- [valueWraps](valuewraps.md): A Boolean value that indicates whether the stepper wraps around the minimum and maximum values.

# autorepeat (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates how the stepper responds to mouse events.

## Declaration

```objectivec
@property BOOL autorepeat;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the first mouse down does one increment (or decrement) and, after a delay of 0.5 seconds, increments (or decrements) at a rate of ten times per second. [false](https://developer.apple.com/documentation/swift/false) if the receiver does one increment (decrement) on a mouse up. The default is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Specifying how the stepper responds

- [valueWraps](valuewraps.md): A Boolean value that indicates whether the stepper wraps around the minimum and maximum values.
