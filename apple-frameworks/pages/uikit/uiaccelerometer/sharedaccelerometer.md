> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiaccelerometer/sharedaccelerometer

# sharedAccelerometer

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method

Returns the shared accelerometer object for the system.

## Declaration

```objectivec
+ (UIAccelerometer *) sharedAccelerometer;
```

<a id="return-value"></a>

## Return Value

The systemwide accelerometer object.

<a id="Discussion"></a>

## Discussion

Always use this method to retrieve the shared system accelerometer object. Do not create new instances of the `UIAccelerometer` class.
