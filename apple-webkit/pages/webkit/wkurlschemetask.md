> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkurlschemetask](https://developer.apple.com/documentation/webkit/wkurlschemetask)

# WKURLSchemeTask (Swift)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

An interface that WebKit uses to request custom resources from your app.

## Declaration

```swift
protocol WKURLSchemeTask : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The [WKURLSchemeTask](wkurlschemetask.md) protocol defines an interface that WebKit uses to request custom resources. You don’t adopt this interface in your own objects. Instead, WebKit creates objects that adopt this interface and delivers them to your custom scheme handlers — that is, objects that adopt the [WKURLSchemeHandler](wkurlschemehandler.md) protocol. You use the objects that WebKit provides to get information about the requested resources and load them. You also use those objects to report your progress back to WebKit.

When WebKit needs a custom scheme, it places an appropriate URL request in the task’s [request](wkurlschemetask/request.md) property. Upon receiving the request, determine the size of the resource and call the [didReceive(\_:)](wkurlschemetask/didreceive%28__%29-2u23r.md) method with an appropriate URL response object. Providing a response mirrors the behavior that a web server performs when it receives a request.

After you load some portion of the resource data, call the [didReceive(\_:)](wkurlschemetask/didreceive%28__%29-8t5f8.md) method to send it to WebKit. You may call that method multiple times to deliver data incrementally, or call it once with all of the data. After you finish delivering all of the data, call the [didFinish()](wkurlschemetask/didfinish%28%29.md) method. If an error occurs at any point during the load process, call [didFailWithError(\_:)](wkurlschemetask/didfailwitherror%28__%29.md) to report it.

## Topics

### Getting the URL of the Requested Resource

- [request](wkurlschemetask/request.md): Information about the resource to load.

### Reporting Progress Back to WebKit

- [didReceive(\_:)](wkurlschemetask/didreceive%28__%29-2u23r.md): Returns a URL response to WebKit with information about the requested resource.
- [didReceive(\_:)](wkurlschemetask/didreceive%28__%29-8t5f8.md): Sends some or all of the resource data to WebKit.
- [didFinish()](wkurlschemetask/didfinish%28%29.md): Signals the successful completion of the task.

### Reporting an Error to WebKit

- [didFailWithError(\_:)](wkurlschemetask/didfailwitherror%28__%29.md): Completes the task and reports the specified error back to WebKit.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Web data management

- [WKWebsiteDataStore](wkwebsitedatastore.md): An object that manages cookies, disk and memory caches, and other types of data for a web view.
- [WKWebsiteDataRecord](wkwebsitedatarecord.md): A record of the data that a particular website stores persistently.
- [WKHTTPCookieStore](wkhttpcookiestore.md): An object that manages the HTTP cookies associated with a particular web view.
- [WKURLSchemeHandler](wkurlschemehandler.md): A protocol for loading resources with URL schemes that WebKit doesn’t handle.
- [readAccessURL](https://developer.apple.com/documentation/foundation/nsattributedstring/documentreadingoptionkey/readaccessurl): The local files WebKit can access when loading content.

# WKURLSchemeTask (Objective-C)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

An interface that WebKit uses to request custom resources from your app.

## Declaration

```objectivec
@protocol WKURLSchemeTask <NSObject>
```

<a id="overview"></a>

## Overview

The [WKURLSchemeTask](wkurlschemetask.md) protocol defines an interface that WebKit uses to request custom resources. You don’t adopt this interface in your own objects. Instead, WebKit creates objects that adopt this interface and delivers them to your custom scheme handlers — that is, objects that adopt the [WKURLSchemeHandler](wkurlschemehandler.md) protocol. You use the objects that WebKit provides to get information about the requested resources and load them. You also use those objects to report your progress back to WebKit.

When WebKit needs a custom scheme, it places an appropriate URL request in the task’s [request](wkurlschemetask/request.md) property. Upon receiving the request, determine the size of the resource and call the [didReceiveResponse:](wkurlschemetask/didreceive%28__%29-2u23r.md) method with an appropriate URL response object. Providing a response mirrors the behavior that a web server performs when it receives a request.

After you load some portion of the resource data, call the [didReceiveData:](wkurlschemetask/didreceive%28__%29-8t5f8.md) method to send it to WebKit. You may call that method multiple times to deliver data incrementally, or call it once with all of the data. After you finish delivering all of the data, call the [didFinish](wkurlschemetask/didfinish%28%29.md) method. If an error occurs at any point during the load process, call [didFailWithError:](wkurlschemetask/didfailwitherror%28__%29.md) to report it.

## Topics

### Getting the URL of the Requested Resource

- [request](wkurlschemetask/request.md): Information about the resource to load.

### Reporting Progress Back to WebKit

- [didReceiveResponse:](wkurlschemetask/didreceive%28__%29-2u23r.md): Returns a URL response to WebKit with information about the requested resource.
- [didReceiveData:](wkurlschemetask/didreceive%28__%29-8t5f8.md): Sends some or all of the resource data to WebKit.
- [didFinish](wkurlschemetask/didfinish%28%29.md): Signals the successful completion of the task.

### Reporting an Error to WebKit

- [didFailWithError:](wkurlschemetask/didfailwitherror%28__%29.md): Completes the task and reports the specified error back to WebKit.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Web data management

- [WKWebsiteDataStore](wkwebsitedatastore.md): An object that manages cookies, disk and memory caches, and other types of data for a web view.
- [WKWebsiteDataRecord](wkwebsitedatarecord.md): A record of the data that a particular website stores persistently.
- [WKHTTPCookieStore](wkhttpcookiestore.md): An object that manages the HTTP cookies associated with a particular web view.
- [WKURLSchemeHandler](wkurlschemehandler.md): A protocol for loading resources with URL schemes that WebKit doesn’t handle.
- [NSReadAccessURLDocumentOption](nsreadaccessurldocumentoption.md)
- [WKCookiePolicy](wkhttpcookiestore/cookiepolicy.md): An enumeration with cases that indicate whether a cookie store allows cookie storage.
