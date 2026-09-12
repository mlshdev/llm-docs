> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tccontrolcontents](https://developer.apple.com/documentation/touchcontroller/tccontrolcontents)

# TCControlContents (Swift)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Represents the visual contents of a touch control.

## Declaration

```swift
class TCControlContents
```

## Topics

### Creating control contents

- [init(images:)](tccontrolcontents/init%28images_%29.md): Creates a new instance with the specified images.

### Getting the images

- [images](tccontrolcontents/images.md): The array of objects used to render the control.

### Accessing button contents

- [buttonContents(forSystemImageNamed:size:shape:controller:)](tccontrolcontents/buttoncontents%28forsystemimagenamed_size_shape_controller_%29.md): The button contents for the specified system image name, size, and shape.
- [TCControlContents.ButtonShape](tccontrolcontents/buttonshape.md): Defines the visual shape of a button.

### Accessing directional pad contents

- [directionPadContents(label:size:style:direction:controller:)](tccontrolcontents/directionpadcontents%28label_size_style_direction_controller_%29.md): The direction pad contents for the specified label, size, style, and direction.
- [TCControlContents.DpadDirection](tccontrolcontents/dpaddirection.md): Defines the direction of a direction pad visual.
- [TCControlContents.DpadElementStyle](tccontrolcontents/dpadelementstyle.md): Defines the visual style of the individual up/down/left/right elements of a direction pad.

### Accessing switch contents

- [switchedOnContents(forSystemImageNamed:size:shape:controller:)](tccontrolcontents/switchedoncontents%28forsystemimagenamed_size_shape_controller_%29.md): The switch contents for the specified system image name, size, and shape.

### Accessing throttle contents

- [throttleBackgroundContents(size:controller:)](tccontrolcontents/throttlebackgroundcontents%28size_controller_%29.md): The throttle background contents for the specified size.
- [throttleIndicatorContents(size:controller:)](tccontrolcontents/throttleindicatorcontents%28size_controller_%29.md): The throttle indicator contents for the specified size.

### Accessing thumbstick contents

- [thumbstickStickBackgroundContents(size:controller:)](tccontrolcontents/thumbstickstickbackgroundcontents%28size_controller_%29.md): The thumbstick background contents for the specified size.
- [thumbstickStickContents(size:controller:)](tccontrolcontents/thumbstickstickcontents%28size_controller_%29.md): The thumbstick stick contents for the specified size.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Visuals

- [TCControlImage](tccontrolimage.md): Represents an image to be rendered using Metal.
- [TCControlLayout](tccontrollayout.md): A protocol defining the controlLayout properties for a control.

# TCControlContents (Objective-C)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Represents the visual contents of a touch control.

## Declaration

```objectivec
@interface TCControlContents : NSObject
```

## Topics

### Creating control contents

- [contentsWithImages:](tccontrolcontents/init%28images_%29.md): Creates a new instance with the specified images.

### Getting the images

- [images](tccontrolcontents/images.md): The array of objects used to render the control.

### Accessing button contents

- [buttonContentsForSystemImageNamed:size:shape:controller:](tccontrolcontents/buttoncontents%28forsystemimagenamed_size_shape_controller_%29.md): The button contents for the specified system image name, size, and shape.
- [TCControlContentsButtonShape](tccontrolcontents/buttonshape.md): Defines the visual shape of a button.

### Accessing directional pad contents

- [directionPadContentsForLabel:size:style:direction:controller:](tccontrolcontents/directionpadcontents%28label_size_style_direction_controller_%29.md): The direction pad contents for the specified label, size, style, and direction.
- [TCControlContentsDpadDirection](tccontrolcontents/dpaddirection.md): Defines the direction of a direction pad visual.
- [TCControlContentsDpadElementStyle](tccontrolcontents/dpadelementstyle.md): Defines the visual style of the individual up/down/left/right elements of a direction pad.

### Accessing switch contents

- [switchedOnContentsForSystemImageNamed:size:shape:controller:](tccontrolcontents/switchedoncontents%28forsystemimagenamed_size_shape_controller_%29.md): The switch contents for the specified system image name, size, and shape.

### Accessing throttle contents

- [throttleBackgroundContentsOfSize:controller:](tccontrolcontents/throttlebackgroundcontents%28size_controller_%29.md): The throttle background contents for the specified size.
- [throttleIndicatorContentsOfSize:controller:](tccontrolcontents/throttleindicatorcontents%28size_controller_%29.md): The throttle indicator contents for the specified size.

### Accessing thumbstick contents

- [thumbstickBackgroundContentsOfSize:controller:](tccontrolcontents/thumbstickstickbackgroundcontents%28size_controller_%29.md): The thumbstick background contents for the specified size.
- [thumbstickStickContentsOfSize:controller:](tccontrolcontents/thumbstickstickcontents%28size_controller_%29.md): The thumbstick stick contents for the specified size.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Visuals

- [TCControlImage](tccontrolimage.md): Represents an image to be rendered using Metal.
- [TCControlLayout](tccontrollayout.md): A protocol defining the controlLayout properties for a control.
