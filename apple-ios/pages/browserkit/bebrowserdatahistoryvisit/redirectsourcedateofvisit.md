> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/browserkit/bebrowserdatahistoryvisit/redirectsourcedateofvisit

# redirectSourceDateOfVisit (Swift)

**Framework:** BrowserKit  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+

The date of the redirect source visit.

## Declaration

```swift
var redirectSourceDateOfVisit: Date? { get }
```

## See Also

### Managing redirect information

- [redirectDestinationDateOfVisit](redirectdestinationdateofvisit.md): The date of the redirect destination visit.
- [redirectDestinationURL](redirectdestinationurl.md): A URL to which the visit redirects.
- [redirectSourceURL](redirectsourceurl.md): A URL that redirects to the visited page.

# redirectSourceDateOfVisit (Objective-C)

**Framework:** BrowserKit  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+

The date of the redirect source visit.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDate * redirectSourceDateOfVisit;
```

## See Also

### Managing redirect information

- [redirectDestinationDateOfVisit](redirectdestinationdateofvisit.md): The date of the redirect destination visit.
- [redirectDestinationURL](redirectdestinationurl.md): A URL to which the visit redirects.
- [redirectSourceURL](redirectsourceurl.md): A URL that redirects to the visited page.
