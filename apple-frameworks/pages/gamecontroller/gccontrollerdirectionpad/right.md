> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerdirectionpad/right](https://developer.apple.com/documentation/gamecontroller/gccontrollerdirectionpad/right)

# right (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The button element that changes the positive x-axis.

## Declaration

```swift
var right: GCControllerButtonInput { get }
```

<a id="Discussion"></a>

## Discussion

The value of the `right` and `left` buttons are mutually exclusive because the user can only press one of these buttons at a time. Therefore, when the `right` button is nonzero, the `left` button is `0`.

## See Also

### Accessing values using directional buttons

- [left](left.md): The button element that changes the negative x-axis.
- [up](up.md): The button element that changes the positive y-axis.
- [down](down.md): The button element used for the negative y-axis direction.

# right (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The button element that changes the positive x-axis.

## Declaration

```objectivec
@property (nonatomic, readonly) GCControllerButtonInput * right;
```

<a id="Discussion"></a>

## Discussion

The value of the `right` and `left` buttons are mutually exclusive because the user can only press one of these buttons at a time. Therefore, when the `right` button is nonzero, the `left` button is `0`.

## See Also

### Accessing values using directional buttons

- [left](left.md): The button element that changes the negative x-axis.
- [up](up.md): The button element that changes the positive y-axis.
- [down](down.md): The button element used for the negative y-axis direction.
