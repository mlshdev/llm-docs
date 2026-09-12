> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusdebugger](https://developer.apple.com/documentation/uikit/uifocusdebugger)

# UIFocusDebugger (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A runtime object for debugging focus-related interactions.

## Declaration

```swift
@MainActor class UIFocusDebugger
```

## Mentioned In

- [Debugging focus issues in your app](debugging-focus-issues-in-your-app.md)

<a id="overview"></a>

## Overview

You do not use this class or its methods directly from your code. During a debugging session, you can call the methods of this class from the `lldb` debugger command line to obtain information about the current state of the focus system.

## Topics

### Getting help

- [help()](uifocusdebugger/help%28%29.md): Returns information about how to use the commands of the debugger object.

### Getting focus information

- [status()](uifocusdebugger/status%28%29.md): Returns the state of the focus system, including information about the currently focused item.
- [checkFocusability(for:)](uifocusdebugger/checkfocusability%28for_%29.md): Returns information about whether the item can become focused, including any known issues that would prevent the item from becoming focused.
- [focusGroups(for:)](uifocusdebugger/focusgroups%28for_%29.md): Returns the focus group hierarchy for the specified environment object.
- [preferredFocusEnvironments(for:)](uifocusdebugger/preferredfocusenvironments%28for_%29.md): Returns the hierarchy of preferred focus environments for the specified environment object.
- [simulateFocusUpdateRequest(from:)](uifocusdebugger/simulatefocusupdaterequest%28from_%29.md): Simulates a focus update request from the specified environment.
- [UIFocusDebuggerOutput](uifocusdebuggeroutput.md): An interface for specifying output from a focus debugger object.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Focus debugging

- [Debugging focus issues in your app](debugging-focus-issues-in-your-app.md): Find errors and determine why the next focused item isn’t what you expected.

# UIFocusDebugger (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A runtime object for debugging focus-related interactions.

## Declaration

```objectivec
@interface UIFocusDebugger : NSObject
```

## Mentioned In

- [Debugging focus issues in your app](debugging-focus-issues-in-your-app.md)

<a id="overview"></a>

## Overview

You do not use this class or its methods directly from your code. During a debugging session, you can call the methods of this class from the `lldb` debugger command line to obtain information about the current state of the focus system.

## Topics

### Getting help

- [help](uifocusdebugger/help%28%29.md): Returns information about how to use the commands of the debugger object.

### Getting focus information

- [status](uifocusdebugger/status%28%29.md): Returns the state of the focus system, including information about the currently focused item.
- [checkFocusabilityForItem:](uifocusdebugger/checkfocusability%28for_%29.md): Returns information about whether the item can become focused, including any known issues that would prevent the item from becoming focused.
- [focusGroupsForEnvironment:](uifocusdebugger/focusgroups%28for_%29.md): Returns the focus group hierarchy for the specified environment object.
- [preferredFocusEnvironmentsForEnvironment:](uifocusdebugger/preferredfocusenvironments%28for_%29.md): Returns the hierarchy of preferred focus environments for the specified environment object.
- [simulateFocusUpdateRequestFromEnvironment:](uifocusdebugger/simulatefocusupdaterequest%28from_%29.md): Simulates a focus update request from the specified environment.
- [UIFocusDebuggerOutput](uifocusdebuggeroutput.md): An interface for specifying output from a focus debugger object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Focus debugging

- [Debugging focus issues in your app](debugging-focus-issues-in-your-app.md): Find errors and determine why the next focused item isn’t what you expected.
