> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/linkpresentation/lplinkmetadata/originalurl

# originalURL (Swift)

**Framework:** Link Presentation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The original URL of the metadata request.

## Declaration

```swift
var originalURL: URL? { get set }
```

## See Also

### Identifying the link

- [url](url.md): The URL that returned the metadata, taking server-side redirects into account.

# originalURL (Objective-C)

**Framework:** Link Presentation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The original URL of the metadata request.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) NSURL * originalURL;
```

## See Also

### Identifying the link

- [URL](url.md): The URL that returned the metadata, taking server-side redirects into account.
