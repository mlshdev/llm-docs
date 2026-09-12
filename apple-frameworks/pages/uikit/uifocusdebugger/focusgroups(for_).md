> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusdebugger/focusgroups(for:)](https://developer.apple.com/documentation/uikit/uifocusdebugger/focusgroups(for:))

# focusGroups(for:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns the focus group hierarchy for the specified environment object.

## Declaration

```swift
class func focusGroups(for environment: any UIFocusEnvironment) -> any UIFocusDebuggerOutput
```

## Parameters

- `environment`: The object you want to generate a focus group hierarchy for. Specify the focus system, view, view controller, or window whose state you want. You can also specify any other object that adopts the [UIFocusEnvironment](../uifocusenvironment.md) protocol.

<a id="return-value"></a>

## Return Value

An object the focus debugger uses to store the results that it formats for display.

<a id="Discussion"></a>

## Discussion

Call this method from the `lldb` debugger using the following command. In the example, `obj` corresponds to an object that adopts the [UIFocusEnvironment](../uifocusenvironment.md) protocol.

**Swift**

```swift
po UIFocusDebugger.focusGroups(for: obj)
```

**Objective-C**

```objc
po [UIFocusDebugger focusGroupsForEnvironment:obj]
```

The method returns the full hierarchy of focus groups for the focus environment object provided.

> **Note**

>  This method replaces the `checkFocusGroup(for:)` method, which is functionally equivalent.

## See Also

### Getting focus information

- [status()](status%28%29.md): Returns the state of the focus system, including information about the currently focused item.
- [checkFocusability(for:)](checkfocusability%28for_%29.md): Returns information about whether the item can become focused, including any known issues that would prevent the item from becoming focused.
- [preferredFocusEnvironments(for:)](preferredfocusenvironments%28for_%29.md): Returns the hierarchy of preferred focus environments for the specified environment object.
- [simulateFocusUpdateRequest(from:)](simulatefocusupdaterequest%28from_%29.md): Simulates a focus update request from the specified environment.
- [UIFocusDebuggerOutput](../uifocusdebuggeroutput.md): An interface for specifying output from a focus debugger object.

# focusGroupsForEnvironment: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns the focus group hierarchy for the specified environment object.

## Declaration

```objectivec
+ (id<UIFocusDebuggerOutput>) focusGroupsForEnvironment:(id<UIFocusEnvironment>) environment;
```

## Parameters

- `environment`: The object you want to generate a focus group hierarchy for. Specify the focus system, view, view controller, or window whose state you want. You can also specify any other object that adopts the [UIFocusEnvironment](../uifocusenvironment.md) protocol.

<a id="return-value"></a>

## Return Value

An object the focus debugger uses to store the results that it formats for display.

<a id="Discussion"></a>

## Discussion

Call this method from the `lldb` debugger using the following command. In the example, `obj` corresponds to an object that adopts the [UIFocusEnvironment](../uifocusenvironment.md) protocol.

**Swift**

```swift
po UIFocusDebugger.focusGroups(for: obj)
```

**Objective-C**

```objc
po [UIFocusDebugger focusGroupsForEnvironment:obj]
```

The method returns the full hierarchy of focus groups for the focus environment object provided.

> **Note**

>  This method replaces the `checkFocusGroup(for:)` method, which is functionally equivalent.

## See Also

### Getting focus information

- [status](status%28%29.md): Returns the state of the focus system, including information about the currently focused item.
- [checkFocusabilityForItem:](checkfocusability%28for_%29.md): Returns information about whether the item can become focused, including any known issues that would prevent the item from becoming focused.
- [preferredFocusEnvironmentsForEnvironment:](preferredfocusenvironments%28for_%29.md): Returns the hierarchy of preferred focus environments for the specified environment object.
- [simulateFocusUpdateRequestFromEnvironment:](simulatefocusupdaterequest%28from_%29.md): Simulates a focus update request from the specified environment.
- [UIFocusDebuggerOutput](../uifocusdebuggeroutput.md): An interface for specifying output from a focus debugger object.
