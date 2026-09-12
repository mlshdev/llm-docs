> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutmanagerdelegate/textlayoutmanager(_:shouldbreaklinebefore:hyphenating:)](https://developer.apple.com/documentation/uikit/nstextlayoutmanagerdelegate/textlayoutmanager(_:shouldbreaklinebefore:hyphenating:))

# textLayoutManager(\_:shouldBreakLineBefore:hyphenating:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The method the framework calls to determine the soft line break point.

## Declaration

```swift
optional func textLayoutManager(_ textLayoutManager: NSTextLayoutManager, shouldBreakLineBefore location: any NSTextLocation, hyphenating: Bool) -> Bool
```

## Parameters

- `textLayoutManager`: The text layout manager.
- `location`: The location of the proposed line break.
- `hyphenating`: A Boolean value that indicates the current hyphenation mode.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates if the framework should break the line at the current location.

<a id="Discussion"></a>

## Discussion

When `hyphenating` is `false`, `NSTextLayoutManager` tries to find the next line break opportunity before `location`. When `hyphenating` is `true`, it’s an auto-hyphenation point.

## See Also

### Responding to layout changes

- [textLayoutManager(\_:renderingAttributesForLink:at:defaultAttributes:)](textlayoutmanager%28__renderingattributesforlink_at_defaultattributes_%29.md): The method the framework calls to return a dictionary of attributes for rendering a link attribute name.
- [textLayoutManager(\_:textLayoutFragmentFor:in:)](textlayoutmanager%28__textlayoutfragmentfor_in_%29.md): The method the framework calls to give the delegate an opportunity to return a custom text layout fragment.

# textLayoutManager:shouldBreakLineBeforeLocation:hyphenating: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The method the framework calls to determine the soft line break point.

## Declaration

```objectivec
- (BOOL) textLayoutManager:(NSTextLayoutManager *) textLayoutManager shouldBreakLineBeforeLocation:(id<NSTextLocation>) location hyphenating:(BOOL) hyphenating;
```

## Parameters

- `textLayoutManager`: The text layout manager.
- `location`: The location of the proposed line break.
- `hyphenating`: A Boolean value that indicates the current hyphenation mode.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates if the framework should break the line at the current location.

<a id="Discussion"></a>

## Discussion

When `hyphenating` is `false`, `NSTextLayoutManager` tries to find the next line break opportunity before `location`. When `hyphenating` is `true`, it’s an auto-hyphenation point.

## See Also

### Responding to layout changes

- [textLayoutManager:renderingAttributesForLink:atLocation:defaultAttributes:](textlayoutmanager%28__renderingattributesforlink_at_defaultattributes_%29.md): The method the framework calls to return a dictionary of attributes for rendering a link attribute name.
- [textLayoutManager:textLayoutFragmentForLocation:inTextElement:](textlayoutmanager%28__textlayoutfragmentfor_in_%29.md): The method the framework calls to give the delegate an opportunity to return a custom text layout fragment.
