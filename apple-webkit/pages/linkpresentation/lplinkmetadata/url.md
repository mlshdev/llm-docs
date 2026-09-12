> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/linkpresentation/lplinkmetadata/url](https://developer.apple.com/documentation/linkpresentation/lplinkmetadata/url)

# url (Swift)

**Framework:** Link Presentation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The URL that returned the metadata, taking server-side redirects into account.

## Declaration

```swift
var url: URL? { get set }
```

<a id="discussion"></a>

## Discussion

The URL that returns the metadata may differ from the [originalURL](originalurl.md) to which you sent the metadata request. This can happen if the server redirects the request, for example, when a resource has moved, or when the original URL is a domain alias.

## See Also

### Identifying the link

- [originalURL](originalurl.md): The original URL of the metadata request.

# URL (Objective-C)

**Framework:** Link Presentation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The URL that returned the metadata, taking server-side redirects into account.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) NSURL * URL;
```

<a id="discussion"></a>

## Discussion

The URL that returns the metadata may differ from the [originalURL](originalurl.md) to which you sent the metadata request. This can happen if the server redirects the request, for example, when a resource has moved, or when the original URL is a domain alias.

## See Also

### Identifying the link

- [originalURL](originalurl.md): The original URL of the metadata request.
