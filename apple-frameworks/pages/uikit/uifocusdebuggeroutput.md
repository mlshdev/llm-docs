> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusdebuggeroutput](https://developer.apple.com/documentation/uikit/uifocusdebuggeroutput)

# UIFocusDebuggerOutput (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

An interface for specifying output from a focus debugger object.

## Declaration

```swift
@MainActor protocol UIFocusDebuggerOutput : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Don’t use this protocol directly in your code. When debugging your app from the `lldb` command line, the methods of [UIFocusDebugger](uifocusdebugger.md) output their results to an object that adopts this protocol. The debugger takes the output and formats it for display.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Getting focus information

- [status()](uifocusdebugger/status%28%29.md): Returns the state of the focus system, including information about the currently focused item.
- [checkFocusability(for:)](uifocusdebugger/checkfocusability%28for_%29.md): Returns information about whether the item can become focused, including any known issues that would prevent the item from becoming focused.
- [focusGroups(for:)](uifocusdebugger/focusgroups%28for_%29.md): Returns the focus group hierarchy for the specified environment object.
- [preferredFocusEnvironments(for:)](uifocusdebugger/preferredfocusenvironments%28for_%29.md): Returns the hierarchy of preferred focus environments for the specified environment object.
- [simulateFocusUpdateRequest(from:)](uifocusdebugger/simulatefocusupdaterequest%28from_%29.md): Simulates a focus update request from the specified environment.

# UIFocusDebuggerOutput (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

An interface for specifying output from a focus debugger object.

## Declaration

```objectivec
@protocol UIFocusDebuggerOutput <NSObject>
```

<a id="overview"></a>

## Overview

Don’t use this protocol directly in your code. When debugging your app from the `lldb` command line, the methods of [UIFocusDebugger](uifocusdebugger.md) output their results to an object that adopts this protocol. The debugger takes the output and formats it for display.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Getting focus information

- [status](uifocusdebugger/status%28%29.md): Returns the state of the focus system, including information about the currently focused item.
- [checkFocusabilityForItem:](uifocusdebugger/checkfocusability%28for_%29.md): Returns information about whether the item can become focused, including any known issues that would prevent the item from becoming focused.
- [focusGroupsForEnvironment:](uifocusdebugger/focusgroups%28for_%29.md): Returns the focus group hierarchy for the specified environment object.
- [preferredFocusEnvironmentsForEnvironment:](uifocusdebugger/preferredfocusenvironments%28for_%29.md): Returns the hierarchy of preferred focus environments for the specified environment object.
- [simulateFocusUpdateRequestFromEnvironment:](uifocusdebugger/simulatefocusupdaterequest%28from_%29.md): Simulates a focus update request from the specified environment.
