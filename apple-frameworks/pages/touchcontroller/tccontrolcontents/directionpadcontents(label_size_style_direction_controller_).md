> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tccontrolcontents/directionpadcontents(label:size:style:direction:controller:)](https://developer.apple.com/documentation/touchcontroller/tccontrolcontents/directionpadcontents(label:size:style:direction:controller:))

# directionPadContents(label:size:style:direction:controller:) (Swift)

**Framework:** Touch Controller  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The direction pad contents for the specified label, size, style, and direction.

## Declaration

```swift
class func directionPadContents(label: TCControlLabel, size: CGSize, style: TCControlContents.DpadElementStyle, direction: TCControlContents.DpadDirection, controller: TCTouchController) -> TCControlContents
```

## Parameters

- `label`: The label for the direction pad.
- `size`: The size of the direction pad in points.
- `style`: The style of the direction pad.
- `direction`: The direction of the direction pad visual.
- `controller`: The touch controller to create control contents for.

<a id="return-value"></a>

## Return Value

The `TCControlContents` for the direction pad.

## See Also

### Accessing directional pad contents

- [TCControlContents.DpadDirection](dpaddirection.md): Defines the direction of a direction pad visual.
- [TCControlContents.DpadElementStyle](dpadelementstyle.md): Defines the visual style of the individual up/down/left/right elements of a direction pad.

# directionPadContentsForLabel:size:style:direction:controller: (Objective-C)

**Framework:** Touch Controller  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The direction pad contents for the specified label, size, style, and direction.

## Declaration

```objectivec
+ (TCControlContents *) directionPadContentsForLabel:(TCControlLabel *) label size:(CGSize) size style:(TCControlContentsDpadElementStyle) style direction:(TCControlContentsDpadDirection) direction controller:(TCTouchController *) controller;
```

## Parameters

- `label`: The label for the direction pad.
- `size`: The size of the direction pad in points.
- `style`: The style of the direction pad.
- `direction`: The direction of the direction pad visual.
- `controller`: The touch controller to create control contents for.

<a id="return-value"></a>

## Return Value

The `TCControlContents` for the direction pad.

## See Also

### Accessing directional pad contents

- [TCControlContentsDpadDirection](dpaddirection.md): Defines the direction of a direction pad visual.
- [TCControlContentsDpadElementStyle](dpadelementstyle.md): Defines the visual style of the individual up/down/left/right elements of a direction pad.
