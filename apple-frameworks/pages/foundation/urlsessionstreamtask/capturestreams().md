> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionstreamtask/capturestreams()](https://developer.apple.com/documentation/foundation/urlsessionstreamtask/capturestreams())

# captureStreams() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Completes any already enqueued reads and writes, and then invokes the [urlSession(\_:streamTask:didBecome:outputStream:)](../urlsessionstreamdelegate/urlsession%28__streamtask_didbecome_outputstream_%29.md) delegate message.

## Declaration

```swift
func captureStreams()
```

# captureStreams (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Completes any already enqueued reads and writes, and then invokes the [URLSession:streamTask:didBecomeInputStream:outputStream:](../urlsessionstreamdelegate/urlsession%28__streamtask_didbecome_outputstream_%29.md) delegate message.

## Declaration

```objectivec
- (void) captureStreams;
```
