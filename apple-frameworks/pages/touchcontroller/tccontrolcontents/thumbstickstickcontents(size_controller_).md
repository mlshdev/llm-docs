> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tccontrolcontents/thumbstickstickcontents(size:controller:)](https://developer.apple.com/documentation/touchcontroller/tccontrolcontents/thumbstickstickcontents(size:controller:))

# thumbstickStickContents(size:controller:) (Swift)

**Framework:** Touch Controller  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The thumbstick stick contents for the specified size.

## Declaration

```swift
class func thumbstickStickContents(size: CGSize, controller: TCTouchController) -> TCControlContents
```

## Parameters

- `size`: The size of the thumbstick stick in points.
- `controller`: The touch controller to create control contents for.

<a id="return-value"></a>

## Return Value

The `TCControlContents` for the thumbstick stick.

## See Also

### Accessing thumbstick contents

- [thumbstickStickBackgroundContents(size:controller:)](thumbstickstickbackgroundcontents%28size_controller_%29.md): The thumbstick background contents for the specified size.

# thumbstickStickContentsOfSize:controller: (Objective-C)

**Framework:** Touch Controller  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The thumbstick stick contents for the specified size.

## Declaration

```objectivec
+ (TCControlContents *) thumbstickStickContentsOfSize:(CGSize) size controller:(TCTouchController *) controller;
```

## Parameters

- `size`: The size of the thumbstick stick in points.
- `controller`: The touch controller to create control contents for.

<a id="return-value"></a>

## Return Value

The `TCControlContents` for the thumbstick stick.

## See Also

### Accessing thumbstick contents

- [thumbstickBackgroundContentsOfSize:controller:](thumbstickstickbackgroundcontents%28size_controller_%29.md): The thumbstick background contents for the specified size.
