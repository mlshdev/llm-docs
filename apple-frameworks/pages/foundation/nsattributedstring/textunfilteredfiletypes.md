> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/textunfilteredfiletypes](https://developer.apple.com/documentation/foundation/nsattributedstring/textunfilteredfiletypes)

# textUnfilteredFileTypes

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.1+ (deprecated in 10.5)

Returns an array of strings that represent file types that can be loaded as a text.

> Use [textUnfilteredTypes](textunfilteredtypes.md) instead.

## Declaration

```objectivec
+ (NSArray *) textUnfilteredFileTypes;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, consisting of all file types supported by text classes, but does not include those types that can be converted to supported file types through a user-installed filter service.

<a id="Discussion"></a>

## Discussion

This list consists of all file types supported by text classes, but does not include those types that can be converted to supported file types through a user-installed filter service. In macOS, the array returned by this method may be passed directly to the `runModalForTypes:` method of [NSOpenPanel](https://developer.apple.com/documentation/appkit/nsopenpanel).

## See Also

### Deprecated Properties

- [textFileTypes](textfiletypes.md): Deprecated. Returns an array of strings that represent file types that can be loaded as text.
- [textPasteboardTypes](textpasteboardtypes.md): Deprecated. Returns an array of pasteboard types that can be loaded as text.
- [textUnfilteredPasteboardTypes](textunfilteredpasteboardtypes.md): Deprecated. Returns an array of pasteboard types that can be loaded as text.
- [containsAttachments](containsattachments.md): Deprecated. A Boolean value that indicates whether the attribute string contains any attachment attributes.
