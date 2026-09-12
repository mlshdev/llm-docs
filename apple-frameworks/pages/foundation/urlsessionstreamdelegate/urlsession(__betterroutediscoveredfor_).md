> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionstreamdelegate/urlsession(_:betterroutediscoveredfor:)](https://developer.apple.com/documentation/foundation/urlsessionstreamdelegate/urlsession(_:betterroutediscoveredfor:))

# urlSession(\_:betterRouteDiscoveredFor:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a better route to the host has been detected for the stream.

## Declaration

```swift
optional func urlSession(_ session: URLSession, betterRouteDiscoveredFor streamTask: URLSessionStreamTask)
```

## Parameters

- `session`: The session of the stream task that discovered a better route.
- `streamTask`: The stream task that discovered a better route.

<a id="Discussion"></a>

## Discussion

This method is called when the URL loading system determines that a better route to the endpoint host is available. For example, this method may be called when a Wi-Fi interface becomes available.

You should consider completing pending work and creating a new stream task in order to take advantage of better routes when they become available.

# URLSession:betterRouteDiscoveredForStreamTask: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a better route to the host has been detected for the stream.

## Declaration

```objectivec
- (void) URLSession:(NSURLSession *) session betterRouteDiscoveredForStreamTask:(NSURLSessionStreamTask *) streamTask;
```

## Parameters

- `session`: The session of the stream task that discovered a better route.
- `streamTask`: The stream task that discovered a better route.

<a id="Discussion"></a>

## Discussion

This method is called when the URL loading system determines that a better route to the endpoint host is available. For example, this method may be called when a Wi-Fi interface becomes available.

You should consider completing pending work and creating a new stream task in order to take advantage of better routes when they become available.
