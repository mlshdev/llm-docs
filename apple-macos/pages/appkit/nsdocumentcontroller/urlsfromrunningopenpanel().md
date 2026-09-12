> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/urlsfromrunningopenpanel()](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/urlsfromrunningopenpanel())

# urlsFromRunningOpenPanel() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

An array of URLs that correspond to the selected files in a running Open dialog.

## Declaration

```swift
func urlsFromRunningOpenPanel() -> [URL]?
```

<a id="Discussion"></a>

## Discussion

Accessing this property creates an [NSOpenPanel](../nsopenpanel.md) object and runs it using the [runModalOpenPanel(\_:forTypes:)](runmodalopenpanel%28__fortypes_%29.md) method. When the user dismisses the panel, the returned value is an array of URLs corresponding to the files chosen by the user. The value is `nil` if the user cancels the Open panel or makes no selection.

## See Also

### Managing the Open Dialog

- [beginOpenPanel(completionHandler:)](beginopenpanel%28completionhandler_%29.md): Presents an Open dialog and delivers the results to a completion handler as an array of URLs for the chosen files, or nil.
- [beginOpenPanel(\_:forTypes:completionHandler:)](beginopenpanel%28__fortypes_completionhandler_%29.md): Presents a nonmodal Open dialog that displays files you can open from a list of UTIs.
- [runModalOpenPanel(\_:forTypes:)](runmodalopenpanel%28__fortypes_%29.md): Presents a modal Open dialog and limits selection to specific file types.
- [currentDirectory](currentdirectory.md): The directory path to use as the starting point in the Open dialog.

# URLsFromRunningOpenPanel (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

An array of URLs that correspond to the selected files in a running Open dialog.

## Declaration

```objectivec
- (NSArray<NSURL *> *) URLsFromRunningOpenPanel;
```

<a id="Discussion"></a>

## Discussion

Accessing this property creates an [NSOpenPanel](../nsopenpanel.md) object and runs it using the [runModalOpenPanel:forTypes:](runmodalopenpanel%28__fortypes_%29.md) method. When the user dismisses the panel, the returned value is an array of URLs corresponding to the files chosen by the user. The value is `nil` if the user cancels the Open panel or makes no selection.

## See Also

### Managing the Open Dialog

- [beginOpenPanelWithCompletionHandler:](beginopenpanel%28completionhandler_%29.md): Presents an Open dialog and delivers the results to a completion handler as an array of URLs for the chosen files, or nil.
- [beginOpenPanel:forTypes:completionHandler:](beginopenpanel%28__fortypes_completionhandler_%29.md): Presents a nonmodal Open dialog that displays files you can open from a list of UTIs.
- [runModalOpenPanel:forTypes:](runmodalopenpanel%28__fortypes_%29.md): Presents a modal Open dialog and limits selection to specific file types.
- [currentDirectory](currentdirectory.md): The directory path to use as the starting point in the Open dialog.
