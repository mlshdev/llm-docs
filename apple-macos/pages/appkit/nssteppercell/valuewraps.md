> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssteppercell/valuewraps](https://developer.apple.com/documentation/appkit/nssteppercell/valuewraps)

# valueWraps (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the receiver wraps around the minimum and maximum values.

## Declaration

```swift
var valueWraps: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if, when incrementing or decrementing, the value wraps around to the minimum or maximum. [false](https://developer.apple.com/documentation/swift/false) if the value stays pinned at the minimum or maximum. The default is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Specifying how stepper cell responds

- [autorepeat](autorepeat.md): A Boolean value indicating how the receiver responds to mouse events.

# valueWraps (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the receiver wraps around the minimum and maximum values.

## Declaration

```objectivec
@property BOOL valueWraps;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if, when incrementing or decrementing, the value wraps around to the minimum or maximum. [false](https://developer.apple.com/documentation/swift/false) if the value stays pinned at the minimum or maximum. The default is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Specifying how stepper cell responds

- [autorepeat](autorepeat.md): A Boolean value indicating how the receiver responds to mouse events.
