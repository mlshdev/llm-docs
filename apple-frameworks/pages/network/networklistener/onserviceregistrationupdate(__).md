> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networklistener/onserviceregistrationupdate(_:)](https://developer.apple.com/documentation/network/networklistener/onserviceregistrationupdate(_:))

# onServiceRegistrationUpdate(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Set a closure to be called when the listener has added or removed a registered service.

## Declaration

```swift
@discardableResult final func onServiceRegistrationUpdate(_ handler: @escaping @isolated(any) @Sendable (NetworkListener<ApplicationProtocol>, NetworkListener<ApplicationProtocol>.ServiceRegistrationChange) -> Void) -> Self
```

## Parameters

- `handler`: A handler to be called when a registered service changes.

<a id="discussion"></a>

## Discussion

The closure may be called multiple times until the listener is cancelled.

The closure inherits the isolation domain of the caller.
