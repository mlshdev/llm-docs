> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quicklookui/qlpreviewpanel/delegate

# delegate (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The delegate object that controls the preview panel’s behavior.

## Declaration

```swift
unowned(unsafe) var delegate: AnyObject! { get set }
```

<a id="Discussion"></a>

## Discussion

The class assigned as the delegate should conform to the [QLPreviewPanelDelegate](../qlpreviewpaneldelegate.md) protocol.

# delegate (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The delegate object that controls the preview panel’s behavior.

## Declaration

```objectivec
@property (assign) id delegate;
```

<a id="Discussion"></a>

## Discussion

The class assigned as the delegate should conform to the [QLPreviewPanelDelegate](../qlpreviewpaneldelegate.md) protocol.
