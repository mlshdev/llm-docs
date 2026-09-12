> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/threadnetwork/thclient/checkpreferrednetwork(foractiveoperationaldataset:completion:)](https://developer.apple.com/documentation/threadnetwork/thclient/checkpreferrednetwork(foractiveoperationaldataset:completion:))

# checkPreferredNetwork(forActiveOperationalDataset:completion:) (Swift)

**Framework:** ThreadNetwork  
**Kind:** Instance Method  
**Availability:** iOS 15.5+ · iPadOS 15.5+ · Mac Catalyst 15.5+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

Determines if the essential operating parameters match the preferred network’s parameters.

## Declaration

```swift
func checkPreferredNetwork(forActiveOperationalDataset activeOperationalDataSet: Data, completion: @escaping @Sendable (Bool) -> Void)
```

```swift
func isPreferred(forActiveOperationalDataset activeOperationalDataSet: Data) async -> Bool
```

## Parameters

- `activeOperationalDataSet`: The essential operating parameters to compare against the preferred network’s parameters.
- `completion`: The completion handler that returns the result of the comparison.

## Mentioned In

- [Managing Thread network credentials](../managing-thread-network-credentials.md)
- [Configuring a Border Router](../configuring-a-border-router.md)

<a id="discussion"></a>

## Discussion

> **Concurrency note**

> You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func isPreferred(forActiveOperationalDataset activeOperationalDataSet: Data) async -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Call the method as follows:

```swift
func obtainPreferredNetwork(activeOperationalDataset: Data) async -> (NSString?) {
    let client = THClient()
    var bIsPreferred:Bool?
    bIsPreferred = await client.isPreferred(forActiveOperationalDataset: activeOperationalDataset)
    let str = ((bIsPreferred == true) ?"true" : "false")
    return str as NSString;
}
```

## See Also

### Retrieving Credentials

- [isPreferredNetworkAvailable(completion:)](ispreferrednetworkavailable%28completion_%29.md): Indicates whether a preferred network is available.
- [retrieveCredentials(forBorderAgent:completion:)](retrievecredentials%28forborderagent_completion_%29.md): Requests Thread credentials for a Border Agent.
- [retrieveCredentials(forExtendedPANID:completion:)](retrievecredentials%28forextendedpanid_completion_%29.md): Requests Thread credentials for an extended Personal Area Network (PAN) ID.
- [retrieveAllCredentials(\_:)](retrieveallcredentials%28__%29.md): Requests all Thread credentials from the framework.
- [retrievePreferredCredentials(\_:)](retrievepreferredcredentials%28__%29.md): Requests Thread credentials for the preferred network.
- [retrieveAllActiveCredentials(\_:)](retrieveallactivecredentials%28__%29.md): Returns a set of the active credentials.

# checkPreferredNetworkForActiveOperationalDataset:completion: (Objective-C)

**Framework:** ThreadNetwork  
**Kind:** Instance Method  
**Availability:** iOS 15.5+ · iPadOS 15.5+ · Mac Catalyst 15.5+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

Determines if the essential operating parameters match the preferred network’s parameters.

## Declaration

```objectivec
- (void) checkPreferredNetworkForActiveOperationalDataset:(NSData *) activeOperationalDataSet completion:(void (^)(BOOL isPreferred)) completion;
```

## Parameters

- `activeOperationalDataSet`: The essential operating parameters to compare against the preferred network’s parameters.
- `completion`: The completion handler that returns the result of the comparison.

## Mentioned In

- [Managing Thread network credentials](../managing-thread-network-credentials.md)
- [Configuring a Border Router](../configuring-a-border-router.md)

<a id="discussion"></a>

## Discussion

> **Concurrency note**

> You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func isPreferred(forActiveOperationalDataset activeOperationalDataSet: Data) async -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Call the method as follows:

```swift
func obtainPreferredNetwork(activeOperationalDataset: Data) async -> (NSString?) {
    let client = THClient()
    var bIsPreferred:Bool?
    bIsPreferred = await client.isPreferred(forActiveOperationalDataset: activeOperationalDataset)
    let str = ((bIsPreferred == true) ?"true" : "false")
    return str as NSString;
}
```

## See Also

### Retrieving Credentials

- [isPreferredNetworkAvailableWithCompletion:](ispreferrednetworkavailable%28completion_%29.md): Indicates whether a preferred network is available.
- [retrieveCredentialsForBorderAgent:completion:](retrievecredentials%28forborderagent_completion_%29.md): Requests Thread credentials for a Border Agent.
- [retrieveCredentialsForExtendedPANID:completion:](retrievecredentials%28forextendedpanid_completion_%29.md): Requests Thread credentials for an extended Personal Area Network (PAN) ID.
- [retrieveAllCredentials:](retrieveallcredentials%28__%29.md): Requests all Thread credentials from the framework.
- [retrievePreferredCredentials:](retrievepreferredcredentials%28__%29.md): Requests Thread credentials for the preferred network.
- [retrieveAllActiveCredentials:](retrieveallactivecredentials%28__%29.md): Returns a set of the active credentials.
