> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterbrowserflow/parenturl](https://developer.apple.com/documentation/networkextension/nefilterbrowserflow/parenturl)

# parentURL (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A URL of the web page that’s responsible for the flow’s creation.

## Declaration

```swift
var parentURL: URL? { get }
```

<a id="Discussion"></a>

## Discussion

This property will be non-nil only if the flow is loading a resource into a frame. In that case, this property will be set to the URL of the web page containing the frame.

## See Also

### Getting browser flow properties

- [request](request.md): An HTTP request of the flow.
- [response](response.md): An HTTP response of the flow.

# parentURL (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A URL of the web page that’s responsible for the flow’s creation.

## Declaration

```objectivec
@property (readonly, nullable) NSURL * parentURL;
```

<a id="Discussion"></a>

## Discussion

This property will be non-nil only if the flow is loading a resource into a frame. In that case, this property will be set to the URL of the web page containing the frame.

## See Also

### Getting browser flow properties

- [request](request.md): An HTTP request of the flow.
- [response](response.md): An HTTP response of the flow.
