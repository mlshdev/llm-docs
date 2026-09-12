> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/panel:isvalidfilename:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/panel:isvalidfilename:)

# panel:isValidFilename:

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Gives the delegate the opportunity to validate selected items.

> Use [panel:validateURL:error:](https://developer.apple.com/documentation/appkit/nsopensavepaneldelegate/panel%28_:validate:%29) ([NSOpenSavePanelDelegate](https://developer.apple.com/documentation/appkit/nsopensavepaneldelegate)) instead. If both methods are implemented, the URL version will be called.

## Declaration

```objectivec
- (BOOL) panel:(id) sender isValidFilename:(NSString *) filename;
```

## Parameters

- `sender`: Panel requesting filename validation.
- `filename`: String representing the filename to validate.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the filename is valid, or [NO](../no.md) if the save panel should stay in its modal loop and wait for the user to type in or select a different filename or names.

<a id="Discussion"></a>

## Discussion

The `NSSavePanel` object `sender` sends this message just before the end of a modal session for each filename displayed or selected (including filenames in multiple selections). If the delegate refuses a filename in a multiple selection, none of the filenames in the selection is accepted.

## See Also

### Related Documentation

- [panel:validateURL:error:](https://developer.apple.com/documentation/appkit/nsopensavepaneldelegate/panel%28_:validate:%29): Asks the delegate to validate the URL for a file that the user selected.
