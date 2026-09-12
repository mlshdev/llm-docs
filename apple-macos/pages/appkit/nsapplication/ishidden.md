> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/ishidden](https://developer.apple.com/documentation/appkit/nsapplication/ishidden)

# isHidden (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the app is hidden.

## Declaration

```swift
var isHidden: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the app is hidden or [false](https://developer.apple.com/documentation/swift/false) if it is not.

## See Also

### Hiding Windows

- [hide(\_:)](hide%28__%29.md): Hides all the receiver’s windows, and the next app in line is activated.
- [unhide(\_:)](unhide%28__%29.md): Restores hidden windows to the screen and makes the receiver active.
- [unhideWithoutActivation()](unhidewithoutactivation%28%29.md): Restores hidden windows without activating their owner (the receiver).

# hidden (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the app is hidden.

## Declaration

```objectivec
@property (readonly, getter=isHidden) BOOL hidden;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the app is hidden or [false](https://developer.apple.com/documentation/swift/false) if it is not.

## See Also

### Hiding Windows

- [hide:](hide%28__%29.md): Hides all the receiver’s windows, and the next app in line is activated.
- [unhide:](unhide%28__%29.md): Restores hidden windows to the screen and makes the receiver active.
- [unhideWithoutActivation](unhidewithoutactivation%28%29.md): Restores hidden windows without activating their owner (the receiver).
