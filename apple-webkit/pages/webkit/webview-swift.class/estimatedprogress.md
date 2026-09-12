> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/estimatedprogress](https://developer.apple.com/documentation/webkit/webview-swift.class/estimatedprogress)

# estimatedProgress (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

An estimate, as a percentage, of the amount of content that is currently loaded.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
var estimatedProgress: Double { get }
```

<a id="Discussion"></a>

## Discussion

A number ranging from `0` to `1.0` and, once a load completes, `1.0` until a new load starts, at which point it resets to `0`.

The value is an estimate based on the total number of bytes expected to be received for a document, including all its possible subresources. For more accurate load progress information, implement delegates conforming to the WebFrameLoadDelegate and WebResourceLoadDelegate informal protocols.

## See Also

### Loading Content

- [stopLoading(\_:)](stoploading%28__%29.md): An action method that stops the loading of any web frame content managed by the receiver.
- [takeStringURLFrom(\_:)](takestringurlfrom%28__%29.md): Sets the receiver’s current location by obtaining a URL string from the sender.
- [reload(\_:)](reload%28__%29.md): An action method that reloads the current page.
- [reloadFromOrigin(\_:)](reloadfromorigin%28__%29.md): Action method that performs an end-to-end revalidation using cache-validating conditionals if possible.

# estimatedProgress (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

An estimate, as a percentage, of the amount of content that is currently loaded.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
@property (nonatomic, readonly) double estimatedProgress;
```

<a id="Discussion"></a>

## Discussion

A number ranging from `0` to `1.0` and, once a load completes, `1.0` until a new load starts, at which point it resets to `0`.

The value is an estimate based on the total number of bytes expected to be received for a document, including all its possible subresources. For more accurate load progress information, implement delegates conforming to the WebFrameLoadDelegate and WebResourceLoadDelegate informal protocols.

## See Also

### Loading Content

- [stopLoading:](stoploading%28__%29.md): An action method that stops the loading of any web frame content managed by the receiver.
- [takeStringURLFrom:](takestringurlfrom%28__%29.md): Sets the receiver’s current location by obtaining a URL string from the sender.
- [reload:](reload%28__%29.md): An action method that reloads the current page.
- [reloadFromOrigin:](reloadfromorigin%28__%29.md): Action method that performs an end-to-end revalidation using cache-validating conditionals if possible.
