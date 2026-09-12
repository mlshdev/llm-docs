> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tccontrolcontents/throttlebackgroundcontents(size:controller:)](https://developer.apple.com/documentation/touchcontroller/tccontrolcontents/throttlebackgroundcontents(size:controller:))

# throttleBackgroundContents(size:controller:) (Swift)

**Framework:** Touch Controller  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The throttle background contents for the specified size.

## Declaration

```swift
class func throttleBackgroundContents(size: CGSize, controller: TCTouchController) -> TCControlContents
```

## Parameters

- `size`: The size of the throttle background in points.
- `controller`: The touch controller to create control contents for.

<a id="return-value"></a>

## Return Value

The `TCControlContents` for the throttle background.

## See Also

### Accessing throttle contents

- [throttleIndicatorContents(size:controller:)](throttleindicatorcontents%28size_controller_%29.md): The throttle indicator contents for the specified size.

# throttleBackgroundContentsOfSize:controller: (Objective-C)

**Framework:** Touch Controller  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The throttle background contents for the specified size.

## Declaration

```objectivec
+ (TCControlContents *) throttleBackgroundContentsOfSize:(CGSize) size controller:(TCTouchController *) controller;
```

## Parameters

- `size`: The size of the throttle background in points.
- `controller`: The touch controller to create control contents for.

<a id="return-value"></a>

## Return Value

The `TCControlContents` for the throttle background.

## See Also

### Accessing throttle contents

- [throttleIndicatorContentsOfSize:controller:](throttleindicatorcontents%28size_controller_%29.md): The throttle indicator contents for the specified size.
