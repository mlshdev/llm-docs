> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednsproxyprovider/cancelproxywitherror(_:)](https://developer.apple.com/documentation/networkextension/nednsproxyprovider/cancelproxywitherror(_:))

# cancelProxyWithError(\_:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Cancels the DNS proxy.

## Declaration

```swift
func cancelProxyWithError(_ error: (any Error)?)
```

## Parameters

- `error`: An error instance containing details about the problem that the proxy provider implementation encountered.

<a id="Discussion"></a>

## Discussion

Call this method from within the proxy provider when you need to stop the proxy due to a network error that renders the proxy no longer viable.

> **Important**

>  Subclasses should not override this method.

## See Also

### Managing the DNS proxy life cycle

- [startProxy(options:completionHandler:)](startproxy%28options_completionhandler_%29.md): Starts the DNS proxy.
- [stopProxy(with:completionHandler:)](stopproxy%28with_completionhandler_%29.md): Stops the DNS proxy.

# cancelProxyWithError: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Cancels the DNS proxy.

## Declaration

```objectivec
- (void) cancelProxyWithError:(NSError *) error;
```

## Parameters

- `error`: An error instance containing details about the problem that the proxy provider implementation encountered.

<a id="Discussion"></a>

## Discussion

Call this method from within the proxy provider when you need to stop the proxy due to a network error that renders the proxy no longer viable.

> **Important**

>  Subclasses should not override this method.

## See Also

### Managing the DNS proxy life cycle

- [startProxyWithOptions:completionHandler:](startproxy%28options_completionhandler_%29.md): Starts the DNS proxy.
- [stopProxyWithReason:completionHandler:](stopproxy%28with_completionhandler_%29.md): Stops the DNS proxy.
