> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nswindowtab/tooltip

# toolTip (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The tooltip for this window tab.

## Declaration

```swift
var toolTip: String! { get set }
```

<a id="Discussion"></a>

## Discussion

By default, the window tab’s tooltip displays its [title](title.md) string. Once customized, setting the [toolTip](tooltip.md) property to [nil](https://developer.apple.com/documentation/objectivec/nil-227m0) causes it to follow the [title](title.md) property again.

# toolTip (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The tooltip for this window tab.

## Declaration

```objectivec
@property (copy, null_resettable) NSString * toolTip;
```

<a id="Discussion"></a>

## Discussion

By default, the window tab’s tooltip displays its [title](title.md) string. Once customized, setting the [toolTip](tooltip.md) property to [nil](https://developer.apple.com/documentation/objectivec/nil-227m0) causes it to follow the [title](title.md) property again.
