> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/preferredbehavior](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/preferredbehavior)

# preferredBehavior (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The level of Writing Tools support you want the system to provide for your view.

## Declaration

```swift
var preferredBehavior: UIWritingToolsBehavior { get set }
```

## Mentioned In

- [Adding Writing Tools support to a custom UIKit view](../adding-writing-tools-support-to-a-custom-uiview.md)

<a id="discussion"></a>

## Discussion

Use this property to request an inline or panel-based experience, or to disable Writing Tools for your view altogether. The default value of this property is [UIWritingToolsBehavior.default](../uiwritingtoolsbehavior/default.md).

## See Also

### Configuring the experience

- [behavior](behavior.md): The actual level of Writing Tools support the system provides for your view.
- [preferredResultOptions](preferredresultoptions.md): The type of content you allow Writing Tools to generate for your custom text view.
- [resultOptions](resultoptions.md): The type of content the system generates for your custom text view.

# preferredBehavior (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The level of Writing Tools support you want the system to provide for your view.

## Declaration

```objectivec
@property (nonatomic) UIWritingToolsBehavior preferredBehavior;
```

## Mentioned In

- [Adding Writing Tools support to a custom UIKit view](../adding-writing-tools-support-to-a-custom-uiview.md)

<a id="discussion"></a>

## Discussion

Use this property to request an inline or panel-based experience, or to disable Writing Tools for your view altogether. The default value of this property is [UIWritingToolsBehaviorDefault](../uiwritingtoolsbehavior/default.md).

## See Also

### Configuring the experience

- [behavior](behavior.md): The actual level of Writing Tools support the system provides for your view.
- [preferredResultOptions](preferredresultoptions.md): The type of content you allow Writing Tools to generate for your custom text view.
- [resultOptions](resultoptions.md): The type of content the system generates for your custom text view.
