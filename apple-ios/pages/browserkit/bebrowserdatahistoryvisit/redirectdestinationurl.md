> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/browserkit/bebrowserdatahistoryvisit/redirectdestinationurl

# redirectDestinationURL (Swift)

**Framework:** BrowserKit  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A URL to which the visit redirects.

## Declaration

```swift
var redirectDestinationURL: URL? { get }
```

## See Also

### Managing redirect information

- [redirectDestinationDateOfVisit](redirectdestinationdateofvisit.md): The date of the redirect destination visit.
- [redirectSourceDateOfVisit](redirectsourcedateofvisit.md): The date of the redirect source visit.
- [redirectSourceURL](redirectsourceurl.md): A URL that redirects to the visited page.

# redirectDestinationURL (Objective-C)

**Framework:** BrowserKit  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A URL to which the visit redirects.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSURL * redirectDestinationURL;
```

## See Also

### Managing redirect information

- [redirectDestinationDateOfVisit](redirectdestinationdateofvisit.md): The date of the redirect destination visit.
- [redirectSourceDateOfVisit](redirectsourcedateofvisit.md): The date of the redirect source visit.
- [redirectSourceURL](redirectsourceurl.md): A URL that redirects to the visited page.
