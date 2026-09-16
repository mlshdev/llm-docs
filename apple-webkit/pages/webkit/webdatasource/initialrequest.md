> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/webdatasource/initialrequest

# initialRequest (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A reference to the original request that was used to load the web content.

## Declaration

```swift
var initialRequest: URLRequest! { get }
```

## See Also

### Getting the request and response

- [request](request.md): Deprecated. The request that was used to create the data source.
- [response](response.md): Deprecated. The response for this data source.

# initialRequest (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A reference to the original request that was used to load the web content.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSURLRequest * initialRequest;
```

## See Also

### Getting the request and response

- [request](request.md): Deprecated. The request that was used to create the data source.
- [response](response.md): Deprecated. The response for this data source.
