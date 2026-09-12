> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowsercell/branchimage](https://developer.apple.com/documentation/appkit/nsbrowsercell/branchimage)

# branchImage (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the default image for branch cells in a browser.

## Declaration

```swift
class var branchImage: NSImage? { get }
```

<a id="return-value"></a>

## Return Value

The default image used for branch `NSBrowserCell` objects. The default image is a right-pointing triangle.

<a id="Discussion"></a>

## Discussion

Override this method if you want a different image. To have a branch `NSBrowserCell` with no image (and no space reserved for an image), override this method to return `nil`.

## See Also

### Related Documentation

- [alternateImage](alternateimage.md): The browser cell’s image for the highlighted state.

### Getting Browser Cell Information

- [highlightedBranchImage](highlightedbranchimage.md): Returns the default image for branch browser cells that are highlighted.

# branchImage (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the default image for branch cells in a browser.

## Declaration

```objectivec
@property (class, strong, readonly, nullable) NSImage * branchImage;
```

<a id="return-value"></a>

## Return Value

The default image used for branch `NSBrowserCell` objects. The default image is a right-pointing triangle.

<a id="Discussion"></a>

## Discussion

Override this method if you want a different image. To have a branch `NSBrowserCell` with no image (and no space reserved for an image), override this method to return `nil`.

## See Also

### Related Documentation

- [alternateImage](alternateimage.md): The browser cell’s image for the highlighted state.

### Getting Browser Cell Information

- [highlightedBranchImage](highlightedbranchimage.md): Returns the default image for branch browser cells that are highlighted.
