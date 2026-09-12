> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdatasource/mainresource](https://developer.apple.com/documentation/webkit/webdatasource/mainresource)

# mainResource (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A`WebResource` object representing the data source.

## Declaration

```swift
var mainResource: WebResource! { get }
```

## See Also

### Accessing subresources

- [addSubresource(\_:)](addsubresource%28__%29.md): Deprecated. Adds a resource to the data source’s list of subresources.
- [subresource(for:)](subresource%28for_%29.md): Deprecated. Returns a subresource for the given URL.
- [subresources](subresources.md): Deprecated. The data source’s subresources that have finished downloading.

# mainResource (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A`WebResource` object representing the data source.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) WebResource * mainResource;
```

## See Also

### Accessing subresources

- [addSubresource:](addsubresource%28__%29.md): Deprecated. Adds a resource to the data source’s list of subresources.
- [subresourceForURL:](subresource%28for_%29.md): Deprecated. Returns a subresource for the given URL.
- [subresources](subresources.md): Deprecated. The data source’s subresources that have finished downloading.
