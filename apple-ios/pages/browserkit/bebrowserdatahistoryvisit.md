> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/bebrowserdatahistoryvisit](https://developer.apple.com/documentation/browserkit/bebrowserdatahistoryvisit)

# BEBrowserDataHistoryVisit (Swift)

**Framework:** BrowserKit  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A class that transfers page visit history between browsers.

## Declaration

```swift
class BEBrowserDataHistoryVisit
```

<a id="overview"></a>

## Overview

This class captures comprehensive information about a page visit, including metadata, the URL, redirect information, and success status. The redirect properties enable a browser to preserve full navigation context when transferring history.

## Topics

### Gathering data that creates the history of a visit

- [init(url:dateOfLastVisit:title:loadedSuccessfully:httpGet:redirectSourceURL:redirectSourceDateOfVisit:redirectDestinationURL:redirectDestinationDateOfVisit:visitCount:)](bebrowserdatahistoryvisit/init%28url_dateoflastvisit_title_loadedsuccessfully_httpget_redirectsourceurl_redirectsourcedateofvisit_redirectdestinationurl_redirectdestinationdateofvisit_visitcount_%29-j2oc.md): Creates a record of a page visit that includes metadata and redirect information.

### Accessing visit properties

- [dateOfLastVisit](bebrowserdatahistoryvisit/dateoflastvisit.md): The date of the person’s last page visit.
- [httpGet](bebrowserdatahistoryvisit/httpget.md): A Boolean value that indicates whether the visit is an HTTP GET request.
- [loadedSuccessfully](bebrowserdatahistoryvisit/loadedsuccessfully.md): A Boolean value that indicates whether the page loads without errors.
- [title](bebrowserdatahistoryvisit/title.md): A localized title for a visited page.
- [url](bebrowserdatahistoryvisit/url.md): A URL for the visited page.
- [visitCount](bebrowserdatahistoryvisit/visitcount.md): A count of how many visits the page received.

### Managing redirect information

- [redirectDestinationDateOfVisit](bebrowserdatahistoryvisit/redirectdestinationdateofvisit.md): The date of the redirect destination visit.
- [redirectDestinationURL](bebrowserdatahistoryvisit/redirectdestinationurl.md): A URL to which the visit redirects.
- [redirectSourceDateOfVisit](bebrowserdatahistoryvisit/redirectsourcedateofvisit.md): The date of the redirect source visit.
- [redirectSourceURL](bebrowserdatahistoryvisit/redirectsourceurl.md): A URL that redirects to the visited page.

### Initializers

- [init(URL:dateOfLastVisit:title:loadedSuccessfully:httpGet:redirectSourceURL:redirectSourceDateOfVisit:redirectDestinationURL:redirectDestinationDateOfVisit:visitCount:)](bebrowserdatahistoryvisit/init%28url_dateoflastvisit_title_loadedsuccessfully_httpget_redirectsourceurl_redirectsourcedateofvisit_redirectdestinationurl_redirectdestinationdateofvisit_visitcount_%29-hvhk.md)

## Relationships

### Inherits From

- [BEBrowserData](bebrowserdata.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Browser data

- [BEBrowserDataBookmark](bebrowserdatabookmark.md): A class that transfers bookmark information between browsers.
- [BEBrowserDataReadingListItem](bebrowserdatareadinglistitem.md): A class that transfers reading list data between browsers.
- [BEBrowserDataExtension](bebrowserdataextension.md): A class that transfers browser extension information between browsers.
- [BEBrowserData](bebrowserdata.md): A representation of browsing data from a source browser app.

# BEBrowserDataHistoryVisit (Objective-C)

**Framework:** BrowserKit  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A class that transfers page visit history between browsers.

## Declaration

```objectivec
@interface BEBrowserDataHistoryVisit : BEBrowserData
```

<a id="overview"></a>

## Overview

This class captures comprehensive information about a page visit, including metadata, the URL, redirect information, and success status. The redirect properties enable a browser to preserve full navigation context when transferring history.

## Topics

### Gathering data that creates the history of a visit

- [initWithURL:dateOfLastVisit:title:loadedSuccessfully:httpGet:redirectSourceURL:redirectSourceDateOfVisit:redirectDestinationURL:redirectDestinationDateOfVisit:visitCount:](bebrowserdatahistoryvisit/init%28url_dateoflastvisit_title_loadedsuccessfully_httpget_redirectsourceurl_redirectsourcedateofvisit_redirectdestinationurl_redirectdestinationdateofvisit_visitcount_%29-j2oc.md): Creates a record of a page visit that includes metadata and redirect information.

### Accessing visit properties

- [dateOfLastVisit](bebrowserdatahistoryvisit/dateoflastvisit.md): The date of the person’s last page visit.
- [httpGet](bebrowserdatahistoryvisit/httpget.md): A Boolean value that indicates whether the visit is an HTTP GET request.
- [loadedSuccessfully](bebrowserdatahistoryvisit/loadedsuccessfully.md): A Boolean value that indicates whether the page loads without errors.
- [title](bebrowserdatahistoryvisit/title.md): A localized title for a visited page.
- [url](bebrowserdatahistoryvisit/url.md): A URL for the visited page.
- [visitCount](bebrowserdatahistoryvisit/visitcount.md): A count of how many visits the page received.

### Managing redirect information

- [redirectDestinationDateOfVisit](bebrowserdatahistoryvisit/redirectdestinationdateofvisit.md): The date of the redirect destination visit.
- [redirectDestinationURL](bebrowserdatahistoryvisit/redirectdestinationurl.md): A URL to which the visit redirects.
- [redirectSourceDateOfVisit](bebrowserdatahistoryvisit/redirectsourcedateofvisit.md): The date of the redirect source visit.
- [redirectSourceURL](bebrowserdatahistoryvisit/redirectsourceurl.md): A URL that redirects to the visited page.

## Relationships

### Inherits From

- [BEBrowserData](bebrowserdata.md)

## See Also

### Browser data

- [BEBrowserDataBookmark](bebrowserdatabookmark.md): A class that transfers bookmark information between browsers.
- [BEBrowserDataReadingListItem](bebrowserdatareadinglistitem.md): A class that transfers reading list data between browsers.
- [BEBrowserDataExtension](bebrowserdataextension.md): A class that transfers browser extension information between browsers.
- [BEBrowserData](bebrowserdata.md): A representation of browsing data from a source browser app.
