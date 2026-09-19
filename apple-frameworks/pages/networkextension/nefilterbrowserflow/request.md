> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nefilterbrowserflow/request

# request (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An HTTP request of the flow.

## Declaration

```swift
var request: URLRequest? { get }
```

## See Also

### Getting browser flow properties

- [parentURL](parenturl.md): A URL of the web page that’s responsible for the flow’s creation.
- [response](response.md): An HTTP response of the flow.

# request (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An HTTP request of the flow.

## Declaration

```objectivec
@property (readonly, nullable) NSURLRequest * request;
```

## See Also

### Getting browser flow properties

- [parentURL](parenturl.md): A URL of the web page that’s responsible for the flow’s creation.
- [response](response.md): An HTTP response of the flow.
