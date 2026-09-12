> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterbrowserflow/response](https://developer.apple.com/documentation/networkextension/nefilterbrowserflow/response)

# response (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An HTTP response of the flow.

## Declaration

```swift
var response: URLResponse? { get }
```

<a id="Discussion"></a>

## Discussion

This property will be nil until some incoming data is received for this flow.

## See Also

### Getting browser flow properties

- [parentURL](parenturl.md): A URL of the web page that’s responsible for the flow’s creation.
- [request](request.md): An HTTP request of the flow.

# response (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An HTTP response of the flow.

## Declaration

```objectivec
@property (readonly, nullable) NSURLResponse * response;
```

<a id="Discussion"></a>

## Discussion

This property will be nil until some incoming data is received for this flow.

## See Also

### Getting browser flow properties

- [parentURL](parenturl.md): A URL of the web page that’s responsible for the flow’s creation.
- [request](request.md): An HTTP request of the flow.
