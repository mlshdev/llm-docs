> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowsercell/highlightedbranchimage](https://developer.apple.com/documentation/appkit/nsbrowsercell/highlightedbranchimage)

# highlightedBranchImage (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the default image for branch browser cells that are highlighted.

## Declaration

```swift
class var highlightedBranchImage: NSImage? { get }
```

<a id="return-value"></a>

## Return Value

The default image used for branch `NSBrowserCell` objects that are highlighted. This is a lighter version of the image returned by [branchImage](branchimage.md).

<a id="Discussion"></a>

## Discussion

Override this method if you want a different image.

## See Also

### Related Documentation

- [alternateImage](alternateimage.md): The browser cell’s image for the highlighted state.

### Getting Browser Cell Information

- [branchImage](branchimage.md): Returns the default image for branch cells in a browser.

# highlightedBranchImage (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the default image for branch browser cells that are highlighted.

## Declaration

```objectivec
@property (class, strong, readonly, nullable) NSImage * highlightedBranchImage;
```

<a id="return-value"></a>

## Return Value

The default image used for branch `NSBrowserCell` objects that are highlighted. This is a lighter version of the image returned by [branchImage](branchimage.md).

<a id="Discussion"></a>

## Discussion

Override this method if you want a different image.

## See Also

### Related Documentation

- [alternateImage](alternateimage.md): The browser cell’s image for the highlighted state.

### Getting Browser Cell Information

- [branchImage](branchimage.md): Returns the default image for branch cells in a browser.
