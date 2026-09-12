> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsclickgesturerecognizer/buttonmask](https://developer.apple.com/documentation/appkit/nsclickgesturerecognizer/buttonmask)

# buttonMask (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A bit mask of the button (or buttons) required to recognize this click.

## Declaration

```swift
var buttonMask: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Bit `0` represents the primary button, bit `1` is the secondary button, and so on. So to track clicks of the secondary button, assign the value `0x2` (which corresponds to a `1` in bit `1`) to this property. The default value of this property is `0x1`, which detects clicks in the primary mouse button.

Changing the value of this property also sets the values of the [delaysPrimaryMouseButtonEvents](../nsgesturerecognizer/delaysprimarymousebuttonevents.md), [delaysSecondaryMouseButtonEvents](../nsgesturerecognizer/delayssecondarymousebuttonevents.md), and [delaysOtherMouseButtonEvents](../nsgesturerecognizer/delaysothermousebuttonevents.md) properties to [true](https://developer.apple.com/documentation/swift/true) for each of the buttons you specified.

## See Also

### Configuring the gesture

- [numberOfClicksRequired](numberofclicksrequired.md): The number of clicks required to match.
- [numberOfTouchesRequired](numberoftouchesrequired.md): The number of touches required in an [NSTouchBar](../nstouchbar.md) object for the gesture recognizer to match.

# buttonMask (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A bit mask of the button (or buttons) required to recognize this click.

## Declaration

```objectivec
@property NSUInteger buttonMask;
```

<a id="Discussion"></a>

## Discussion

Bit `0` represents the primary button, bit `1` is the secondary button, and so on. So to track clicks of the secondary button, assign the value `0x2` (which corresponds to a `1` in bit `1`) to this property. The default value of this property is `0x1`, which detects clicks in the primary mouse button.

Changing the value of this property also sets the values of the [delaysPrimaryMouseButtonEvents](../nsgesturerecognizer/delaysprimarymousebuttonevents.md), [delaysSecondaryMouseButtonEvents](../nsgesturerecognizer/delayssecondarymousebuttonevents.md), and [delaysOtherMouseButtonEvents](../nsgesturerecognizer/delaysothermousebuttonevents.md) properties to [true](https://developer.apple.com/documentation/swift/true) for each of the buttons you specified.

## See Also

### Configuring the gesture

- [numberOfClicksRequired](numberofclicksrequired.md): The number of clicks required to match.
- [numberOfTouchesRequired](numberoftouchesrequired.md): The number of touches required in an [NSTouchBar](../nstouchbar.md) object for the gesture recognizer to match.
