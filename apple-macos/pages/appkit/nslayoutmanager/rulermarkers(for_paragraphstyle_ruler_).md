> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/rulermarkers(for:paragraphstyle:ruler:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/rulermarkers(for:paragraphstyle:ruler:))

# rulerMarkers(for:paragraphStyle:ruler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array of text ruler objects for the current selection.

## Declaration

```swift
func rulerMarkers(for view: NSTextView, paragraphStyle style: NSParagraphStyle, ruler: NSRulerView) -> [NSRulerMarker]
```

## Parameters

- `view`: The text view using the layout manager.
- `style`: Sets the state of the controls in the accessory view; must not be `nil`.
- `ruler`: The ruler view whose ruler markers are returned.

<a id="return-value"></a>

## Return Value

An array of [NSRulerMarker](../nsrulermarker.md) objects representing such things as left and right margins, first-line indent, and tab stops.

<a id="Discussion"></a>

## Discussion

If you have turned off automatic ruler updating through the use of [usesRuler](../nstextview/usesruler.md) so that you can do more complex things, but you still want to display the appropriate accessory view, you can use this method.

This method is invoked automatically by the `NSTextView` object using the layout manager. You should rarely need to invoke it, but you can override it to add new kinds of markers or otherwise customize ruler support.

You can set the returned ruler markers with the `NSRulerView` method [markers](../nsrulerview/markers.md).

## See Also

### Handling Rulers

- [rulerAccessoryView(for:paragraphStyle:ruler:enabled:)](ruleraccessoryview%28for_paragraphstyle_ruler_enabled_%29.md): Returns the accessory view that the text system uses for its ruler.

# rulerMarkersForTextView:paragraphStyle:ruler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array of text ruler objects for the current selection.

## Declaration

```objectivec
- (NSArray<NSRulerMarker *> *) rulerMarkersForTextView:(NSTextView *) view paragraphStyle:(NSParagraphStyle *) style ruler:(NSRulerView *) ruler;
```

## Parameters

- `view`: The text view using the layout manager.
- `style`: Sets the state of the controls in the accessory view; must not be `nil`.
- `ruler`: The ruler view whose ruler markers are returned.

<a id="return-value"></a>

## Return Value

An array of [NSRulerMarker](../nsrulermarker.md) objects representing such things as left and right margins, first-line indent, and tab stops.

<a id="Discussion"></a>

## Discussion

If you have turned off automatic ruler updating through the use of [usesRuler](../nstextview/usesruler.md) so that you can do more complex things, but you still want to display the appropriate accessory view, you can use this method.

This method is invoked automatically by the `NSTextView` object using the layout manager. You should rarely need to invoke it, but you can override it to add new kinds of markers or otherwise customize ruler support.

You can set the returned ruler markers with the `NSRulerView` method [markers](../nsrulerview/markers.md).

## See Also

### Handling Rulers

- [rulerAccessoryViewForTextView:paragraphStyle:ruler:enabled:](ruleraccessoryview%28for_paragraphstyle_ruler_enabled_%29.md): Returns the accessory view that the text system uses for its ruler.
