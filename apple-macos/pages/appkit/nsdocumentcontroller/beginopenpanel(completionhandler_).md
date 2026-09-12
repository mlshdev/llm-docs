> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/beginopenpanel(completionhandler:)](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/beginopenpanel(completionhandler:))

# beginOpenPanel(completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Presents an Open dialog and delivers the results to a completion handler as an array of URLs for the chosen files, or nil.

## Declaration

```swift
func beginOpenPanel(completionHandler: @escaping ([URL]?) -> Void)
```

```swift
func beginOpenPanel() async -> [URL]?
```

## Parameters

- `completionHandler`: The completion handler that is called when the user clicks the OK or Cancel button in the open panel.

<a id="Discussion"></a>

## Discussion

This method presents either a modal or nonmodal open panel, depending on which methods are overridden. Although you can call this method in other circumstances, this method is most commonly called by [openDocument(\_:)](opendocument%28__%29.md) in response to the user choosing Open… from the File menu.

If you override [openDocument(\_:)](opendocument%28__%29.md), you should typically call this method instead of calling [beginOpenPanel(\_:forTypes:completionHandler:)](beginopenpanel%28__fortypes_completionhandler_%29.md) or [urlsFromRunningOpenPanel()](urlsfromrunningopenpanel%28%29.md) directly, because this method runs the modal panel in a way that is backwards compatible with subclasses that override [runModalOpenPanel(\_:forTypes:)](runmodalopenpanel%28__fortypes_%29.md) without overriding [beginOpenPanel(\_:forTypes:completionHandler:)](beginopenpanel%28__fortypes_completionhandler_%29.md). Also, its completion handler determines which button the user pressed (to determine whether to return the array or `nil`) and orders out the open panel.

You can override this method to change the open panel presentation (adding an accessory view, for example) or change the UTI array that limits which files are selectable.

The default implementation of this method calls either [urlsFromRunningOpenPanel()](urlsfromrunningopenpanel%28%29.md) to run a modal open panel or [beginOpenPanel(\_:forTypes:completionHandler:)](beginopenpanel%28__fortypes_completionhandler_%29.md) to begin a nonmodal open panel. If the user chooses to open files, the default implementation calls the completion handler with a `nil` array parameter. If the user cancels the Open dialog, the default implementation calls the completion handler with a `nil` array parameter.

If you override this method, your method should typically call the underlying method on `super` because of the additional code that it provides for free. Specifically, this method runs the modal panel in a way that is backwards compatible with subclasses that override [runModalOpenPanel(\_:forTypes:)](runmodalopenpanel%28__fortypes_%29.md) without overriding [beginOpenPanel(\_:forTypes:completionHandler:)](beginopenpanel%28__fortypes_completionhandler_%29.md). Also, its completion handler determines which button the user pressed (to determine whether to return the array or `nil`) and orders out the open panel.

## See Also

### Managing the Open Dialog

- [beginOpenPanel(\_:forTypes:completionHandler:)](beginopenpanel%28__fortypes_completionhandler_%29.md): Presents a nonmodal Open dialog that displays files you can open from a list of UTIs.
- [runModalOpenPanel(\_:forTypes:)](runmodalopenpanel%28__fortypes_%29.md): Presents a modal Open dialog and limits selection to specific file types.
- [currentDirectory](currentdirectory.md): The directory path to use as the starting point in the Open dialog.
- [urlsFromRunningOpenPanel()](urlsfromrunningopenpanel%28%29.md): An array of URLs that correspond to the selected files in a running Open dialog.

# beginOpenPanelWithCompletionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Presents an Open dialog and delivers the results to a completion handler as an array of URLs for the chosen files, or nil.

## Declaration

```objectivec
- (void) beginOpenPanelWithCompletionHandler:(void (^)(NSArray<NSURL *> *)) completionHandler;
```

## Parameters

- `completionHandler`: The completion handler that is called when the user clicks the OK or Cancel button in the open panel.

<a id="Discussion"></a>

## Discussion

This method presents either a modal or nonmodal open panel, depending on which methods are overridden. Although you can call this method in other circumstances, this method is most commonly called by [openDocument:](opendocument%28__%29.md) in response to the user choosing Open… from the File menu.

If you override [openDocument:](opendocument%28__%29.md), you should typically call this method instead of calling [beginOpenPanel:forTypes:completionHandler:](beginopenpanel%28__fortypes_completionhandler_%29.md) or [URLsFromRunningOpenPanel](urlsfromrunningopenpanel%28%29.md) directly, because this method runs the modal panel in a way that is backwards compatible with subclasses that override [runModalOpenPanel:forTypes:](runmodalopenpanel%28__fortypes_%29.md) without overriding [beginOpenPanel:forTypes:completionHandler:](beginopenpanel%28__fortypes_completionhandler_%29.md). Also, its completion handler determines which button the user pressed (to determine whether to return the array or `nil`) and orders out the open panel.

You can override this method to change the open panel presentation (adding an accessory view, for example) or change the UTI array that limits which files are selectable.

The default implementation of this method calls either [URLsFromRunningOpenPanel](urlsfromrunningopenpanel%28%29.md) to run a modal open panel or [beginOpenPanel:forTypes:completionHandler:](beginopenpanel%28__fortypes_completionhandler_%29.md) to begin a nonmodal open panel. If the user chooses to open files, the default implementation calls the completion handler with a `nil` array parameter. If the user cancels the Open dialog, the default implementation calls the completion handler with a `nil` array parameter.

If you override this method, your method should typically call the underlying method on `super` because of the additional code that it provides for free. Specifically, this method runs the modal panel in a way that is backwards compatible with subclasses that override [runModalOpenPanel:forTypes:](runmodalopenpanel%28__fortypes_%29.md) without overriding [beginOpenPanel:forTypes:completionHandler:](beginopenpanel%28__fortypes_completionhandler_%29.md). Also, its completion handler determines which button the user pressed (to determine whether to return the array or `nil`) and orders out the open panel.

## See Also

### Managing the Open Dialog

- [beginOpenPanel:forTypes:completionHandler:](beginopenpanel%28__fortypes_completionhandler_%29.md): Presents a nonmodal Open dialog that displays files you can open from a list of UTIs.
- [runModalOpenPanel:forTypes:](runmodalopenpanel%28__fortypes_%29.md): Presents a modal Open dialog and limits selection to specific file types.
- [currentDirectory](currentdirectory.md): The directory path to use as the starting point in the Open dialog.
- [URLsFromRunningOpenPanel](urlsfromrunningopenpanel%28%29.md): An array of URLs that correspond to the selected files in a running Open dialog.
