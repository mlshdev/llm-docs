> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/bebrowserdatahistoryvisit/init(url:dateoflastvisit:title:loadedsuccessfully:httpget:redirectsourceurl:redirectsourcedateofvisit:redirectdestinationurl:redirectdestinationdateofvisit:visitcount:)-j2oc](https://developer.apple.com/documentation/browserkit/bebrowserdatahistoryvisit/init(url:dateoflastvisit:title:loadedsuccessfully:httpget:redirectsourceurl:redirectsourcedateofvisit:redirectdestinationurl:redirectdestinationdateofvisit:visitcount:)-j2oc)

# init(url:dateOfLastVisit:title:loadedSuccessfully:httpGet:redirectSourceURL:redirectSourceDateOfVisit:redirectDestinationURL:redirectDestinationDateOfVisit:visitCount:) (Swift)

**Framework:** BrowserKit  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Creates a record of a page visit that includes metadata and redirect information.

## Declaration

```swift
init(url: URL, dateOfLastVisit: Date, title: String?, loadedSuccessfully: Bool, httpGet: Bool, redirectSourceURL: URL?, redirectSourceDateOfVisit: Date?, redirectDestinationURL: URL?, redirectDestinationDateOfVisit: Date?, visitCount: Int)
```

## Parameters

- `url`: The URL of the visited page.
- `dateOfLastVisit`: The date someone last visited the page.
- `title`: The title of the visited page, or `nil` if unavailable.
- `loadedSuccessfully`: A Boolean value that indicates whether the page loaded without errors.
- `httpGet`: A Boolean value that indicates whether the visit used an HTTP GET request.
- `redirectSourceURL`: A URL that redirects to the visited page, or `nil` if the visit isn’t the destination of a redirect.
- `redirectSourceDateOfVisit`: The date someone navigates to the source URL, or `nil` if the visit isn’t the destination of a redirect.
- `redirectDestinationURL`: The URL to which this page redirects, or `nil` if the visit doesn’t redirect.
- `redirectDestinationDateOfVisit`: The date someone navigates to the redirected destination, or `nil` if the visit doesn’t redirect.
- `visitCount`: The number of times someone visited this page.

# initWithURL:dateOfLastVisit:title:loadedSuccessfully:httpGet:redirectSourceURL:redirectSourceDateOfVisit:redirectDestinationURL:redirectDestinationDateOfVisit:visitCount: (Objective-C)

**Framework:** BrowserKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Creates a record of a page visit that includes metadata and redirect information.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url dateOfLastVisit:(NSDate *) dateOfLastVisit title:(NSString *) title loadedSuccessfully:(BOOL) loadedSuccessfully httpGet:(BOOL) httpGet redirectSourceURL:(NSURL *) redirectSourceURL redirectSourceDateOfVisit:(NSDate *) redirectSourceDateOfVisit redirectDestinationURL:(NSURL *) redirectDestinationURL redirectDestinationDateOfVisit:(NSDate *) redirectDestinationDateOfVisit visitCount:(NSUInteger) visitCount;
```

## Parameters

- `url`: The URL of the visited page.
- `dateOfLastVisit`: The date someone last visited the page.
- `title`: The title of the visited page, or `nil` if unavailable.
- `loadedSuccessfully`: A Boolean value that indicates whether the page loaded without errors.
- `httpGet`: A Boolean value that indicates whether the visit used an HTTP GET request.
- `redirectSourceURL`: A URL that redirects to the visited page, or `nil` if the visit isn’t the destination of a redirect.
- `redirectSourceDateOfVisit`: The date someone navigates to the source URL, or `nil` if the visit isn’t the destination of a redirect.
- `redirectDestinationURL`: The URL to which this page redirects, or `nil` if the visit doesn’t redirect.
- `redirectDestinationDateOfVisit`: The date someone navigates to the redirected destination, or `nil` if the visit doesn’t redirect.
- `visitCount`: The number of times someone visited this page.
