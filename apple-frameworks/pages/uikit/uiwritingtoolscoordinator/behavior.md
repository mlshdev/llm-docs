> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/behavior](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/behavior)

# behavior (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The actual level of Writing Tools support the system provides for your view.

## Declaration

```swift
var behavior: UIWritingToolsBehavior { get }
```

<a id="discussion"></a>

## Discussion

The system chooses this value based on the device capabilities, and takes the value in the [preferredBehavior](preferredbehavior.md) property into consideration when making the choice. The value in this property is never the default option, and is instead one of the specific options such as [UIWritingToolsBehavior.none](../uiwritingtoolsbehavior/none.md), [UIWritingToolsBehavior.limited](../uiwritingtoolsbehavior/limited.md), or [UIWritingToolsBehavior.complete](../uiwritingtoolsbehavior/complete.md).

## See Also

### Configuring the experience

- [preferredBehavior](preferredbehavior.md): The level of Writing Tools support you want the system to provide for your view.
- [preferredResultOptions](preferredresultoptions.md): The type of content you allow Writing Tools to generate for your custom text view.
- [resultOptions](resultoptions.md): The type of content the system generates for your custom text view.

# behavior (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The actual level of Writing Tools support the system provides for your view.

## Declaration

```objectivec
@property (nonatomic, readonly) UIWritingToolsBehavior behavior;
```

<a id="discussion"></a>

## Discussion

The system chooses this value based on the device capabilities, and takes the value in the [preferredBehavior](preferredbehavior.md) property into consideration when making the choice. The value in this property is never the default option, and is instead one of the specific options such as [UIWritingToolsBehaviorNone](../uiwritingtoolsbehavior/none.md), [UIWritingToolsBehaviorLimited](../uiwritingtoolsbehavior/limited.md), or [UIWritingToolsBehaviorComplete](../uiwritingtoolsbehavior/complete.md).

## See Also

### Configuring the experience

- [preferredBehavior](preferredbehavior.md): The level of Writing Tools support you want the system to provide for your view.
- [preferredResultOptions](preferredresultoptions.md): The type of content you allow Writing Tools to generate for your custom text view.
- [resultOptions](resultoptions.md): The type of content the system generates for your custom text view.
