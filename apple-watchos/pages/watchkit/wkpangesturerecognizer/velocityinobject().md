> Snapshot-pinned source payload for Apple watchOS snapshot-2bb3946a9b15; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/wkpangesturerecognizer/velocityinobject()

# velocityInObject() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

The velocity of the pan gesture in the current object.

## Declaration

```swift
func velocityInObject() -> CGPoint
```

<a id="return-value"></a>

## Return Value

The velocity of the gesture, which is expressed in points per second. The `x` field contains the horizontal velocity and the `y` field contains the vertical velocity.

## See Also

### Tracking the Location and Velocity of the Gesture

- [translationInObject()](translationinobject%28%29.md): The amount of translation for the pan gesture in the current object.

# velocityInObject (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

The velocity of the pan gesture in the current object.

## Declaration

```objectivec
- (CGPoint) velocityInObject;
```

<a id="return-value"></a>

## Return Value

The velocity of the gesture, which is expressed in points per second. The `x` field contains the horizontal velocity and the `y` field contains the vertical velocity.

## See Also

### Tracking the Location and Velocity of the Gesture

- [translationInObject](translationinobject%28%29.md): The amount of translation for the pan gesture in the current object.
