> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/preferredresultoptions](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/preferredresultoptions)

# preferredResultOptions (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.2+

The type of content you allow Writing Tools to generate for your custom text view.

## Declaration

```swift
var preferredResultOptions: NSWritingToolsResultOptions { get set }
```

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](../adding-writing-tools-support-to-a-custom-nsview.md)

<a id="discussion"></a>

## Discussion

Writing Tools can create plain text or rich text, and it can format text using lists or tables as needed. If your view doesn’t support specific types of content, specify the types you do support in this property. The default value of this property is `NSWritingToolsResultOptions/default`, which lets the system determine the type of content to generate.

## See Also

### Configuring the experience

- [preferredBehavior](preferredbehavior.md): The level of Writing Tools support you want the system to provide for your view.
- [behavior](behavior.md): The actual level of Writing Tools support the system provides for your view.
- [resultOptions](resultoptions.md): The type of content the system generates for your custom text view.

# preferredResultOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.2+

The type of content you allow Writing Tools to generate for your custom text view.

## Declaration

```objectivec
@property NSWritingToolsResultOptions preferredResultOptions;
```

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](../adding-writing-tools-support-to-a-custom-nsview.md)

<a id="discussion"></a>

## Discussion

Writing Tools can create plain text or rich text, and it can format text using lists or tables as needed. If your view doesn’t support specific types of content, specify the types you do support in this property. The default value of this property is `NSWritingToolsResultOptions/default`, which lets the system determine the type of content to generate.

## See Also

### Configuring the experience

- [preferredBehavior](preferredbehavior.md): The level of Writing Tools support you want the system to provide for your view.
- [behavior](behavior.md): The actual level of Writing Tools support the system provides for your view.
- [resultOptions](resultoptions.md): The type of content the system generates for your custom text view.
