> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdatasource/subresource(for:)](https://developer.apple.com/documentation/webkit/webdatasource/subresource(for:))

# subresource(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns a subresource for the given URL.

## Declaration

```swift
func subresource(for URL: URL!) -> WebResource!
```

## Parameters

- `URL`: The subresource’s URL.

<a id="return-value"></a>

## Return Value

The subresource for `URL` or `nil` if the data source hasn’t finished downloading the subresource.

## See Also

### Accessing subresources

- [mainResource](mainresource.md): Deprecated. A`WebResource` object representing the data source.
- [addSubresource(\_:)](addsubresource%28__%29.md): Deprecated. Adds a resource to the data source’s list of subresources.
- [subresources](subresources.md): Deprecated. The data source’s subresources that have finished downloading.

# subresourceForURL: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns a subresource for the given URL.

## Declaration

```objectivec
- (WebResource *) subresourceForURL:(NSURL *) URL;
```

## Parameters

- `URL`: The subresource’s URL.

<a id="return-value"></a>

## Return Value

The subresource for `URL` or `nil` if the data source hasn’t finished downloading the subresource.

## See Also

### Accessing subresources

- [mainResource](mainresource.md): Deprecated. A`WebResource` object representing the data source.
- [addSubresource:](addsubresource%28__%29.md): Deprecated. Adds a resource to the data source’s list of subresources.
- [subresources](subresources.md): Deprecated. The data source’s subresources that have finished downloading.
