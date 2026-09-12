> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/panel:shouldshowfilename:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/panel:shouldshowfilename:)

# panel:shouldShowFilename:

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Gives the delegate the opportunity to filter items that it doesn’t want the user to choose.

> Use [panel:shouldEnableURL:](https://developer.apple.com/documentation/appkit/nsopensavepaneldelegate/panel%28_:shouldenable:%29) ([NSOpenSavePanelDelegate](https://developer.apple.com/documentation/appkit/nsopensavepaneldelegate)).

## Declaration

```objectivec
- (BOOL) panel:(id) sender shouldShowFilename:(NSString *) filename;
```

## Parameters

- `sender`: Panel that is querying whether it should show a certain file.
- `filename`: String representing the name of the file to be loaded in the browser.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if `filename` should be selectable, and [NO](../no.md) if the save panel should disable the file or directory.

<a id="Discussion"></a>

## Discussion

The `NSSavePanel` object `sender` sends this message to the panel’s delegate for each file or directory (filename) it is about to load in the browser.

## See Also

### Related Documentation

- [panel:shouldEnableURL:](https://developer.apple.com/documentation/appkit/nsopensavepaneldelegate/panel%28_:shouldenable:%29): Asks the delegate whether the specified URL should be enabled in the Open panel.
