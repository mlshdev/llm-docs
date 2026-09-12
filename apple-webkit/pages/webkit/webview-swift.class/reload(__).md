> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/reload(_:)](https://developer.apple.com/documentation/webkit/webview-swift.class/reload(_:))

# reload(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

An action method that reloads the current page.

## Declaration

```swift
@IBAction func reload(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent this message.

## See Also

### Related Documentation

- [resourceLoadDelegate](resourceloaddelegate.md): Deprecated. The receiver’s resource load delegate.

### Loading Content

- [stopLoading(\_:)](stoploading%28__%29.md): An action method that stops the loading of any web frame content managed by the receiver.
- [takeStringURLFrom(\_:)](takestringurlfrom%28__%29.md): Sets the receiver’s current location by obtaining a URL string from the sender.
- [reloadFromOrigin(\_:)](reloadfromorigin%28__%29.md): Action method that performs an end-to-end revalidation using cache-validating conditionals if possible.
- [estimatedProgress](estimatedprogress.md): Deprecated. An estimate, as a percentage, of the amount of content that is currently loaded.

# reload: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

An action method that reloads the current page.

## Declaration

```objectivec
- (void) reload:(id) sender;
```

## Parameters

- `sender`: The object that sent this message.

## See Also

### Related Documentation

- [resourceLoadDelegate](resourceloaddelegate.md): Deprecated. The receiver’s resource load delegate.

### Loading Content

- [stopLoading:](stoploading%28__%29.md): An action method that stops the loading of any web frame content managed by the receiver.
- [takeStringURLFrom:](takestringurlfrom%28__%29.md): Sets the receiver’s current location by obtaining a URL string from the sender.
- [reloadFromOrigin:](reloadfromorigin%28__%29.md): Action method that performs an end-to-end revalidation using cache-validating conditionals if possible.
- [estimatedProgress](estimatedprogress.md): Deprecated. An estimate, as a percentage, of the amount of content that is currently loaded.
