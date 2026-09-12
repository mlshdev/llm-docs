> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdatasource/subresources](https://developer.apple.com/documentation/webkit/webdatasource/subresources)

# subresources (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The data source’s subresources that have finished downloading.

## Declaration

```swift
var subresources: [Any]! { get }
```

## See Also

### Accessing subresources

- [mainResource](mainresource.md): Deprecated. A`WebResource` object representing the data source.
- [addSubresource(\_:)](addsubresource%28__%29.md): Deprecated. Adds a resource to the data source’s list of subresources.
- [subresource(for:)](subresource%28for_%29.md): Deprecated. Returns a subresource for the given URL.

# subresources (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The data source’s subresources that have finished downloading.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray * subresources;
```

## See Also

### Accessing subresources

- [mainResource](mainresource.md): Deprecated. A`WebResource` object representing the data source.
- [addSubresource:](addsubresource%28__%29.md): Deprecated. Adds a resource to the data source’s list of subresources.
- [subresourceForURL:](subresource%28for_%29.md): Deprecated. Returns a subresource for the given URL.
