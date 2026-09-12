> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkspace](https://developer.apple.com/documentation/automator/amworkspace)

# AMWorkspace (Swift)

**Framework:** Automator  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

A workspace for running an Automator workflow.

## Declaration

```swift
class AMWorkspace
```

<a id="overview"></a>

## Overview

The [AMWorkspace](amworkspace.md) class provides access to the shared workspace in the Automator framework, where you can run workflows without a workflow controller. Use [shared](amworkspace/shared.md) to access the shared workspace and [runWorkflow(atPath:withInput:)](amworkspace/runworkflow%28atpath_withinput_%29.md) to run your workflow in it.

## Topics

### Accessing the Shared Workspace

- [shared](amworkspace/shared.md): The shared workspace object.

### Running Workflows

- [runWorkflow(atPath:withInput:)](amworkspace/runworkflow%28atpath_withinput_%29.md): Loads and runs the specified workflow file.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Workflows

- [AMWorkflow](amworkflow.md): An object that lets you use an Automator workflow in your app.
- [AMWorkflowController](amworkflowcontroller.md): An object that lets you manage an Automator workflow in your app.
- [AMWorkflowView](amworkflowview.md): An object that lets you view and edit Automator workflows in your app.

# AMWorkspace (Objective-C)

**Framework:** Automator  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

A workspace for running an Automator workflow.

## Declaration

```objectivec
@interface AMWorkspace : NSObject
```

<a id="overview"></a>

## Overview

The [AMWorkspace](amworkspace.md) class provides access to the shared workspace in the Automator framework, where you can run workflows without a workflow controller. Use [sharedWorkspace](amworkspace/shared.md) to access the shared workspace and [runWorkflowAtPath:withInput:error:](amworkspace/runworkflow%28atpath_withinput_%29.md) to run your workflow in it.

## Topics

### Accessing the Shared Workspace

- [sharedWorkspace](amworkspace/shared.md): The shared workspace object.

### Running Workflows

- [runWorkflowAtPath:withInput:error:](amworkspace/runworkflow%28atpath_withinput_%29.md): Loads and runs the specified workflow file.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Workflows

- [AMWorkflow](amworkflow.md): An object that lets you use an Automator workflow in your app.
- [AMWorkflowController](amworkflowcontroller.md): An object that lets you manage an Automator workflow in your app.
- [AMWorkflowView](amworkflowview.md): An object that lets you view and edit Automator workflows in your app.
