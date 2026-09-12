> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfaddtohomescreeninfo/manifest](https://developer.apple.com/documentation/safariservices/sfaddtohomescreeninfo/manifest)

# manifest (Swift)

**Framework:** Safari Services  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · visionOS 2.2+

## Declaration

```swift
@NSCopying var manifest: BEWebAppManifest { get }
```

<a id="discussion"></a>

## Discussion

A property for the web app manifest. This is only available to apps that can use BrowserEngineKit.

The web app manifest for the bookmark.

## See Also

### Information about a web app

- [websiteCookies](websitecookies.md)

# manifest (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · visionOS 2.2+

## Declaration

```objectivec
@property (nonatomic, copy, readonly) BEWebAppManifest * manifest;
```

<a id="discussion"></a>

## Discussion

A property for the web app manifest. This is only available to apps that can use BrowserEngineKit.

The web app manifest for the bookmark.

## See Also

### Information about a web app

- [websiteCookies](websitecookies.md)
