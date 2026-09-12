> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/resultoptions](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/resultoptions)

# resultOptions (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.2+

The type of content the system generates for your custom text view.

## Declaration

```swift
var resultOptions: NSWritingToolsResultOptions { get }
```

<a id="discussion"></a>

## Discussion

This property contains the set of options that Writing Tools outputs for your view. Writing Tools takes the value in the [preferredResultOptions](preferredresultoptions.md) property into consideration when determining this value.

## See Also

### Configuring the experience

- [preferredBehavior](preferredbehavior.md): The level of Writing Tools support you want the system to provide for your view.
- [behavior](behavior.md): The actual level of Writing Tools support the system provides for your view.
- [preferredResultOptions](preferredresultoptions.md): The type of content you allow Writing Tools to generate for your custom text view.

# resultOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.2+

The type of content the system generates for your custom text view.

## Declaration

```objectivec
@property (readonly) NSWritingToolsResultOptions resultOptions;
```

<a id="discussion"></a>

## Discussion

This property contains the set of options that Writing Tools outputs for your view. Writing Tools takes the value in the [preferredResultOptions](preferredresultoptions.md) property into consideration when determining this value.

## See Also

### Configuring the experience

- [preferredBehavior](preferredbehavior.md): The level of Writing Tools support you want the system to provide for your view.
- [behavior](behavior.md): The actual level of Writing Tools support the system provides for your view.
- [preferredResultOptions](preferredresultoptions.md): The type of content you allow Writing Tools to generate for your custom text view.
