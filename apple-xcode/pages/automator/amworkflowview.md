> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkflowview](https://developer.apple.com/documentation/automator/amworkflowview)

# AMWorkflowView (Swift)

**Framework:** Automator  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

An object that lets you view and edit Automator workflows in your app.

## Declaration

```swift
class AMWorkflowView
```

<a id="overview"></a>

## Overview

A workflow view displays an instance of [AMWorkflow](amworkflow.md).

You can use Interface Builder to add an instance of [AMWorkflowView](amworkflowview.md) to a window in your app. You can then add an [AMWorkflowView](amworkflowview.md) object to the nib window and use the controller’s [workflowView](amworkflowcontroller/workflowview-swift.property.md) outlet to connect it to the workflow view. The controller object also has [run(\_:)](amworkflowcontroller/run%28__%29.md) and [stop(\_:)](amworkflowcontroller/stop%28__%29.md) actions that can be connected to buttons or other user interface elements.

## Topics

### Configuring the Workflow View

- [isEditable](amworkflowview/iseditable.md): A Boolean value that indicates whether the workflow view is editable.
- [workflowController](amworkflowview/workflowcontroller.md): The view’s workflow controller.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol)
- [NSAccessibilityProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol)
- [NSAnimatablePropertyContainer](https://developer.apple.com/documentation/appkit/nsanimatablepropertycontainer)
- [NSAppearanceCustomization](https://developer.apple.com/documentation/appkit/nsappearancecustomization)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](https://developer.apple.com/documentation/appkit/nsdraggingdestination)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)

## See Also

### Workflows

- [AMWorkflow](amworkflow.md): An object that lets you use an Automator workflow in your app.
- [AMWorkflowController](amworkflowcontroller.md): An object that lets you manage an Automator workflow in your app.
- [AMWorkspace](amworkspace.md): A workspace for running an Automator workflow.

# AMWorkflowView (Objective-C)

**Framework:** Automator  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

An object that lets you view and edit Automator workflows in your app.

## Declaration

```objectivec
@interface AMWorkflowView : NSView
```

<a id="overview"></a>

## Overview

A workflow view displays an instance of [AMWorkflow](amworkflow.md).

You can use Interface Builder to add an instance of [AMWorkflowView](amworkflowview.md) to a window in your app. You can then add an [AMWorkflowView](amworkflowview.md) object to the nib window and use the controller’s [workflowView](amworkflowcontroller/workflowview-swift.property.md) outlet to connect it to the workflow view. The controller object also has [run:](amworkflowcontroller/run%28__%29.md) and [stop:](amworkflowcontroller/stop%28__%29.md) actions that can be connected to buttons or other user interface elements.

## Topics

### Configuring the Workflow View

- [editable](amworkflowview/iseditable.md): A Boolean value that indicates whether the workflow view is editable.
- [workflowController](amworkflowview/workflowcontroller.md): The view’s workflow controller.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)

## See Also

### Workflows

- [AMWorkflow](amworkflow.md): An object that lets you use an Automator workflow in your app.
- [AMWorkflowController](amworkflowcontroller.md): An object that lets you manage an Automator workflow in your app.
- [AMWorkspace](amworkspace.md): A workspace for running an Automator workflow.
