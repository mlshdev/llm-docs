> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/webhistoryitem/urlstring

# urlString (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The string representation of the URL for the receiver’s page.

## Declaration

```swift
var urlString: String! { get }
```

<a id="Discussion"></a>

## Discussion

This URL may differ from the original URL if the page was, for example, redirected to a new location.

## See Also

### Getting URL information

- [originalURLString](originalurlstring.md): Deprecated. The string representation of the original URL for the receiver’s page.

# URLString (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The string representation of the URL for the receiver’s page.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * URLString;
```

<a id="Discussion"></a>

## Discussion

This URL may differ from the original URL if the page was, for example, redirected to a new location.

## See Also

### Getting URL information

- [originalURLString](originalurlstring.md): Deprecated. The string representation of the original URL for the receiver’s page.
