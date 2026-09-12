> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssteppercell/autorepeat](https://developer.apple.com/documentation/appkit/nssteppercell/autorepeat)

# autorepeat (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating how the receiver responds to mouse events.

## Declaration

```swift
var autorepeat: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the first mouse down will do one increment (decrement), and, after a delay of 0.5 seconds, will increment (decrement) at a rate of ten times per second. If [false](https://developer.apple.com/documentation/swift/false), the receiver will do one increment (decrement) on a mouse up. The default is [true](https://developer.apple.com/documentation/swift/true)

## See Also

### Specifying how stepper cell responds

- [valueWraps](valuewraps.md): A Boolean value indicating whether the receiver wraps around the minimum and maximum values.

# autorepeat (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating how the receiver responds to mouse events.

## Declaration

```objectivec
@property BOOL autorepeat;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the first mouse down will do one increment (decrement), and, after a delay of 0.5 seconds, will increment (decrement) at a rate of ten times per second. If [false](https://developer.apple.com/documentation/swift/false), the receiver will do one increment (decrement) on a mouse up. The default is [true](https://developer.apple.com/documentation/swift/true)

## See Also

### Specifying how stepper cell responds

- [valueWraps](valuewraps.md): A Boolean value indicating whether the receiver wraps around the minimum and maximum values.
