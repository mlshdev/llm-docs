> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webarchive/init(mainresource:subresources:subframearchives:)](https://developer.apple.com/documentation/webkit/webarchive/init(mainresource:subresources:subframearchives:))

# init(mainResource:subresources:subframeArchives:) (Swift)

**Framework:** WebKit  
**Kind:** Initializer  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Initializes the receiver with a resource and optional subresources and subframe archives..

## Declaration

```swift
init!(mainResource: WebResource!, subresources: [Any]!, subframeArchives: [Any]!)
```

<a id="Discussion"></a>

## Discussion

This method initializes and returns the receiver by setting the main resource to `mainResource`, and setting the subresources and subframe archives if supplied. The `subresources` argument should be an array of WebResource objects or `nil` if none are specified. The `subframeArchives` should be and array of WebArchive objects used by the subframes or `nil` if none are specified.

## See Also

### Initializing

- [init(data:)](init%28data_%29.md): Deprecated. Initializes and returns the receiver, specifying the initial content data.

# initWithMainResource:subresources:subframeArchives: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Initializes the receiver with a resource and optional subresources and subframe archives..

## Declaration

```objectivec
- (instancetype) initWithMainResource:(WebResource *) mainResource subresources:(NSArray *) subresources subframeArchives:(NSArray *) subframeArchives;
```

<a id="Discussion"></a>

## Discussion

This method initializes and returns the receiver by setting the main resource to `mainResource`, and setting the subresources and subframe archives if supplied. The `subresources` argument should be an array of WebResource objects or `nil` if none are specified. The `subframeArchives` should be and array of WebArchive objects used by the subframes or `nil` if none are specified.

## See Also

### Initializing

- [initWithData:](init%28data_%29.md): Deprecated. Initializes and returns the receiver, specifying the initial content data.
