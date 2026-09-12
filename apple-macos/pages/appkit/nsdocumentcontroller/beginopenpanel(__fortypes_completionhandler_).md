> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/beginopenpanel(_:fortypes:completionhandler:)](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/beginopenpanel(_:fortypes:completionhandler:))

# beginOpenPanel(\_:forTypes:completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Presents a nonmodal Open dialog that displays files you can open from a list of UTIs.

## Declaration

```swift
func beginOpenPanel(_ openPanel: NSOpenPanel, forTypes inTypes: [String]?, completionHandler: @escaping (Int) -> Void)
```

```swift
func beginOpenPanel(_ openPanel: NSOpenPanel, forTypes inTypes: [String]?) async -> Int
```

## Parameters

- `openPanel`: The Open dialog to present.
- `inTypes`: A list of file types that the user can choose from in the Open dialog.
- `completionHandler`: The completion handler that runs when the user clicks the OK or Cancel button in the Open dialog.

  The block takes the following parameter:

  - **`result`**: Either [NSOKButton](../nsokbutton.md) or [NSCancelButton](../nscancelbutton.md), depending on which button the user clicks to dismiss the dialog.

<a id="Discussion"></a>

## Discussion

[openDocument(\_:)](opendocument%28__%29.md) and [beginOpenPanel(completionHandler:)](beginopenpanel%28completionhandler_%29.md) call this method to do the actual work. You typically don’t call this method directly. Override this method as necessary to customize the Open dialog or to alter the list of UTIs in the `inTypes` parameter.

You can also override this method if you want to perform additional cleanup (for example, if you customize the Open dialog and need to tear down an accessory view). Your overridden implementation needs to call the underlying method on `super`, passing a custom completion handler. That handler does the additional cleanup work, and then calls the completion handler block that the caller provides.

## See Also

### Managing the Open Dialog

- [beginOpenPanel(completionHandler:)](beginopenpanel%28completionhandler_%29.md): Presents an Open dialog and delivers the results to a completion handler as an array of URLs for the chosen files, or nil.
- [runModalOpenPanel(\_:forTypes:)](runmodalopenpanel%28__fortypes_%29.md): Presents a modal Open dialog and limits selection to specific file types.
- [currentDirectory](currentdirectory.md): The directory path to use as the starting point in the Open dialog.
- [urlsFromRunningOpenPanel()](urlsfromrunningopenpanel%28%29.md): An array of URLs that correspond to the selected files in a running Open dialog.

# beginOpenPanel:forTypes:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Presents a nonmodal Open dialog that displays files you can open from a list of UTIs.

## Declaration

```objectivec
- (void) beginOpenPanel:(NSOpenPanel *) openPanel forTypes:(NSArray<NSString *> *) inTypes completionHandler:(void (^)(NSInteger result)) completionHandler;
```

## Parameters

- `openPanel`: The Open dialog to present.
- `inTypes`: A list of file types that the user can choose from in the Open dialog.
- `completionHandler`: The completion handler that runs when the user clicks the OK or Cancel button in the Open dialog.

  The block takes the following parameter:

  - **`result`**: Either [NSOKButton](../nsokbutton.md) or [NSCancelButton](../nscancelbutton.md), depending on which button the user clicks to dismiss the dialog.

<a id="Discussion"></a>

## Discussion

[openDocument:](opendocument%28__%29.md) and [beginOpenPanelWithCompletionHandler:](beginopenpanel%28completionhandler_%29.md) call this method to do the actual work. You typically don’t call this method directly. Override this method as necessary to customize the Open dialog or to alter the list of UTIs in the `inTypes` parameter.

You can also override this method if you want to perform additional cleanup (for example, if you customize the Open dialog and need to tear down an accessory view). Your overridden implementation needs to call the underlying method on `super`, passing a custom completion handler. That handler does the additional cleanup work, and then calls the completion handler block that the caller provides.

## See Also

### Managing the Open Dialog

- [beginOpenPanelWithCompletionHandler:](beginopenpanel%28completionhandler_%29.md): Presents an Open dialog and delivers the results to a completion handler as an array of URLs for the chosen files, or nil.
- [runModalOpenPanel:forTypes:](runmodalopenpanel%28__fortypes_%29.md): Presents a modal Open dialog and limits selection to specific file types.
- [currentDirectory](currentdirectory.md): The directory path to use as the starting point in the Open dialog.
- [URLsFromRunningOpenPanel](urlsfromrunningopenpanel%28%29.md): An array of URLs that correspond to the selected files in a running Open dialog.
