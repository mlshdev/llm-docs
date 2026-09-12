> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tccontrolcontents/switchedoncontents(forsystemimagenamed:size:shape:controller:)](https://developer.apple.com/documentation/touchcontroller/tccontrolcontents/switchedoncontents(forsystemimagenamed:size:shape:controller:))

# switchedOnContents(forSystemImageNamed:size:shape:controller:) (Swift)

**Framework:** Touch Controller  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The switch contents for the specified system image name, size, and shape.

## Declaration

```swift
class func switchedOnContents(forSystemImageNamed imageName: String, size: CGSize, shape: TCControlContents.ButtonShape, controller: TCTouchController) -> TCControlContents
```

## Parameters

- `imageName`: The name of the system image to use for the switch button.
- `size`: The size of the switch button in points.
- `shape`: The shape of the switch button.
- `controller`: The touch controller to create control contents for.

<a id="return-value"></a>

## Return Value

The `TCControlContents` for the switch button.

# switchedOnContentsForSystemImageNamed:size:shape:controller: (Objective-C)

**Framework:** Touch Controller  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The switch contents for the specified system image name, size, and shape.

## Declaration

```objectivec
+ (TCControlContents *) switchedOnContentsForSystemImageNamed:(NSString *) imageName size:(CGSize) size shape:(TCControlContentsButtonShape) shape controller:(TCTouchController *) controller;
```

## Parameters

- `imageName`: The name of the system image to use for the switch button.
- `size`: The size of the switch button in points.
- `shape`: The shape of the switch button.
- `controller`: The touch controller to create control contents for.

<a id="return-value"></a>

## Return Value

The `TCControlContents` for the switch button.
