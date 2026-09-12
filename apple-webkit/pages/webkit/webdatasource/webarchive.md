> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdatasource/webarchive](https://developer.apple.com/documentation/webkit/webdatasource/webarchive)

# webArchive (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A web archive representing the data source, its subresources, and subframes.

## Declaration

```swift
var webArchive: WebArchive! { get }
```

<a id="Discussion"></a>

## Discussion

In the case of HTML, if the current content is preferred, then send [webArchive](webarchive.md) to the appropriate DOM object.

## See Also

### Related Documentation

- [mainResource](mainresource.md): Deprecated. A`WebResource` object representing the data source.

# webArchive (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A web archive representing the data source, its subresources, and subframes.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) WebArchive * webArchive;
```

<a id="Discussion"></a>

## Discussion

In the case of HTML, if the current content is preferred, then send [webArchive](webarchive.md) to the appropriate DOM object.

## See Also

### Related Documentation

- [mainResource](mainresource.md): Deprecated. A`WebResource` object representing the data source.
