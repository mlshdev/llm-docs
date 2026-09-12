> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdatasource/addsubresource(_:)](https://developer.apple.com/documentation/webkit/webdatasource/addsubresource(_:))

# addSubresource(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Adds a resource to the data source’s list of subresources.

## Declaration

```swift
func addSubresource(_ subresource: WebResource!)
```

## Parameters

- `subresource`: The resource to add to the data source.

<a id="Discussion"></a>

## Discussion

If the data source needs to reload the resource’s URL, it loads the data from `subresource` instead of the network. For example, use this method if you want to use a previously downloaded image rather than accessing the network to reload a resource. If the data source already has a resource with the same URL as `subresource`, then this method replaces it.

## See Also

### Accessing subresources

- [mainResource](mainresource.md): Deprecated. A`WebResource` object representing the data source.
- [subresource(for:)](subresource%28for_%29.md): Deprecated. Returns a subresource for the given URL.
- [subresources](subresources.md): Deprecated. The data source’s subresources that have finished downloading.

# addSubresource: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Adds a resource to the data source’s list of subresources.

## Declaration

```objectivec
- (void) addSubresource:(WebResource *) subresource;
```

## Parameters

- `subresource`: The resource to add to the data source.

<a id="Discussion"></a>

## Discussion

If the data source needs to reload the resource’s URL, it loads the data from `subresource` instead of the network. For example, use this method if you want to use a previously downloaded image rather than accessing the network to reload a resource. If the data source already has a resource with the same URL as `subresource`, then this method replaces it.

## See Also

### Accessing subresources

- [mainResource](mainresource.md): Deprecated. A`WebResource` object representing the data source.
- [subresourceForURL:](subresource%28for_%29.md): Deprecated. Returns a subresource for the given URL.
- [subresources](subresources.md): Deprecated. The data source’s subresources that have finished downloading.
