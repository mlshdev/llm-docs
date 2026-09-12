> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/textpasteboardtypes](https://developer.apple.com/documentation/foundation/nsattributedstring/textpasteboardtypes)

# textPasteboardTypes

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.1+ (deprecated in 10.5)

Returns an array of pasteboard types that can be loaded as text.

> Use [textTypes](texttypes.md) instead.

## Declaration

```objectivec
+ (NSArray *) textPasteboardTypes;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, containing the pasteboard types supported by text classes and those that can be converted to supported pasteboard types through a user-installed filter service.

<a id="Discussion"></a>

## Discussion

By default, the list returned by this method includes `NSHTMLPboardType`, `NSRTFPboardType`, `NSRTFDPboardType`, and `NSStringPboardType`.

When creating a subclass of `NSAttributedString` that accepts text data from non-default pasteboard types, override [textUnfilteredPasteboardTypes](textunfilteredpasteboardtypes.md) to notify `NSAttributedString` of the pasteboard types your class supports.

## See Also

### Deprecated Properties

- [textFileTypes](textfiletypes.md): Deprecated. Returns an array of strings that represent file types that can be loaded as text.
- [textUnfilteredFileTypes](textunfilteredfiletypes.md): Deprecated. Returns an array of strings that represent file types that can be loaded as a text.
- [textUnfilteredPasteboardTypes](textunfilteredpasteboardtypes.md): Deprecated. Returns an array of pasteboard types that can be loaded as text.
- [containsAttachments](containsattachments.md): Deprecated. A Boolean value that indicates whether the attribute string contains any attachment attributes.
