> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressorextensionsettings/edit(_:completionhandler:)](https://developer.apple.com/documentation/professional_video_applications/compressorextensionsettings/edit(_:completionhandler:))

# edit(\_:completionHandler:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Encoder Extensions 1.0+

Displays a view that enables users to edit the current encoder settings, and then calls a handler upon completion.

## Declaration

```swift
func edit(_ viewController: NSViewController!, completionHandler handler: ((NSApplication.ModalResponse) -> Void)!)
```

```swift
func edit(_ viewController: NSViewController!) async -> NSApplication.ModalResponse
```

## Parameters

- `viewController`: The Compressor app view controller that hosts the encoder settings view.
- `handler`: A block that is called when the extension modal session ends. The block returns no value and takes the following parameter:

  - **`returnCode`**: The return code to send to the completion handler. Choose from one of the return codes defined in the [NSApplication.ModalResponse](https://developer.apple.com/documentation/appkit/nsapplication/modalresponse) enumeration.

<a id="discussion"></a>

## Discussion

The Compressor app typically calls this method when a user tries to configure the encoder settings. The default `ProExtensionPrincipalViewController` object includes a view that you can use to present the current encoder settings in the Compressor app interface. Users can edit these settings from the UI to customize the encoded output. When they finish editing, if the extension calls the completion handler with the `NSModalResponseOK` return code, the Compressor app calls the [settingsString()](settingsstring%28%29.md) method to get the updated settings from the extension. The Compressor app saves the current settings as XML and provides them back to the extension when the extension restarts or during the encoding process.

# editSettings:completionHandler: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Displays a view that enables users to edit the current encoder settings, and then calls a handler upon completion.

## Declaration

```objectivec
- (void) editSettings:(NSViewController *) viewController completionHandler:(void (^)(NSModalResponse returnCode)) handler;
```

## Parameters

- `viewController`: The Compressor app view controller that hosts the encoder settings view.
- `handler`: A block that is called when the extension modal session ends. The block returns no value and takes the following parameter:

  - **`returnCode`**: The return code to send to the completion handler. Choose from one of the return codes defined in the [NSModalResponse](https://developer.apple.com/documentation/appkit/nsapplication/modalresponse) enumeration.

<a id="discussion"></a>

## Discussion

The Compressor app typically calls this method when a user tries to configure the encoder settings. The default `ProExtensionPrincipalViewController` object includes a view that you can use to present the current encoder settings in the Compressor app interface. Users can edit these settings from the UI to customize the encoded output. When they finish editing, if the extension calls the completion handler with the `NSModalResponseOK` return code, the Compressor app calls the [settingsString](settingsstring%28%29.md) method to get the updated settings from the extension. The Compressor app saves the current settings as XML and provides them back to the extension when the extension restarts or during the encoding process.
