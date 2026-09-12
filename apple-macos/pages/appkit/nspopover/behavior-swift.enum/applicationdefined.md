> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopover/behavior-swift.enum/applicationdefined](https://developer.apple.com/documentation/appkit/nspopover/behavior-swift.enum/applicationdefined)

# NSPopover.Behavior.applicationDefined (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

Your application assumes responsibility for closing the popover.

## Declaration

```swift
case applicationDefined
```

<a id="Discussion"></a>

## Discussion

The system will still close the popover in a limited number of circumstances. For instance, the system will attempt to close the popover when the window of its positioningView is closed. The exact interactions in which AppKit will close the popover are not guaranteed. You may consider implementing -cancel: to close the popover when the escape key is pressed.

## See Also

### Constants

- [NSPopover.Behavior.transient](transient.md): The system will close the popover when the user interacts with a user interface element outside the popover.
- [NSPopover.Behavior.semitransient](semitransient.md): The system will close the popover when the user interacts with user interface elements in the window containing the popover’s positioning view.

# NSPopoverBehaviorApplicationDefined (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

Your application assumes responsibility for closing the popover.

## Declaration

```objectivec
NSPopoverBehaviorApplicationDefined
```

<a id="Discussion"></a>

## Discussion

The system will still close the popover in a limited number of circumstances. For instance, the system will attempt to close the popover when the window of its positioningView is closed. The exact interactions in which AppKit will close the popover are not guaranteed. You may consider implementing -cancel: to close the popover when the escape key is pressed.

## See Also

### Constants

- [NSPopoverBehaviorTransient](transient.md): The system will close the popover when the user interacts with a user interface element outside the popover.
- [NSPopoverBehaviorSemitransient](semitransient.md): The system will close the popover when the user interacts with user interface elements in the window containing the popover’s positioning view.
