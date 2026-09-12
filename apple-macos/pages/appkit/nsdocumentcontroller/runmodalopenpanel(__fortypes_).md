> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/runmodalopenpanel(_:fortypes:)](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/runmodalopenpanel(_:fortypes:))

# runModalOpenPanel(\_:forTypes:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Presents a modal Open dialog and limits selection to specific file types.

## Declaration

```swift
func runModalOpenPanel(_ openPanel: NSOpenPanel, forTypes types: [String]?) -> Int
```

## Parameters

- `openPanel`: The open panel to display.
- `types`: An array of allowable types to open.

<a id="Discussion"></a>

## Discussion

This method is called by the [urlsFromRunningOpenPanel()](urlsfromrunningopenpanel%28%29.md) method. It calls the `NSOpenPanel` [runModalForTypes:](../nsopenpanel/runmodalfortypes_.md) method, passing the `openPanel` object and the file extensions associated with a document type. The `extensions` parameter may also contain encoded HFS file types as well as filename extensions.

## See Also

### Managing the Open Dialog

- [beginOpenPanel(completionHandler:)](beginopenpanel%28completionhandler_%29.md): Presents an Open dialog and delivers the results to a completion handler as an array of URLs for the chosen files, or nil.
- [beginOpenPanel(\_:forTypes:completionHandler:)](beginopenpanel%28__fortypes_completionhandler_%29.md): Presents a nonmodal Open dialog that displays files you can open from a list of UTIs.
- [currentDirectory](currentdirectory.md): The directory path to use as the starting point in the Open dialog.
- [urlsFromRunningOpenPanel()](urlsfromrunningopenpanel%28%29.md): An array of URLs that correspond to the selected files in a running Open dialog.

# runModalOpenPanel:forTypes: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Presents a modal Open dialog and limits selection to specific file types.

## Declaration

```objectivec
- (NSInteger) runModalOpenPanel:(NSOpenPanel *) openPanel forTypes:(NSArray<NSString *> *) types;
```

## Parameters

- `openPanel`: The open panel to display.
- `types`: An array of allowable types to open.

<a id="Discussion"></a>

## Discussion

This method is called by the [URLsFromRunningOpenPanel](urlsfromrunningopenpanel%28%29.md) method. It calls the `NSOpenPanel` [runModalForTypes:](../nsopenpanel/runmodalfortypes_.md) method, passing the `openPanel` object and the file extensions associated with a document type. The `extensions` parameter may also contain encoded HFS file types as well as filename extensions.

## See Also

### Managing the Open Dialog

- [beginOpenPanelWithCompletionHandler:](beginopenpanel%28completionhandler_%29.md): Presents an Open dialog and delivers the results to a completion handler as an array of URLs for the chosen files, or nil.
- [beginOpenPanel:forTypes:completionHandler:](beginopenpanel%28__fortypes_completionhandler_%29.md): Presents a nonmodal Open dialog that displays files you can open from a list of UTIs.
- [currentDirectory](currentdirectory.md): The directory path to use as the starting point in the Open dialog.
- [URLsFromRunningOpenPanel](urlsfromrunningopenpanel%28%29.md): An array of URLs that correspond to the selected files in a running Open dialog.
