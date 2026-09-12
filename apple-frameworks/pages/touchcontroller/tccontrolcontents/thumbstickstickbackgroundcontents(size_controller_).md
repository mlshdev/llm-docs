> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tccontrolcontents/thumbstickstickbackgroundcontents(size:controller:)](https://developer.apple.com/documentation/touchcontroller/tccontrolcontents/thumbstickstickbackgroundcontents(size:controller:))

# thumbstickStickBackgroundContents(size:controller:) (Swift)

**Framework:** Touch Controller  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The thumbstick background contents for the specified size.

## Declaration

```swift
class func thumbstickStickBackgroundContents(size: CGSize, controller: TCTouchController) -> TCControlContents
```

## Parameters

- `size`: The size of the thumbstick background in points.
- `controller`: The touch controller to create control contents for.

<a id="return-value"></a>

## Return Value

The `TCControlContents` for the thumbstick background.

## See Also

### Accessing thumbstick contents

- [thumbstickStickContents(size:controller:)](thumbstickstickcontents%28size_controller_%29.md): The thumbstick stick contents for the specified size.

# thumbstickBackgroundContentsOfSize:controller: (Objective-C)

**Framework:** Touch Controller  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The thumbstick background contents for the specified size.

## Declaration

```objectivec
+ (TCControlContents *) thumbstickBackgroundContentsOfSize:(CGSize) size controller:(TCTouchController *) controller;
```

## Parameters

- `size`: The size of the thumbstick background in points.
- `controller`: The touch controller to create control contents for.

<a id="return-value"></a>

## Return Value

The `TCControlContents` for the thumbstick background.

## See Also

### Accessing thumbstick contents

- [thumbstickStickContentsOfSize:controller:](thumbstickstickcontents%28size_controller_%29.md): The thumbstick stick contents for the specified size.
