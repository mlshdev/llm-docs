> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednsproxyprovider/startproxy(options:completionhandler:)](https://developer.apple.com/documentation/networkextension/nednsproxyprovider/startproxy(options:completionhandler:))

# startProxy(options:completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Starts the DNS proxy.

## Declaration

```swift
func startProxy(options: [String : Any]? = nil, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func startProxy(options: [String : Any]? = nil) async throws
```

## Parameters

- `options`: A dictionary that you define as part of a device configuration profile. You can also modify the contents of this dictionary from your app using the shared instance of [NEDNSProxyManager](../nednsproxymanager.md). The dictionary appears as the [providerConfiguration](../nednsproxyproviderprotocol/providerconfiguration.md) component of the manager’s [providerProtocol](../nednsproxymanager/providerprotocol.md) property.
- `completionHandler`: A block that you must execute when the proxy is fully established, or when the proxy cannot be started due to an error. If the proxy is successfully established, the error parameter should be set to `nil`. Otherwise, the error parameter passed to this block indicates the reason for failure.

<a id="Discussion"></a>

## Discussion

Subclasses of [NEDNSProxyProvider](../nednsproxyprovider.md) must override this method to perform any necessary steps to ready the proxy for handling flows of network data.

The framework calls this method when a new proxy instance is created. You indicate that setup is complete by calling the completion handler with a `nil` error parameter, or that setup failed by calling the completion handler with an error instance. You define the error domain and code.

## See Also

### Managing the DNS proxy life cycle

- [stopProxy(with:completionHandler:)](stopproxy%28with_completionhandler_%29.md): Stops the DNS proxy.
- [cancelProxyWithError(\_:)](cancelproxywitherror%28__%29.md): Cancels the DNS proxy.

# startProxyWithOptions:completionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Starts the DNS proxy.

## Declaration

```objectivec
- (void) startProxyWithOptions:(NSDictionary<NSString *,id> *) options completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `options`: A dictionary that you define as part of a device configuration profile. You can also modify the contents of this dictionary from your app using the shared instance of [NEDNSProxyManager](../nednsproxymanager.md). The dictionary appears as the [providerConfiguration](../nednsproxyproviderprotocol/providerconfiguration.md) component of the manager’s [providerProtocol](../nednsproxymanager/providerprotocol.md) property.
- `completionHandler`: A block that you must execute when the proxy is fully established, or when the proxy cannot be started due to an error. If the proxy is successfully established, the error parameter should be set to `nil`. Otherwise, the error parameter passed to this block indicates the reason for failure.

<a id="Discussion"></a>

## Discussion

Subclasses of [NEDNSProxyProvider](../nednsproxyprovider.md) must override this method to perform any necessary steps to ready the proxy for handling flows of network data.

The framework calls this method when a new proxy instance is created. You indicate that setup is complete by calling the completion handler with a `nil` error parameter, or that setup failed by calling the completion handler with an error instance. You define the error domain and code.

## See Also

### Managing the DNS proxy life cycle

- [stopProxyWithReason:completionHandler:](stopproxy%28with_completionhandler_%29.md): Stops the DNS proxy.
- [cancelProxyWithError:](cancelproxywitherror%28__%29.md): Cancels the DNS proxy.
