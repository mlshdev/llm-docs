> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkpangesturerecognizer/translationinobject()](https://developer.apple.com/documentation/watchkit/wkpangesturerecognizer/translationinobject())

# translationInObject() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

The amount of translation for the pan gesture in the current object.

## Declaration

```swift
func translationInObject() -> CGPoint
```

<a id="return-value"></a>

## Return Value

A point representing the translation value relative to the current object’s coordinate system.

<a id="Discussion"></a>

## Discussion

The x and y values report the total translation over time. They are not delta values from the last time that the translation was reported.

## See Also

### Tracking the Location and Velocity of the Gesture

- [velocityInObject()](velocityinobject%28%29.md): The velocity of the pan gesture in the current object.

# translationInObject (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

The amount of translation for the pan gesture in the current object.

## Declaration

```objectivec
- (CGPoint) translationInObject;
```

<a id="return-value"></a>

## Return Value

A point representing the translation value relative to the current object’s coordinate system.

<a id="Discussion"></a>

## Discussion

The x and y values report the total translation over time. They are not delta values from the last time that the translation was reported.

## See Also

### Tracking the Location and Velocity of the Gesture

- [velocityInObject](velocityinobject%28%29.md): The velocity of the pan gesture in the current object.
