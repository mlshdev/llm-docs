> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller](https://developer.apple.com/documentation/touchcontroller)

# Touch Controller (Swift)

**Framework:** Touch Controller  
**Kind:** Framework  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Integrate onscreen touch controls into your Metal-based games.

<a id="overview"></a>

## Overview

Use Touch Controller to add custom and interactive touch controls for your games. The framework offers a suite of controls that enable support for a variety of control schemes, like buttons, directional pads, thumbsticks, throttle controls, and touchpads. The Game Controller framework supports each control and surfaces them through a [GCController](gamecontroller/gccontroller.md) instance.

Use the [TCTouchController](touchcontroller/tctouchcontroller.md) class as the central point to manage and render your touch controls. To configure the appearance of your controls, use [TCControlContents](touchcontroller/tccontrolcontents.md) and [TCControlImage](touchcontroller/tccontrolimage.md). Use [TCControlContents](touchcontroller/tccontrolcontents.md) to create a consistent look and feel with system-provided assets.

## Topics

### Essentials

- [TCTouchController](touchcontroller/tctouchcontroller.md): An object that allows you to create and customize on-screen touch controls for a game that uses Metal.

### Controls

- [TCControl](touchcontroller/tccontrol.md): A protocol that defines the base properties and methods for all touch controls.
- [TCButton](touchcontroller/tcbutton.md): A control that represents a single on-screen button.
- [TCDirectionPad](touchcontroller/tcdirectionpad.md): An object that represents a direction pad.
- [TCSwitch](touchcontroller/tcswitch.md): A control that represents a single on-screen switch.
- [TCThumbstick](touchcontroller/tcthumbstick.md): Represents a single on-screen thumbstick.
- [TCThrottle](touchcontroller/tcthrottle.md): Represents a single on-screen throttle - a one axis input.
- [TCTouchpad](touchcontroller/tctouchpad.md): Represents a single on-screen touchpad that reports absolute coordinates or delta movements.

### Visuals

- [TCControlContents](touchcontroller/tccontrolcontents.md): Represents the visual contents of a touch control.
- [TCControlImage](touchcontroller/tccontrolimage.md): Represents an image to be rendered using Metal.
- [TCControlLayout](touchcontroller/tccontrollayout.md): A protocol defining the controlLayout properties for a control.

### System content

- [TCControlContents.ButtonShape](touchcontroller/tccontrolcontents/buttonshape.md): Defines the visual shape of a button.
- [TCControlContents.DpadDirection](touchcontroller/tccontrolcontents/dpaddirection.md): Defines the direction of a direction pad visual.
- [TCControlContents.DpadElementStyle](touchcontroller/tccontrolcontents/dpadelementstyle.md): Defines the visual style of the individual up/down/left/right elements of a direction pad.

# Touch Controller (Objective-C)

**Framework:** Touch Controller  
**Kind:** Framework  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Integrate onscreen touch controls into your Metal-based games.

<a id="overview"></a>

## Overview

Use Touch Controller to add custom and interactive touch controls for your games. The framework offers a suite of controls that enable support for a variety of control schemes, like buttons, directional pads, thumbsticks, throttle controls, and touchpads. The Game Controller framework supports each control and surfaces them through a [GCController](gamecontroller/gccontroller.md) instance.

Use the [TCTouchController](touchcontroller/tctouchcontroller.md) class as the central point to manage and render your touch controls. To configure the appearance of your controls, use [TCControlContents](touchcontroller/tccontrolcontents.md) and [TCControlImage](touchcontroller/tccontrolimage.md). Use [TCControlContents](touchcontroller/tccontrolcontents.md) to create a consistent look and feel with system-provided assets.

## Topics

### Essentials

- [TCTouchController](touchcontroller/tctouchcontroller.md): An object that allows you to create and customize on-screen touch controls for a game that uses Metal.

### Controls

- [TCControl](touchcontroller/tccontrol.md): A protocol that defines the base properties and methods for all touch controls.
- [TCButton](touchcontroller/tcbutton.md): A control that represents a single on-screen button.
- [TCDirectionPad](touchcontroller/tcdirectionpad.md): An object that represents a direction pad.
- [TCSwitch](touchcontroller/tcswitch.md): A control that represents a single on-screen switch.
- [TCThumbstick](touchcontroller/tcthumbstick.md): Represents a single on-screen thumbstick.
- [TCThrottle](touchcontroller/tcthrottle.md): Represents a single on-screen throttle - a one axis input.
- [TCTouchpad](touchcontroller/tctouchpad.md): Represents a single on-screen touchpad that reports absolute coordinates or delta movements.

### Visuals

- [TCControlContents](touchcontroller/tccontrolcontents.md): Represents the visual contents of a touch control.
- [TCControlImage](touchcontroller/tccontrolimage.md): Represents an image to be rendered using Metal.
- [TCControlLayout](touchcontroller/tccontrollayout.md): A protocol defining the controlLayout properties for a control.

### System content

- [TCControlContentsButtonShape](touchcontroller/tccontrolcontents/buttonshape.md): Defines the visual shape of a button.
- [TCControlContentsDpadDirection](touchcontroller/tccontrolcontents/dpaddirection.md): Defines the direction of a direction pad visual.
- [TCControlContentsDpadElementStyle](touchcontroller/tccontrolcontents/dpadelementstyle.md): Defines the visual style of the individual up/down/left/right elements of a direction pad.
