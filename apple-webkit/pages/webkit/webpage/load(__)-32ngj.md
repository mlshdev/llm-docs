> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/load(_:)-32ngj](https://developer.apple.com/documentation/webkit/webpage/load(_:)-32ngj)

# load(\_:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Navigates to an item from the back-forward list and sets it as the current item.

## Declaration

```swift
@discardableResult @MainActor final func load(_ item: WebPage.BackForwardList.Item) -> some AsyncSequence<WebPage.NavigationEvent, any Error>

```

## Parameters

- `item`: The item to navigate to. The item must be in the webpage’s back-forward list.

<a id="return-value"></a>

## Return Value

An async sequence you use to track the loading progress of the navigation. If the `Task` enclosing the sequence is cancelled, the page will stop loading all resources.

## See Also

### Loading web content

- [load(\_:)](load%28__%29-7kw3h.md): Loads the web content that the specified URL request object references and navigates to that content.
- [load(\_:)](load%28__%29-8wfiq.md): Loads the web content that the specified URL references and navigates to that content.
- [load(\_:mimeType:characterEncoding:baseURL:)](load%28__mimetype_characterencoding_baseurl_%29.md): Loads the content of the specified data object and navigates to it.
- [load(html:baseURL:)](load%28html_baseurl_%29.md): Loads the contents of the specified HTML string and navigates to it.
- [load(simulatedRequest:responseHTML:)](load%28simulatedrequest_responsehtml_%29.md): Loads the web content from the HTML you provide as if the HTML were the response to the request.
- [load(simulatedRequest:response:responseData:)](load%28simulatedrequest_response_responsedata_%29.md): Loads the web content from the data you provide as if the data were the response to the request.
- [isLoading](isloading.md): Indicates whether the webpage is currently loading content.
- [estimatedProgress](estimatedprogress.md): An estimate of completion percentage of the current navigation.
