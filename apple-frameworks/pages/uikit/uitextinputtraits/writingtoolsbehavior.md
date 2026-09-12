> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputtraits/writingtoolsbehavior](https://developer.apple.com/documentation/uikit/uitextinputtraits/writingtoolsbehavior)

# writingToolsBehavior (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.4+

The writing tools experience to support in the current view.

## Declaration

```swift
optional var writingToolsBehavior: UIWritingToolsBehavior { get set }
```

## Mentioned In

- [Customizing Writing Tools behavior for UIKit views](../customizing-writing-tools-behavior-for-system-views.md)

<a id="Discussion"></a>

## Discussion

Use this property to specify the type of experience to display when someone engages writing tools for a text input view. The system does its best to provide the requested UI, but might offer a more limited experience if required capabilities aren’t available. The default value of this property is [UIWritingToolsBehavior.default](../uiwritingtoolsbehavior/default.md), which lets the system choose the most appropriate experience for the current device.

Set the value of this property to [UIWritingToolsBehavior.none](../uiwritingtoolsbehavior/none.md) if you want to prevent someone from using the writing tools with your view.

## See Also

### Configuring the writing tools experience

- [UIWritingToolsBehavior](../uiwritingtoolsbehavior.md): Constants that specify the writing tools experience for the underlying view.

# writingToolsBehavior (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.4+

The writing tools experience to support in the current view.

## Declaration

```objectivec
@property UIWritingToolsBehavior writingToolsBehavior;
```

## Mentioned In

- [Customizing Writing Tools behavior for UIKit views](../customizing-writing-tools-behavior-for-system-views.md)

<a id="Discussion"></a>

## Discussion

Use this property to specify the type of experience to display when someone engages writing tools for a text input view. The system does its best to provide the requested UI, but might offer a more limited experience if required capabilities aren’t available. The default value of this property is [UIWritingToolsBehaviorDefault](../uiwritingtoolsbehavior/default.md), which lets the system choose the most appropriate experience for the current device.

Set the value of this property to [UIWritingToolsBehaviorNone](../uiwritingtoolsbehavior/none.md) if you want to prevent someone from using the writing tools with your view.

## See Also

### Configuring the writing tools experience

- [UIWritingToolsBehavior](../uiwritingtoolsbehavior.md): Constants that specify the writing tools experience for the underlying view.
