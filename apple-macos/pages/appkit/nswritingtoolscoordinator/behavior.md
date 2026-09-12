> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/behavior](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/behavior)

# behavior (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.2+

The actual level of Writing Tools support the system provides for your view.

## Declaration

```swift
var behavior: NSWritingToolsBehavior { get }
```

<a id="discussion"></a>

## Discussion

The system chooses this value based on the device capabilities, and takes the value in the [preferredBehavior](preferredbehavior.md) property into consideration when making the choice. The value in this property is never the default option, and is instead one of the specific options such as [NSWritingToolsBehavior.none](../nswritingtoolsbehavior/none.md), [NSWritingToolsBehavior.limited](../nswritingtoolsbehavior/limited.md), or [NSWritingToolsBehavior.complete](../nswritingtoolsbehavior/complete.md).

## See Also

### Configuring the experience

- [preferredBehavior](preferredbehavior.md): The level of Writing Tools support you want the system to provide for your view.
- [preferredResultOptions](preferredresultoptions.md): The type of content you allow Writing Tools to generate for your custom text view.
- [resultOptions](resultoptions.md): The type of content the system generates for your custom text view.

# behavior (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.2+

The actual level of Writing Tools support the system provides for your view.

## Declaration

```objectivec
@property (readonly) NSWritingToolsBehavior behavior;
```

<a id="discussion"></a>

## Discussion

The system chooses this value based on the device capabilities, and takes the value in the [preferredBehavior](preferredbehavior.md) property into consideration when making the choice. The value in this property is never the default option, and is instead one of the specific options such as [NSWritingToolsBehaviorNone](../nswritingtoolsbehavior/none.md), [NSWritingToolsBehaviorLimited](../nswritingtoolsbehavior/limited.md), or [NSWritingToolsBehaviorComplete](../nswritingtoolsbehavior/complete.md).

## See Also

### Configuring the experience

- [preferredBehavior](preferredbehavior.md): The level of Writing Tools support you want the system to provide for your view.
- [preferredResultOptions](preferredresultoptions.md): The type of content you allow Writing Tools to generate for your custom text view.
- [resultOptions](resultoptions.md): The type of content the system generates for your custom text view.
