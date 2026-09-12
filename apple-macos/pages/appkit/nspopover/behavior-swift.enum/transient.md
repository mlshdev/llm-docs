> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopover/behavior-swift.enum/transient](https://developer.apple.com/documentation/appkit/nspopover/behavior-swift.enum/transient)

# NSPopover.Behavior.transient (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

The system will close the popover when the user interacts with a user interface element outside the popover.

## Declaration

```swift
case transient
```

<a id="Discussion"></a>

## Discussion

Note that interacting with menus or panels that become key only when needed will not cause a transient popover to close. The exact interactions that will cause transient popovers to close are not specified.

## See Also

### Constants

- [NSPopover.Behavior.applicationDefined](applicationdefined.md): Your application assumes responsibility for closing the popover.
- [NSPopover.Behavior.semitransient](semitransient.md): The system will close the popover when the user interacts with user interface elements in the window containing the popover’s positioning view.

# NSPopoverBehaviorTransient (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

The system will close the popover when the user interacts with a user interface element outside the popover.

## Declaration

```objectivec
NSPopoverBehaviorTransient
```

<a id="Discussion"></a>

## Discussion

Note that interacting with menus or panels that become key only when needed will not cause a transient popover to close. The exact interactions that will cause transient popovers to close are not specified.

## See Also

### Constants

- [NSPopoverBehaviorApplicationDefined](applicationdefined.md): Your application assumes responsibility for closing the popover.
- [NSPopoverBehaviorSemitransient](semitransient.md): The system will close the popover when the user interacts with user interface elements in the window containing the popover’s positioning view.
