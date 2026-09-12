> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstepper/valuewraps](https://developer.apple.com/documentation/appkit/nsstepper/valuewraps)

# valueWraps (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the stepper wraps around the minimum and maximum values.

## Declaration

```swift
var valueWraps: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if, when incrementing or decrementing, the value wraps around to the minimum or maximum. [false](https://developer.apple.com/documentation/swift/false) if the value stays pinned at the minimum or maximum. The default is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Specifying how the stepper responds

- [autorepeat](autorepeat.md): A Boolean value that indicates how the stepper responds to mouse events.

# valueWraps (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the stepper wraps around the minimum and maximum values.

## Declaration

```objectivec
@property BOOL valueWraps;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if, when incrementing or decrementing, the value wraps around to the minimum or maximum. [false](https://developer.apple.com/documentation/swift/false) if the value stays pinned at the minimum or maximum. The default is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Specifying how the stepper responds

- [autorepeat](autorepeat.md): A Boolean value that indicates how the stepper responds to mouse events.
