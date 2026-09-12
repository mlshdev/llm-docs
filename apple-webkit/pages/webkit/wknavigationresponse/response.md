> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationresponse/response](https://developer.apple.com/documentation/webkit/wknavigationresponse/response)

# response (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The frame’s response.

## Declaration

```swift
@NSCopying var response: URLResponse { get }
```

<a id="Discussion"></a>

## Discussion

Allowing a navigation response with a MIME type that WebKit can’t display causes the navigation to fail.

# response (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The frame’s response.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSURLResponse * response;
```

<a id="Discussion"></a>

## Discussion

Allowing a navigation response with a MIME type that WebKit can’t display causes the navigation to fail.
