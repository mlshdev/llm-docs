> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/xmlhttprequest](https://developer.apple.com/documentation/tvmljs/xmlhttprequest)

# XMLHttpRequest

**Interface language:** Data

**Framework:** TVMLKit JS, WebKit JS  
**Kind:** Class  
**Availability:** tvOS 9.0+ · Safari Desktop 10.0+ · Safari Mobile 3.0+

An object used to retrieve data from a URL.

## Declaration

```
interface XMLHttpRequest
```

## Topics

### Initializing and Sending a Request

- [abort](xmlhttprequest/1627356-abort.md): Cancels any network activity.
- [open](xmlhttprequest/1627318-open.md): Sets the method, URL, and synchronous flag for a request.
- [send](xmlhttprequest/1627309-send.md): Sends the request.
- [timeout](xmlhttprequest/1627335-timeout.md): The amount of time, in milliseconds, before causing a request to time out.
- [XMLHttpRequest](xmlhttprequest/1627350-xmlhttprequest.md): Creates a new XMLHttpRequest.

### Manipulating the Header List

- [getAllResponseHeaders](xmlhttprequest/1627343-getallresponseheaders.md): Returns all of the response headers.
- [getResponseHeader](xmlhttprequest/1627438-getresponseheader.md): Retrieves the field value from the response that is contained in the specified header.
- [setRequestHeader](xmlhttprequest/1627317-setrequestheader.md): Appends a header to the list of request headers.

### Retrieving Request Information

- [metrics](xmlhttprequest/1627436-metrics.md): A dictionary of keys used to request start and response start and end times.
- [readyState](xmlhttprequest/1627324-readystate.md): The current state of the request.
- [response](xmlhttprequest/1627364-response.md): The response entity body.
- [responseCacheIsValid](https://developer.apple.com/documentation/webkitjs/xmlhttprequest/2871089-responsecacheisvalid)
- [responseText](xmlhttprequest/1627363-responsetext.md): The response to the request.
- [responseType](xmlhttprequest/1627342-responsetype.md): The type of response.
- [responseURL](https://developer.apple.com/documentation/webkitjs/xmlhttprequest/1630664-responseurl)
- [responseXML](xmlhttprequest/1627307-responsexml.md): The document response entity body.
- [status](xmlhttprequest/1627403-status.md): The HTTP status code.
- [statusText](xmlhttprequest/1627375-statustext.md): The HTTP status text.

### Implementing Callback Functions

- [onabort](xmlhttprequest/1627410-onabort.md): A callback function called when a request is cancelled by the user.
- [onerror](xmlhttprequest/1627328-onerror.md): A callback function that is called if the request fails due to an error.
- [onload](xmlhttprequest/1627316-onload.md): A callback function that is called when the request is successfully completed.
- [onloadend](xmlhttprequest/1627365-onloadend.md): A callback function that is called when the request is completed for any reason.
- [onloadstart](xmlhttprequest/1627440-onloadstart.md): A callback function that is called when the request begins.
- [onreadystatechange](xmlhttprequest/1627414-onreadystatechange.md): A callback function that is called when the [readyState](xmlhttprequest/1627324-readystate.md) attribute changes.
- [ontimeout](xmlhttprequest/1627321-ontimeout.md): A callback function that is called when a request times out.

### Responding to Events

- [abort](xmlhttprequest/1627402-abort.md): An event signifying the request has aborted.
- [error](xmlhttprequest/1627326-error.md): An event signifying an error occurred during the request.
- [load](xmlhttprequest/1627352-load.md): An event signifying the request was successfully loaded.
- [loadend](xmlhttprequest/1627393-loadend.md): An event signifying the request has been completed.
- [loadstart](xmlhttprequest/1627371-loadstart.md): An event signifying the request has begun.
- [readystatechange](xmlhttprequest/1627304-readystatechange.md): An event signifying that a state change has occurred.

### WebKit JS Only

- [upload](https://developer.apple.com/documentation/webkitjs/xmlhttprequest/1631575-upload)
- [withCredentials](https://developer.apple.com/documentation/webkitjs/xmlhttprequest/1629921-withcredentials)
- [overrideMimeType](https://developer.apple.com/documentation/webkitjs/xmlhttprequest/1630533-overridemimetype)
- [retrieveResponse](https://developer.apple.com/documentation/webkitjs/xmlhttprequest/2871231-retrieveresponse)
- [UNSENT](https://developer.apple.com/documentation/webkitjs/xmlhttprequest/1630628-unsent)
- [OPENED](https://developer.apple.com/documentation/webkitjs/xmlhttprequest/1634462-opened)
- [HEADERS_RECEIVED](https://developer.apple.com/documentation/webkitjs/xmlhttprequest/1632988-headers_received)
- [LOADING](https://developer.apple.com/documentation/webkitjs/xmlhttprequest/1630055-loading)
- [DONE](https://developer.apple.com/documentation/webkitjs/xmlhttprequest/1630343-done)

## Relationships

### Inherits From

- [EventListenerObject](eventlistenerobject.md)
- [XMLHttpRequestEventTarget](https://developer.apple.com/documentation/webkitjs/xmlhttprequesteventtarget)

## See Also

### Data Storage and Retrieval

- [Binding JSON data to TVML documents](binding_json_data_to_tvml_documents.md): Create full-fledged TVML documents by using data binding and queries on simplified TVML files.
- [DataItem](dataitem.md): An object used to create observable objects from JSON objects for data binding.
- [Storage](storage.md): An object used to store key-value-pair information.
- [DataSource](datasource.md): An interface that allows the system to detect and respond to changes in your data.
- [LoadIndexesRequest](loadindexesrequest.md): A request created when the [loadindexes](datasource/datasource/3192119-loadindexes.md) event is triggered.
