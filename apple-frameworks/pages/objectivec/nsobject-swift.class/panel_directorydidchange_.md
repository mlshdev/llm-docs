> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/panel:directorydidchange:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/panel:directorydidchange:)

# panel:directoryDidChange:

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.6)

Tells the delegate that the user has changed the selected directory in the `NSSavePanel` object specified.

> Use [panel:didChangeToDirectoryURL:](https://developer.apple.com/documentation/appkit/nsopensavepaneldelegate/panel%28_:didchangetodirectoryurl:%29) ([NSOpenSavePanelDelegate](https://developer.apple.com/documentation/appkit/nsopensavepaneldelegate)) instead.

## Declaration

```objectivec
- (void) panel:(id) sender directoryDidChange:(NSString *) path;
```

## Parameters

- `sender`: Panel whose directory has changed.
- `path`: String representing the new directory’s path.

## See Also

### Related Documentation

- [panel:didChangeToDirectoryURL:](https://developer.apple.com/documentation/appkit/nsopensavepaneldelegate/panel%28_:didchangetodirectoryurl:%29): Tells the delegate that the user changed the selected directory to the directory located at the specified URL.
