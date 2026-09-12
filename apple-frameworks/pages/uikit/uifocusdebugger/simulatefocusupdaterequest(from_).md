> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusdebugger/simulatefocusupdaterequest(from:)](https://developer.apple.com/documentation/uikit/uifocusdebugger/simulatefocusupdaterequest(from:))

# simulateFocusUpdateRequest(from:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Simulates a focus update request from the specified environment.

## Declaration

```swift
class func simulateFocusUpdateRequest(from environment: any UIFocusEnvironment) -> any UIFocusDebuggerOutput
```

## Parameters

- `environment`: The object you want to generate a request for. Specify the focus system, view, view controller, or window whose state you want. You can also specify any other object that adopts the [UIFocusEnvironment](../uifocusenvironment.md) protocol.

<a id="return-value"></a>

## Return Value

The [UIFocusDebuggerOutput](../uifocusdebuggeroutput.md) object the focus debugger uses to output the diagnostic information to the debugger console.

<a id="Discussion"></a>

## Discussion

Call this method from the `lldb` debugger using the following command. In the example, `obj` corresponds to an object that adopts the [UIFocusEnvironment](../uifocusenvironment.md) protocol.

**Swift**

```swift
po UIFocusDebugger.simulateFocusUpdateRequest(from: obj)
```

**Objective-C**

```objc
po [UIFocusDebugger simulateFocusUpdateRequestFromEnvironment: obj]
```

The method simulates a focus update request, outlining each step of the process for determining the next focused item.

## See Also

### Getting focus information

- [status()](status%28%29.md): Returns the state of the focus system, including information about the currently focused item.
- [checkFocusability(for:)](checkfocusability%28for_%29.md): Returns information about whether the item can become focused, including any known issues that would prevent the item from becoming focused.
- [focusGroups(for:)](focusgroups%28for_%29.md): Returns the focus group hierarchy for the specified environment object.
- [preferredFocusEnvironments(for:)](preferredfocusenvironments%28for_%29.md): Returns the hierarchy of preferred focus environments for the specified environment object.
- [UIFocusDebuggerOutput](../uifocusdebuggeroutput.md): An interface for specifying output from a focus debugger object.

# simulateFocusUpdateRequestFromEnvironment: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Simulates a focus update request from the specified environment.

## Declaration

```objectivec
+ (id<UIFocusDebuggerOutput>) simulateFocusUpdateRequestFromEnvironment:(id<UIFocusEnvironment>) environment;
```

## Parameters

- `environment`: The object you want to generate a request for. Specify the focus system, view, view controller, or window whose state you want. You can also specify any other object that adopts the [UIFocusEnvironment](../uifocusenvironment.md) protocol.

<a id="return-value"></a>

## Return Value

The [UIFocusDebuggerOutput](../uifocusdebuggeroutput.md) object the focus debugger uses to output the diagnostic information to the debugger console.

<a id="Discussion"></a>

## Discussion

Call this method from the `lldb` debugger using the following command. In the example, `obj` corresponds to an object that adopts the [UIFocusEnvironment](../uifocusenvironment.md) protocol.

**Swift**

```swift
po UIFocusDebugger.simulateFocusUpdateRequest(from: obj)
```

**Objective-C**

```objc
po [UIFocusDebugger simulateFocusUpdateRequestFromEnvironment: obj]
```

The method simulates a focus update request, outlining each step of the process for determining the next focused item.

## See Also

### Getting focus information

- [status](status%28%29.md): Returns the state of the focus system, including information about the currently focused item.
- [checkFocusabilityForItem:](checkfocusability%28for_%29.md): Returns information about whether the item can become focused, including any known issues that would prevent the item from becoming focused.
- [focusGroupsForEnvironment:](focusgroups%28for_%29.md): Returns the focus group hierarchy for the specified environment object.
- [preferredFocusEnvironmentsForEnvironment:](preferredfocusenvironments%28for_%29.md): Returns the hierarchy of preferred focus environments for the specified environment object.
- [UIFocusDebuggerOutput](../uifocusdebuggeroutput.md): An interface for specifying output from a focus debugger object.
