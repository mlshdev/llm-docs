> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusdebugger/status()](https://developer.apple.com/documentation/uikit/uifocusdebugger/status())

# status() (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns the state of the focus system, including information about the currently focused item.

## Declaration

```swift
class func status() -> any UIFocusDebuggerOutput
```

<a id="return-value"></a>

## Return Value

An object the focus debugger uses to output information to the debugger console.

<a id="Discussion"></a>

## Discussion

Call this method from the `lldb` debugger using the following command:

**Swift**

```swift
po UIFocusDebugger.status()
```

**Objective-C**

```objc
po [UIFocusDebugger status]
```

The method returns information about the focus system and the currently focused item.

## See Also

### Getting focus information

- [checkFocusability(for:)](checkfocusability%28for_%29.md): Returns information about whether the item can become focused, including any known issues that would prevent the item from becoming focused.
- [focusGroups(for:)](focusgroups%28for_%29.md): Returns the focus group hierarchy for the specified environment object.
- [preferredFocusEnvironments(for:)](preferredfocusenvironments%28for_%29.md): Returns the hierarchy of preferred focus environments for the specified environment object.
- [simulateFocusUpdateRequest(from:)](simulatefocusupdaterequest%28from_%29.md): Simulates a focus update request from the specified environment.
- [UIFocusDebuggerOutput](../uifocusdebuggeroutput.md): An interface for specifying output from a focus debugger object.

# status (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns the state of the focus system, including information about the currently focused item.

## Declaration

```objectivec
+ (id<UIFocusDebuggerOutput>) status;
```

<a id="return-value"></a>

## Return Value

An object the focus debugger uses to output information to the debugger console.

<a id="Discussion"></a>

## Discussion

Call this method from the `lldb` debugger using the following command:

**Swift**

```swift
po UIFocusDebugger.status()
```

**Objective-C**

```objc
po [UIFocusDebugger status]
```

The method returns information about the focus system and the currently focused item.

## See Also

### Getting focus information

- [checkFocusabilityForItem:](checkfocusability%28for_%29.md): Returns information about whether the item can become focused, including any known issues that would prevent the item from becoming focused.
- [focusGroupsForEnvironment:](focusgroups%28for_%29.md): Returns the focus group hierarchy for the specified environment object.
- [preferredFocusEnvironmentsForEnvironment:](preferredfocusenvironments%28for_%29.md): Returns the hierarchy of preferred focus environments for the specified environment object.
- [simulateFocusUpdateRequestFromEnvironment:](simulatefocusupdaterequest%28from_%29.md): Simulates a focus update request from the specified environment.
- [UIFocusDebuggerOutput](../uifocusdebuggeroutput.md): An interface for specifying output from a focus debugger object.
