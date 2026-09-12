> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusdebugger/checkfocusability(for:)](https://developer.apple.com/documentation/uikit/uifocusdebugger/checkfocusability(for:))

# checkFocusability(for:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns information about whether the item can become focused, including any known issues that would prevent the item from becoming focused.

## Declaration

```swift
class func checkFocusability(for item: any UIFocusItem) -> any UIFocusDebuggerOutput
```

## Parameters

- `item`: The focus item to evaluate.

<a id="return-value"></a>

## Return Value

An object the focus debugger uses to store the results that it will format for display.

<a id="Discussion"></a>

## Discussion

Call this method from the `lldb` debugger using the following command. In the example, `item` corresponds to an object that adopts the [UIFocusItem](../uifocusitem.md) protocol.

**Swift**

```swift
po UIFocusDebugger.checkFocusability(for: item)
```

**Objective-C**

```objc
po [UIFocusDebugger checkFocusabilityForItem: item]
```

The method returns the focus-related information, including known issues.

## See Also

### Getting focus information

- [status()](status%28%29.md): Returns the state of the focus system, including information about the currently focused item.
- [focusGroups(for:)](focusgroups%28for_%29.md): Returns the focus group hierarchy for the specified environment object.
- [preferredFocusEnvironments(for:)](preferredfocusenvironments%28for_%29.md): Returns the hierarchy of preferred focus environments for the specified environment object.
- [simulateFocusUpdateRequest(from:)](simulatefocusupdaterequest%28from_%29.md): Simulates a focus update request from the specified environment.
- [UIFocusDebuggerOutput](../uifocusdebuggeroutput.md): An interface for specifying output from a focus debugger object.

# checkFocusabilityForItem: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns information about whether the item can become focused, including any known issues that would prevent the item from becoming focused.

## Declaration

```objectivec
+ (id<UIFocusDebuggerOutput>) checkFocusabilityForItem:(id<UIFocusItem>) item;
```

## Parameters

- `item`: The focus item to evaluate.

<a id="return-value"></a>

## Return Value

An object the focus debugger uses to store the results that it will format for display.

<a id="Discussion"></a>

## Discussion

Call this method from the `lldb` debugger using the following command. In the example, `item` corresponds to an object that adopts the [UIFocusItem](../uifocusitem.md) protocol.

**Swift**

```swift
po UIFocusDebugger.checkFocusability(for: item)
```

**Objective-C**

```objc
po [UIFocusDebugger checkFocusabilityForItem: item]
```

The method returns the focus-related information, including known issues.

## See Also

### Getting focus information

- [status](status%28%29.md): Returns the state of the focus system, including information about the currently focused item.
- [focusGroupsForEnvironment:](focusgroups%28for_%29.md): Returns the focus group hierarchy for the specified environment object.
- [preferredFocusEnvironmentsForEnvironment:](preferredfocusenvironments%28for_%29.md): Returns the hierarchy of preferred focus environments for the specified environment object.
- [simulateFocusUpdateRequestFromEnvironment:](simulatefocusupdaterequest%28from_%29.md): Simulates a focus update request from the specified environment.
- [UIFocusDebuggerOutput](../uifocusdebuggeroutput.md): An interface for specifying output from a focus debugger object.
