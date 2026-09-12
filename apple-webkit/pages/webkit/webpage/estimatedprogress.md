> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/estimatedprogress](https://developer.apple.com/documentation/webkit/webpage/estimatedprogress)

# estimatedProgress

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

An estimate of completion percentage of the current navigation.

## Declaration

```swift
@MainActor final var estimatedProgress: Double { get }
```

<a id="discussion"></a>

## Discussion

The value ranges from `0.0` to `1.0` based on the total number of bytes received, including the main document and all of its potential subresources. After navigation loading completes, the `estimatedProgress` value remains at `1.0` until a new navigation starts, at which point the `estimatedProgress` value resets to `0.0`.

## See Also

### Loading web content

- [load(\_:)](load%28__%29-32ngj.md): Navigates to an item from the back-forward list and sets it as the current item.
- [load(\_:)](load%28__%29-7kw3h.md): Loads the web content that the specified URL request object references and navigates to that content.
- [load(\_:)](load%28__%29-8wfiq.md): Loads the web content that the specified URL references and navigates to that content.
- [load(\_:mimeType:characterEncoding:baseURL:)](load%28__mimetype_characterencoding_baseurl_%29.md): Loads the content of the specified data object and navigates to it.
- [load(html:baseURL:)](load%28html_baseurl_%29.md): Loads the contents of the specified HTML string and navigates to it.
- [load(simulatedRequest:responseHTML:)](load%28simulatedrequest_responsehtml_%29.md): Loads the web content from the HTML you provide as if the HTML were the response to the request.
- [load(simulatedRequest:response:responseData:)](load%28simulatedrequest_response_responsedata_%29.md): Loads the web content from the data you provide as if the data were the response to the request.
- [isLoading](isloading.md): Indicates whether the webpage is currently loading content.
