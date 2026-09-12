> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networklistener/serviceregistrationupdatehandler](https://developer.apple.com/documentation/network/networklistener/serviceregistrationupdatehandler)

# NetworkListener.ServiceRegistrationUpdateHandler

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
typealias ServiceRegistrationUpdateHandler = @isolated(any) @Sendable (NetworkListener<ApplicationProtocol>, NetworkListener<ApplicationProtocol>.ServiceRegistrationChange) -> Void
```
