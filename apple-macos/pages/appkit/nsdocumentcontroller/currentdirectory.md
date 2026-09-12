> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/currentdirectory](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/currentdirectory)

# currentDirectory (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The directory path to use as the starting point in the Open dialog.

## Declaration

```swift
var currentDirectory: String? { get }
```

<a id="Discussion"></a>

## Discussion

The first valid directory from the following list is returned:

- The directory location where the current document was last saved
- The last directory visited in the Open panel
- The user’s home directory

## See Also

### Managing the Open Dialog

- [beginOpenPanel(completionHandler:)](beginopenpanel%28completionhandler_%29.md): Presents an Open dialog and delivers the results to a completion handler as an array of URLs for the chosen files, or nil.
- [beginOpenPanel(\_:forTypes:completionHandler:)](beginopenpanel%28__fortypes_completionhandler_%29.md): Presents a nonmodal Open dialog that displays files you can open from a list of UTIs.
- [runModalOpenPanel(\_:forTypes:)](runmodalopenpanel%28__fortypes_%29.md): Presents a modal Open dialog and limits selection to specific file types.
- [urlsFromRunningOpenPanel()](urlsfromrunningopenpanel%28%29.md): An array of URLs that correspond to the selected files in a running Open dialog.

# currentDirectory (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The directory path to use as the starting point in the Open dialog.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * currentDirectory;
```

<a id="Discussion"></a>

## Discussion

The first valid directory from the following list is returned:

- The directory location where the current document was last saved
- The last directory visited in the Open panel
- The user’s home directory

## See Also

### Related Documentation

- [documentForFileName:](documentforfilename_.md): Deprecated. Returns the document object for the file in which the document data is stored.

### Managing the Open Dialog

- [beginOpenPanelWithCompletionHandler:](beginopenpanel%28completionhandler_%29.md): Presents an Open dialog and delivers the results to a completion handler as an array of URLs for the chosen files, or nil.
- [beginOpenPanel:forTypes:completionHandler:](beginopenpanel%28__fortypes_completionhandler_%29.md): Presents a nonmodal Open dialog that displays files you can open from a list of UTIs.
- [runModalOpenPanel:forTypes:](runmodalopenpanel%28__fortypes_%29.md): Presents a modal Open dialog and limits selection to specific file types.
- [URLsFromRunningOpenPanel](urlsfromrunningopenpanel%28%29.md): An array of URLs that correspond to the selected files in a running Open dialog.
