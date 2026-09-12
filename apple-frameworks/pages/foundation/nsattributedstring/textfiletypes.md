> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/textfiletypes](https://developer.apple.com/documentation/foundation/nsattributedstring/textfiletypes)

# textFileTypes

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.1+ (deprecated in 10.5)

Returns an array of strings that represent file types that can be loaded as text.

> Use [textTypes](texttypes.md) instead.

## Declaration

```objectivec
+ (NSArray *) textFileTypes;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, containing file extensions and HFS file types. By default, the list returned by this method includes “`txt`”, “`rtf`”, “`rtfd`”, and “`html`”.

<a id="Discussion"></a>

## Discussion

This list includes all file types supported by text classes, plus those types that can be converted to supported file types through a user-installed filter service. The array returned by this method may be passed directly to the `runModalForTypes:` method of [NSOpenPanel](https://developer.apple.com/documentation/appkit/nsopenpanel).

When creating a subclass of `NSAttributedString` that accepts text data from non-default file types, override [textUnfilteredTypes](textunfilteredtypes.md) to notify `NSAttributedString` of the file types your class supports.

## See Also

### Deprecated Properties

- [textUnfilteredFileTypes](textunfilteredfiletypes.md): Deprecated. Returns an array of strings that represent file types that can be loaded as a text.
- [textPasteboardTypes](textpasteboardtypes.md): Deprecated. Returns an array of pasteboard types that can be loaded as text.
- [textUnfilteredPasteboardTypes](textunfilteredpasteboardtypes.md): Deprecated. Returns an array of pasteboard types that can be loaded as text.
- [containsAttachments](containsattachments.md): Deprecated. A Boolean value that indicates whether the attribute string contains any attachment attributes.
