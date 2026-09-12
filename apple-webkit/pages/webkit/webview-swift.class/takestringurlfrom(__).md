> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/takestringurlfrom(_:)](https://developer.apple.com/documentation/webkit/webview-swift.class/takestringurlfrom(_:))

# takeStringURLFrom(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the receiver’s current location by obtaining a URL string from the sender.

## Declaration

```swift
@IBAction func takeStringURLFrom(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

This method sets the receiver’s current location to the value obtained by sending a `stringValue` message to `sender`, then starts loading the URL returned by `sender`.

## See Also

### Related Documentation

- [load(\_:)](../webframe/load%28__%29-47p2s.md): Deprecated. Connects to a given URL by initiating an asynchronous client request.

### Loading Content

- [stopLoading(\_:)](stoploading%28__%29.md): An action method that stops the loading of any web frame content managed by the receiver.
- [reload(\_:)](reload%28__%29.md): An action method that reloads the current page.
- [reloadFromOrigin(\_:)](reloadfromorigin%28__%29.md): Action method that performs an end-to-end revalidation using cache-validating conditionals if possible.
- [estimatedProgress](estimatedprogress.md): Deprecated. An estimate, as a percentage, of the amount of content that is currently loaded.

# takeStringURLFrom: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the receiver’s current location by obtaining a URL string from the sender.

## Declaration

```objectivec
- (void) takeStringURLFrom:(id) sender;
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

This method sets the receiver’s current location to the value obtained by sending a `stringValue` message to `sender`, then starts loading the URL returned by `sender`.

## See Also

### Related Documentation

- [loadRequest:](../webframe/load%28__%29-47p2s.md): Deprecated. Connects to a given URL by initiating an asynchronous client request.

### Loading Content

- [stopLoading:](stoploading%28__%29.md): An action method that stops the loading of any web frame content managed by the receiver.
- [reload:](reload%28__%29.md): An action method that reloads the current page.
- [reloadFromOrigin:](reloadfromorigin%28__%29.md): Action method that performs an end-to-end revalidation using cache-validating conditionals if possible.
- [estimatedProgress](estimatedprogress.md): Deprecated. An estimate, as a percentage, of the amount of content that is currently loaded.
