> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tccontrolcontents/buttoncontents(forsystemimagenamed:size:shape:controller:)](https://developer.apple.com/documentation/touchcontroller/tccontrolcontents/buttoncontents(forsystemimagenamed:size:shape:controller:))

# buttonContents(forSystemImageNamed:size:shape:controller:) (Swift)

**Framework:** Touch Controller  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The button contents for the specified system image name, size, and shape.

## Declaration

```swift
class func buttonContents(forSystemImageNamed imageName: String, size: CGSize, shape: TCControlContents.ButtonShape, controller: TCTouchController) -> TCControlContents
```

## Parameters

- `imageName`: The name of the system image to use for the button.
- `size`: The size of the button in points.
- `shape`: The shape of the button.
- `controller`: The touch controller to create control contents for.

<a id="return-value"></a>

## Return Value

The `TCControlContents` for the button.

## See Also

### Accessing button contents

- [TCControlContents.ButtonShape](buttonshape.md): Defines the visual shape of a button.

# buttonContentsForSystemImageNamed:size:shape:controller: (Objective-C)

**Framework:** Touch Controller  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The button contents for the specified system image name, size, and shape.

## Declaration

```objectivec
+ (TCControlContents *) buttonContentsForSystemImageNamed:(NSString *) imageName size:(CGSize) size shape:(TCControlContentsButtonShape) shape controller:(TCTouchController *) controller;
```

## Parameters

- `imageName`: The name of the system image to use for the button.
- `size`: The size of the button in points.
- `shape`: The shape of the button.
- `controller`: The touch controller to create control contents for.

<a id="return-value"></a>

## Return Value

The `TCControlContents` for the button.

## See Also

### Accessing button contents

- [TCControlContentsButtonShape](buttonshape.md): Defines the visual shape of a button.
