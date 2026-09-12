> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/nsreadaccessurldocumentoption](https://developer.apple.com/documentation/webkit/nsreadaccessurldocumentoption)

# NSReadAccessURLDocumentOption

**Interface language:** Objective-C

**Framework:** WebKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

## Declaration

```objectivec
extern NSAttributedStringDocumentReadingOptionKey const NSReadAccessURLDocumentOption;
```

<a id="discussion"></a>

## Discussion

Indicates which local files WebKit can access when loading content.

If NSReadAccessURLDocumentOption references a single file, only that file may be loaded by WebKit. If NSReadAccessURLDocumentOption references a directory, files inside that directory may be loaded by WebKit.

## See Also

### Web data management

- [WKWebsiteDataStore](wkwebsitedatastore.md): An object that manages cookies, disk and memory caches, and other types of data for a web view.
- [WKWebsiteDataRecord](wkwebsitedatarecord.md): A record of the data that a particular website stores persistently.
- [WKHTTPCookieStore](wkhttpcookiestore.md): An object that manages the HTTP cookies associated with a particular web view.
- [WKURLSchemeHandler](wkurlschemehandler.md): A protocol for loading resources with URL schemes that WebKit doesn’t handle.
- [WKURLSchemeTask](wkurlschemetask.md): An interface that WebKit uses to request custom resources from your app.
- [WKCookiePolicy](wkhttpcookiestore/cookiepolicy.md): An enumeration with cases that indicate whether a cookie store allows cookie storage.
