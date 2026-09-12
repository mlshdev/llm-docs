> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsclickgesturerecognizer/numberofclicksrequired](https://developer.apple.com/documentation/appkit/nsclickgesturerecognizer/numberofclicksrequired)

# numberOfClicksRequired (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The number of clicks required to match.

## Declaration

```swift
var numberOfClicksRequired: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The value in this property should always be a positive integer. Negative integers or `0` cause this object to never recognize its gesture. The default value of this property is `1`.

## See Also

### Configuring the gesture

- [buttonMask](buttonmask.md): A bit mask of the button (or buttons) required to recognize this click.
- [numberOfTouchesRequired](numberoftouchesrequired.md): The number of touches required in an [NSTouchBar](../nstouchbar.md) object for the gesture recognizer to match.

# numberOfClicksRequired (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The number of clicks required to match.

## Declaration

```objectivec
@property NSInteger numberOfClicksRequired;
```

<a id="Discussion"></a>

## Discussion

The value in this property should always be a positive integer. Negative integers or `0` cause this object to never recognize its gesture. The default value of this property is `1`.

## See Also

### Configuring the gesture

- [buttonMask](buttonmask.md): A bit mask of the button (or buttons) required to recognize this click.
- [numberOfTouchesRequired](numberoftouchesrequired.md): The number of touches required in an [NSTouchBar](../nstouchbar.md) object for the gesture recognizer to match.
