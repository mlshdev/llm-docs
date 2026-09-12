> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/preferredbehavior](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/preferredbehavior)

# preferredBehavior (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.2+

The level of Writing Tools support you want the system to provide for your view.

## Declaration

```swift
var preferredBehavior: NSWritingToolsBehavior { get set }
```

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](../adding-writing-tools-support-to-a-custom-nsview.md)

<a id="discussion"></a>

## Discussion

Use this property to request an inline or panel-based experience, or to disable Writing Tools for your view altogether. The default value of this property is [NSWritingToolsBehavior.default](../nswritingtoolsbehavior/default.md).

## See Also

### Configuring the experience

- [behavior](behavior.md): The actual level of Writing Tools support the system provides for your view.
- [preferredResultOptions](preferredresultoptions.md): The type of content you allow Writing Tools to generate for your custom text view.
- [resultOptions](resultoptions.md): The type of content the system generates for your custom text view.

# preferredBehavior (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.2+

The level of Writing Tools support you want the system to provide for your view.

## Declaration

```objectivec
@property NSWritingToolsBehavior preferredBehavior;
```

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](../adding-writing-tools-support-to-a-custom-nsview.md)

<a id="discussion"></a>

## Discussion

Use this property to request an inline or panel-based experience, or to disable Writing Tools for your view altogether. The default value of this property is [NSWritingToolsBehaviorDefault](../nswritingtoolsbehavior/default.md).

## See Also

### Configuring the experience

- [behavior](behavior.md): The actual level of Writing Tools support the system provides for your view.
- [preferredResultOptions](preferredresultoptions.md): The type of content you allow Writing Tools to generate for your custom text view.
- [resultOptions](resultoptions.md): The type of content the system generates for your custom text view.
