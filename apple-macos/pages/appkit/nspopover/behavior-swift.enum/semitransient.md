> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopover/behavior-swift.enum/semitransient](https://developer.apple.com/documentation/appkit/nspopover/behavior-swift.enum/semitransient)

# NSPopover.Behavior.semitransient (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

The system will close the popover when the user interacts with user interface elements in the window containing the popover’s positioning view.

## Declaration

```swift
case semitransient
```

<a id="Discussion"></a>

## Discussion

Semi-transient popovers cannot be shown relative to views in other popovers, nor can they be shown relative to views in child windows. The exact interactions that cause semi-transient popovers to close are not specified.

## See Also

### Constants

- [NSPopover.Behavior.applicationDefined](applicationdefined.md): Your application assumes responsibility for closing the popover.
- [NSPopover.Behavior.transient](transient.md): The system will close the popover when the user interacts with a user interface element outside the popover.

# NSPopoverBehaviorSemitransient (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

The system will close the popover when the user interacts with user interface elements in the window containing the popover’s positioning view.

## Declaration

```objectivec
NSPopoverBehaviorSemitransient
```

<a id="Discussion"></a>

## Discussion

Semi-transient popovers cannot be shown relative to views in other popovers, nor can they be shown relative to views in child windows. The exact interactions that cause semi-transient popovers to close are not specified.

## See Also

### Constants

- [NSPopoverBehaviorApplicationDefined](applicationdefined.md): Your application assumes responsibility for closing the popover.
- [NSPopoverBehaviorTransient](transient.md): The system will close the popover when the user interacts with a user interface element outside the popover.
