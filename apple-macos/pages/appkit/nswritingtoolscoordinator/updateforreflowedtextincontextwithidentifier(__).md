> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/updateforreflowedtextincontextwithidentifier(_:)](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/updateforreflowedtextincontextwithidentifier(_:))

# updateForReflowedTextInContextWithIdentifier(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.2+

Informs the coordinator that a change occurred to the view or its text that requires a layout update.

## Declaration

```swift
func updateForReflowedTextInContextWithIdentifier(_ contextID: UUID)
```

## Parameters

- `contextID`: The unique identifier of the context object affected by the change. Pass the identifier for the context object that comes after the changes.

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](../adding-writing-tools-support-to-a-custom-nsview.md)

<a id="discussion"></a>

## Discussion

Use this method to inform Writing Tools when the geometry of your view changes, or when the text that precedes one of your context objects changes. Changes to the view’s geometry or text can affect the flow of any remaining text, and require a layout update. Writing Tools uses this method to refresh any layout-dependent information it’s currently tracking. For example, it uses it to refresh the location of proofreading marks it’s displaying in your view.

If a text change affects the text inside a context object, call the [updateRange(\_:with:reason:forContextWithIdentifier:)](updaterange%28__with_reason_forcontextwithidentifier_%29.md) method to report that change instead.

## See Also

### Reporting changes to Writing Tools

- [updateRange(\_:with:reason:forContextWithIdentifier:)](updaterange%28__with_reason_forcontextwithidentifier_%29.md): Informs the coordinator about changes your app made to the text in the specified context object.
- [NSWritingToolsCoordinator.TextUpdateReason](textupdatereason.md): Constants that specify the reason you updated your view’s content outside of the Writing Tools workflow.

# updateForReflowedTextInContextWithIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.2+

Informs the coordinator that a change occurred to the view or its text that requires a layout update.

## Declaration

```objectivec
- (void) updateForReflowedTextInContextWithIdentifier:(NSUUID *) contextID;
```

## Parameters

- `contextID`: The unique identifier of the context object affected by the change. Pass the identifier for the context object that comes after the changes.

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](../adding-writing-tools-support-to-a-custom-nsview.md)

<a id="discussion"></a>

## Discussion

Use this method to inform Writing Tools when the geometry of your view changes, or when the text that precedes one of your context objects changes. Changes to the view’s geometry or text can affect the flow of any remaining text, and require a layout update. Writing Tools uses this method to refresh any layout-dependent information it’s currently tracking. For example, it uses it to refresh the location of proofreading marks it’s displaying in your view.

If a text change affects the text inside a context object, call the [updateRange:withText:reason:forContextWithIdentifier:](updaterange%28__with_reason_forcontextwithidentifier_%29.md) method to report that change instead.

## See Also

### Reporting changes to Writing Tools

- [updateRange:withText:reason:forContextWithIdentifier:](updaterange%28__with_reason_forcontextwithidentifier_%29.md): Informs the coordinator about changes your app made to the text in the specified context object.
- [NSWritingToolsCoordinatorTextUpdateReason](textupdatereason.md): Constants that specify the reason you updated your view’s content outside of the Writing Tools workflow.
