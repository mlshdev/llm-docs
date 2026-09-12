> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/stoploading(_:)](https://developer.apple.com/documentation/webkit/webview-swift.class/stoploading(_:))

# stopLoading(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

An action method that stops the loading of any web frame content managed by the receiver.

## Declaration

```swift
@IBAction func stopLoading(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

Stops any content in the process of being loaded by the main frame or any of its children frames. Does nothing if no content is being loaded.

## See Also

### Loading Content

- [takeStringURLFrom(\_:)](takestringurlfrom%28__%29.md): Sets the receiver’s current location by obtaining a URL string from the sender.
- [reload(\_:)](reload%28__%29.md): An action method that reloads the current page.
- [reloadFromOrigin(\_:)](reloadfromorigin%28__%29.md): Action method that performs an end-to-end revalidation using cache-validating conditionals if possible.
- [estimatedProgress](estimatedprogress.md): Deprecated. An estimate, as a percentage, of the amount of content that is currently loaded.

# stopLoading: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

An action method that stops the loading of any web frame content managed by the receiver.

## Declaration

```objectivec
- (void) stopLoading:(id) sender;
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

Stops any content in the process of being loaded by the main frame or any of its children frames. Does nothing if no content is being loaded.

## See Also

### Loading Content

- [takeStringURLFrom:](takestringurlfrom%28__%29.md): Sets the receiver’s current location by obtaining a URL string from the sender.
- [reload:](reload%28__%29.md): An action method that reloads the current page.
- [reloadFromOrigin:](reloadfromorigin%28__%29.md): Action method that performs an end-to-end revalidation using cache-validating conditionals if possible.
- [estimatedProgress](estimatedprogress.md): Deprecated. An estimate, as a percentage, of the amount of content that is currently loaded.
