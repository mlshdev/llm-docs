> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tccontrolcontents/throttleindicatorcontents(size:controller:)](https://developer.apple.com/documentation/touchcontroller/tccontrolcontents/throttleindicatorcontents(size:controller:))

# throttleIndicatorContents(size:controller:) (Swift)

**Framework:** Touch Controller  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The throttle indicator contents for the specified size.

## Declaration

```swift
class func throttleIndicatorContents(size: CGSize, controller: TCTouchController) -> TCControlContents
```

## Parameters

- `size`: The size of the throttle indicator in points.
- `controller`: The touch controller to create control contents for.

<a id="return-value"></a>

## Return Value

The `TCControlContents` for the throttle indicator.

## See Also

### Accessing throttle contents

- [throttleBackgroundContents(size:controller:)](throttlebackgroundcontents%28size_controller_%29.md): The throttle background contents for the specified size.

# throttleIndicatorContentsOfSize:controller: (Objective-C)

**Framework:** Touch Controller  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The throttle indicator contents for the specified size.

## Declaration

```objectivec
+ (TCControlContents *) throttleIndicatorContentsOfSize:(CGSize) size controller:(TCTouchController *) controller;
```

## Parameters

- `size`: The size of the throttle indicator in points.
- `controller`: The touch controller to create control contents for.

<a id="return-value"></a>

## Return Value

The `TCControlContents` for the throttle indicator.

## See Also

### Accessing throttle contents

- [throttleBackgroundContentsOfSize:controller:](throttlebackgroundcontents%28size_controller_%29.md): The throttle background contents for the specified size.
