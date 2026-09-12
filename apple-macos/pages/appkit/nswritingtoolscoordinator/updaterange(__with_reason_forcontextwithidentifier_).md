> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/updaterange(_:with:reason:forcontextwithidentifier:)](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/updaterange(_:with:reason:forcontextwithidentifier:))

# updateRange(\_:with:reason:forContextWithIdentifier:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.2+

Informs the coordinator about changes your app made to the text in the specified context object.

## Declaration

```swift
func updateRange(_ range: NSRange, with replacementText: NSAttributedString, reason: NSWritingToolsCoordinator.TextUpdateReason, forContextWithIdentifier contextID: UUID)
```

## Parameters

- `range`: The range of text to replace. This range is relative to the starting location of the specified context object’s text in your view’s text storage. If you initialized the context object with the entire contents of your view’s text storage, specify the range of text you’re replacing in your text storage. However, if you initialized the context object with only a portion of your view’s text, specify a range that is relative to the starting location of the context object’s text.
- `replacementText`: The text that replaces the previous content in `range`. Specify an empty string to delete the text in the specified range.
- `reason`: The reason you updated the text.
- `contextID`: The unique identifier of the context object that contains the text you modified.

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](../adding-writing-tools-support-to-a-custom-nsview.md)

<a id="discussion"></a>

## Discussion

If you make any changes to the text Writing Tools is evaluating, call this method to report those changes to your view’s coordinator object. You might make changes in response to an undo command or when someone types into the same part of your view’s text. Calling this method keeps the coordinator object informed of any changes, and ensures it delivers accurate information to its delegate. In response, the coordinator refreshes previews and other information related to your view. If the scope of the update is significantly large, the coordinator can optionally cancel the Writing Tools session altogether.

Use this method to report changes that precisely intersect your context object’s text. The first time you call this method for a context object, report changes only to the original attributed string in that object. If you call this method more than once, report changes to the newly modified version of that string. Don’t use this method to report changes to text that comes before or after the context object. If you make changes before your context object, report those changes separately using the [updateForReflowedTextInContextWithIdentifier(\_:)](updateforreflowedtextincontextwithidentifier%28__%29.md) method.

> **Warning**

> Failure to call this method for a change can cause Writing Tools to deliver inaccurate information to your delegate and lead to data loss.

## See Also

### Reporting changes to Writing Tools

- [updateForReflowedTextInContextWithIdentifier(\_:)](updateforreflowedtextincontextwithidentifier%28__%29.md): Informs the coordinator that a change occurred to the view or its text that requires a layout update.
- [NSWritingToolsCoordinator.TextUpdateReason](textupdatereason.md): Constants that specify the reason you updated your view’s content outside of the Writing Tools workflow.

# updateRange:withText:reason:forContextWithIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.2+

Informs the coordinator about changes your app made to the text in the specified context object.

## Declaration

```objectivec
- (void) updateRange:(NSRange) range withText:(NSAttributedString *) replacementText reason:(NSWritingToolsCoordinatorTextUpdateReason) reason forContextWithIdentifier:(NSUUID *) contextID;
```

## Parameters

- `range`: The range of text to replace. This range is relative to the starting location of the specified context object’s text in your view’s text storage. If you initialized the context object with the entire contents of your view’s text storage, specify the range of text you’re replacing in your text storage. However, if you initialized the context object with only a portion of your view’s text, specify a range that is relative to the starting location of the context object’s text.
- `replacementText`: The text that replaces the previous content in `range`. Specify an empty string to delete the text in the specified range.
- `reason`: The reason you updated the text.
- `contextID`: The unique identifier of the context object that contains the text you modified.

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](../adding-writing-tools-support-to-a-custom-nsview.md)

<a id="discussion"></a>

## Discussion

If you make any changes to the text Writing Tools is evaluating, call this method to report those changes to your view’s coordinator object. You might make changes in response to an undo command or when someone types into the same part of your view’s text. Calling this method keeps the coordinator object informed of any changes, and ensures it delivers accurate information to its delegate. In response, the coordinator refreshes previews and other information related to your view. If the scope of the update is significantly large, the coordinator can optionally cancel the Writing Tools session altogether.

Use this method to report changes that precisely intersect your context object’s text. The first time you call this method for a context object, report changes only to the original attributed string in that object. If you call this method more than once, report changes to the newly modified version of that string. Don’t use this method to report changes to text that comes before or after the context object. If you make changes before your context object, report those changes separately using the [updateForReflowedTextInContextWithIdentifier:](updateforreflowedtextincontextwithidentifier%28__%29.md) method.

> **Warning**

> Failure to call this method for a change can cause Writing Tools to deliver inaccurate information to your delegate and lead to data loss.

## See Also

### Reporting changes to Writing Tools

- [updateForReflowedTextInContextWithIdentifier:](updateforreflowedtextincontextwithidentifier%28__%29.md): Informs the coordinator that a change occurred to the view or its text that requires a layout update.
- [NSWritingToolsCoordinatorTextUpdateReason](textupdatereason.md): Constants that specify the reason you updated your view’s content outside of the Writing Tools workflow.
