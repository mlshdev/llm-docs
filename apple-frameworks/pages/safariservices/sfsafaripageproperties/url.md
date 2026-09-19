> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/safariservices/sfsafaripageproperties/url

# url (Swift)

**Framework:** Safari Services  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

Indicates the URL of the page.

## Declaration

```swift
var url: URL? { get }
```

## See Also

### Getting the Safari Page Properties

- [isActive](isactive.md): A Boolean value that indicates whether the page is currently active.
- [title](title.md): The title of the page.
- [usesPrivateBrowsing](usesprivatebrowsing.md): A Boolean value that indicates whether the page is using Safari Private Browsing.

# url (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

Indicates the URL of the page.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSURL * url;
```

## See Also

### Getting the Safari Page Properties

- [active](isactive.md): A Boolean value that indicates whether the page is currently active.
- [title](title.md): The title of the page.
- [usesPrivateBrowsing](usesprivatebrowsing.md): A Boolean value that indicates whether the page is using Safari Private Browsing.
