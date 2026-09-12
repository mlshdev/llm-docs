> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/preferredresultoptions](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/preferredresultoptions)

# preferredResultOptions (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The type of content you allow Writing Tools to generate for your custom text view.

## Declaration

```swift
var preferredResultOptions: UIWritingToolsResultOptions { get set }
```

## Mentioned In

- [Adding Writing Tools support to a custom UIKit view](../adding-writing-tools-support-to-a-custom-uiview.md)

<a id="discussion"></a>

## Discussion

Writing Tools can create plain text or rich text, and it can format text using lists or tables as needed. If your view doesn’t support specific types of content, specify the types you do support in this property. The default value of this property is `UIWritingToolsResultOptions/default`, which lets the system determine the type of content to generate.

## See Also

### Configuring the experience

- [preferredBehavior](preferredbehavior.md): The level of Writing Tools support you want the system to provide for your view.
- [behavior](behavior.md): The actual level of Writing Tools support the system provides for your view.
- [resultOptions](resultoptions.md): The type of content the system generates for your custom text view.

# preferredResultOptions (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The type of content you allow Writing Tools to generate for your custom text view.

## Declaration

```objectivec
@property (nonatomic) UIWritingToolsResultOptions preferredResultOptions;
```

## Mentioned In

- [Adding Writing Tools support to a custom UIKit view](../adding-writing-tools-support-to-a-custom-uiview.md)

<a id="discussion"></a>

## Discussion

Writing Tools can create plain text or rich text, and it can format text using lists or tables as needed. If your view doesn’t support specific types of content, specify the types you do support in this property. The default value of this property is `UIWritingToolsResultOptions/default`, which lets the system determine the type of content to generate.

## See Also

### Configuring the experience

- [preferredBehavior](preferredbehavior.md): The level of Writing Tools support you want the system to provide for your view.
- [behavior](behavior.md): The actual level of Writing Tools support the system provides for your view.
- [resultOptions](resultoptions.md): The type of content the system generates for your custom text view.
