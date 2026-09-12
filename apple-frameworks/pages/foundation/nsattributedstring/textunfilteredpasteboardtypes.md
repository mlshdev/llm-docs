> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/textunfilteredpasteboardtypes](https://developer.apple.com/documentation/foundation/nsattributedstring/textunfilteredpasteboardtypes)

# textUnfilteredPasteboardTypes

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.1+ (deprecated in 10.5)

Returns an array of pasteboard types that can be loaded as text.

> Use [textUnfilteredTypes](textunfilteredtypes.md) instead.

## Declaration

```objectivec
+ (NSArray *) textUnfilteredPasteboardTypes;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, pasteboard types supported by text classes.

<a id="Discussion"></a>

## Discussion

This list consists of all pasteboard types supported by text classes, but does not include those that can be converted to supported pasteboard types through a user-installed filter service.

## See Also

### Deprecated Properties

- [textFileTypes](textfiletypes.md): Deprecated. Returns an array of strings that represent file types that can be loaded as text.
- [textUnfilteredFileTypes](textunfilteredfiletypes.md): Deprecated. Returns an array of strings that represent file types that can be loaded as a text.
- [textPasteboardTypes](textpasteboardtypes.md): Deprecated. Returns an array of pasteboard types that can be loaded as text.
- [containsAttachments](containsattachments.md): Deprecated. A Boolean value that indicates whether the attribute string contains any attachment attributes.
