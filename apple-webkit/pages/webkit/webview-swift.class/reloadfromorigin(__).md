> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/reloadfromorigin(_:)](https://developer.apple.com/documentation/webkit/webview-swift.class/reloadfromorigin(_:))

# reloadFromOrigin(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Action method that performs an end-to-end revalidation using cache-validating conditionals if possible.

## Declaration

```swift
@IBAction func reloadFromOrigin(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent this message.

## See Also

### Related Documentation

- [reloadFromOrigin()](../webframe/reloadfromorigin%28%29.md): Deprecated. Performs an end-to-end revalidation using cache-validating conditionals if possible.

### Loading Content

- [stopLoading(\_:)](stoploading%28__%29.md): An action method that stops the loading of any web frame content managed by the receiver.
- [takeStringURLFrom(\_:)](takestringurlfrom%28__%29.md): Sets the receiver’s current location by obtaining a URL string from the sender.
- [reload(\_:)](reload%28__%29.md): An action method that reloads the current page.
- [estimatedProgress](estimatedprogress.md): Deprecated. An estimate, as a percentage, of the amount of content that is currently loaded.

# reloadFromOrigin: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Action method that performs an end-to-end revalidation using cache-validating conditionals if possible.

## Declaration

```objectivec
- (void) reloadFromOrigin:(id) sender;
```

## Parameters

- `sender`: The object that sent this message.

## See Also

### Related Documentation

- [reloadFromOrigin](../webframe/reloadfromorigin%28%29.md): Deprecated. Performs an end-to-end revalidation using cache-validating conditionals if possible.

### Loading Content

- [stopLoading:](stoploading%28__%29.md): An action method that stops the loading of any web frame content managed by the receiver.
- [takeStringURLFrom:](takestringurlfrom%28__%29.md): Sets the receiver’s current location by obtaining a URL string from the sender.
- [reload:](reload%28__%29.md): An action method that reloads the current page.
- [estimatedProgress](estimatedprogress.md): Deprecated. An estimate, as a percentage, of the amount of content that is currently loaded.
