> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator](https://developer.apple.com/documentation/automator)

# Automator (Swift)

**Framework:** Automator  
**Kind:** Framework  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Develop actions that the Automator app can load and run. View, edit, and run Automator workflows in your app.

<a id="overview"></a>

## Overview

The Automator framework supports the development of actions for the Automator app, as well as the ability to run a workflow in developer apps. An *action* is a bundle that, when loaded and run, performs a specific task, such as copying a file or cropping an image. Using Automator, users can construct and execute *workflows* consisting of a sequence of actions. Developers can also load and execute workflows in their apps. As a workflow executes, the output of one action is typically passed as the input to the next action. Automator loads action bundles from standard locations in the file system: `/System/Library/Automator`, `/Library/Automator`, and `~/Library/Automator`.

## Topics

### Actions

- [AMBundleAction](automator/ambundleaction.md): An object that represents an Automator action that’s a loadable bundle.
- [AMShellScriptAction](automator/amshellscriptaction.md): An object that represents Automator actions whose runtime behavior is driven by a shell script or by a Perl or Python script.
- [AMAction](automator/amaction.md): An abstract class that defines the interface and general characteristics of Automator actions.

### Workflows

- [AMWorkflow](automator/amworkflow.md): An object that lets you use an Automator workflow in your app.
- [AMWorkflowController](automator/amworkflowcontroller.md): An object that lets you manage an Automator workflow in your app.
- [AMWorkflowView](automator/amworkflowview.md): An object that lets you view and edit Automator workflows in your app.
- [AMWorkspace](automator/amworkspace.md): A workspace for running an Automator workflow.

### Errors

- [AMAutomatorErrorDomain](automator/amautomatorerrordomain.md): A string that identifies the Automator error domain.
- [AMActionErrorKey](automator/amactionerrorkey.md): A key to retrieve the action that caused an error.
- [AMError](automator/amerror.md): An Automator error.
- [AMError.Code](automator/amerror/code.md): Automator error codes.

### Deprecated

- [AMAppleScriptAction](automator/amapplescriptaction.md): Deprecated. An object that represents Automator actions whose runtime behavior is driven by an AppleScript script.

# Automator (Objective-C)

**Framework:** Automator  
**Kind:** Framework  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Develop actions that the Automator app can load and run. View, edit, and run Automator workflows in your app.

<a id="overview"></a>

## Overview

The Automator framework supports the development of actions for the Automator app, as well as the ability to run a workflow in developer apps. An *action* is a bundle that, when loaded and run, performs a specific task, such as copying a file or cropping an image. Using Automator, users can construct and execute *workflows* consisting of a sequence of actions. Developers can also load and execute workflows in their apps. As a workflow executes, the output of one action is typically passed as the input to the next action. Automator loads action bundles from standard locations in the file system: `/System/Library/Automator`, `/Library/Automator`, and `~/Library/Automator`.

## Topics

### Actions

- [AMBundleAction](automator/ambundleaction.md): An object that represents an Automator action that’s a loadable bundle.
- [AMShellScriptAction](automator/amshellscriptaction.md): An object that represents Automator actions whose runtime behavior is driven by a shell script or by a Perl or Python script.
- [AMAction](automator/amaction.md): An abstract class that defines the interface and general characteristics of Automator actions.

### Workflows

- [AMWorkflow](automator/amworkflow.md): An object that lets you use an Automator workflow in your app.
- [AMWorkflowController](automator/amworkflowcontroller.md): An object that lets you manage an Automator workflow in your app.
- [AMWorkflowView](automator/amworkflowview.md): An object that lets you view and edit Automator workflows in your app.
- [AMWorkspace](automator/amworkspace.md): A workspace for running an Automator workflow.

### Errors

- [AMAutomatorErrorDomain](automator/amautomatorerrordomain.md): A string that identifies the Automator error domain.
- [AMActionErrorKey](automator/amactionerrorkey.md): A key to retrieve the action that caused an error.
- [AMErrorCode](automator/amerror/code.md): Automator error codes.

### Deprecated

- [AMAppleScriptAction](automator/amapplescriptaction.md): Deprecated. An object that represents Automator actions whose runtime behavior is driven by an AppleScript script.

### Macros

- [AM_RETURNS_NONRETAINED_FOR_ANALYZER](automator/am_returns_nonretained_for_analyzer.md)
- [AM_RETURNS_RETAINED_FOR_ANALYZER](automator/am_returns_retained_for_analyzer.md)
- [AM_UNUSED_FOR_ANALYZER](automator/am_unused_for_analyzer.md)
