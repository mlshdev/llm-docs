> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/threadnetwork/thclient/ispreferrednetworkavailable(completion:)](https://developer.apple.com/documentation/threadnetwork/thclient/ispreferrednetworkavailable(completion:))

# isPreferredNetworkAvailable(completion:) (Swift)

**Framework:** ThreadNetwork  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.4+

Indicates whether a preferred network is available.

## Declaration

```swift
func isPreferredNetworkAvailable(completion: @escaping @Sendable (Bool) -> Void)
```

```swift
func isPreferredAvailable() async -> Bool
```

## Parameters

- `completion`: The completion handler that returns the result of the preferred network status.

## Mentioned In

- [Configuring a Border Router](../configuring-a-border-router.md)
- [Managing Thread network credentials](../managing-thread-network-credentials.md)

<a id="discussion"></a>

## Discussion

> **Concurrency note**

> You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func isPreferredAvailable() async -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Call the method as follows:

```swift
func obtainPreferredAvailable() async -> (NSString?) {
    let client = THClient()
    var bIsPreferredAvailable:Bool?
    bIsPreferredAvailable = await client.isPreferredAvailable()
    let str = ((bIsPreferredAvailable == true) ? "true" : "false")
    return str as NSString;
}
```

## See Also

### Retrieving Credentials

- [checkPreferredNetwork(forActiveOperationalDataset:completion:)](checkpreferrednetwork%28foractiveoperationaldataset_completion_%29.md): Determines if the essential operating parameters match the preferred network’s parameters.
- [retrieveCredentials(forBorderAgent:completion:)](retrievecredentials%28forborderagent_completion_%29.md): Requests Thread credentials for a Border Agent.
- [retrieveCredentials(forExtendedPANID:completion:)](retrievecredentials%28forextendedpanid_completion_%29.md): Requests Thread credentials for an extended Personal Area Network (PAN) ID.
- [retrieveAllCredentials(\_:)](retrieveallcredentials%28__%29.md): Requests all Thread credentials from the framework.
- [retrievePreferredCredentials(\_:)](retrievepreferredcredentials%28__%29.md): Requests Thread credentials for the preferred network.
- [retrieveAllActiveCredentials(\_:)](retrieveallactivecredentials%28__%29.md): Returns a set of the active credentials.

# isPreferredNetworkAvailableWithCompletion: (Objective-C)

**Framework:** ThreadNetwork  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.4+

Indicates whether a preferred network is available.

## Declaration

```objectivec
- (void) isPreferredNetworkAvailableWithCompletion:(void (^)(BOOL isPreferredAvailable)) completion;
```

## Parameters

- `completion`: The completion handler that returns the result of the preferred network status.

## Mentioned In

- [Configuring a Border Router](../configuring-a-border-router.md)
- [Managing Thread network credentials](../managing-thread-network-credentials.md)

<a id="discussion"></a>

## Discussion

> **Concurrency note**

> You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func isPreferredAvailable() async -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Call the method as follows:

```swift
func obtainPreferredAvailable() async -> (NSString?) {
    let client = THClient()
    var bIsPreferredAvailable:Bool?
    bIsPreferredAvailable = await client.isPreferredAvailable()
    let str = ((bIsPreferredAvailable == true) ? "true" : "false")
    return str as NSString;
}
```

## See Also

### Retrieving Credentials

- [checkPreferredNetworkForActiveOperationalDataset:completion:](checkpreferrednetwork%28foractiveoperationaldataset_completion_%29.md): Determines if the essential operating parameters match the preferred network’s parameters.
- [retrieveCredentialsForBorderAgent:completion:](retrievecredentials%28forborderagent_completion_%29.md): Requests Thread credentials for a Border Agent.
- [retrieveCredentialsForExtendedPANID:completion:](retrievecredentials%28forextendedpanid_completion_%29.md): Requests Thread credentials for an extended Personal Area Network (PAN) ID.
- [retrieveAllCredentials:](retrieveallcredentials%28__%29.md): Requests all Thread credentials from the framework.
- [retrievePreferredCredentials:](retrievepreferredcredentials%28__%29.md): Requests Thread credentials for the preferred network.
- [retrieveAllActiveCredentials:](retrieveallactivecredentials%28__%29.md): Returns a set of the active credentials.
