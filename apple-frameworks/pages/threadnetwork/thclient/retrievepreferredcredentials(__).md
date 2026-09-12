> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/threadnetwork/thclient/retrievepreferredcredentials(_:)](https://developer.apple.com/documentation/threadnetwork/thclient/retrievepreferredcredentials(_:))

# retrievePreferredCredentials(\_:) (Swift)

**Framework:** ThreadNetwork  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

Requests Thread credentials for the preferred network.

## Declaration

```swift
func retrievePreferredCredentials(_ completion: @escaping @Sendable (THCredentials?, (any Error)?) -> Void)
```

```swift
func preferredCredentials() async throws -> THCredentials
```

## Parameters

- `completion`: The completion handler the framework calls when the credentials become available.

## Mentioned In

- [Managing Thread network credentials](../managing-thread-network-credentials.md)
- [Configuring a Border Router](../configuring-a-border-router.md)

<a id="discussion"></a>

## Discussion

> **Concurrency note**

> You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func preferredCredentials() async throws -> THCredentials
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

When you call this method, an alert appears asking for user permission to access credentials.

Call the method as follows:

```swift
func obtainPreferredCredentials() async -> (cred: THCredentials? , err: Error? ) {
    let client = THClient()
    var credential: THCredentials?
    var err:Error?
    do {
        credential = try await client.preferredCredentials()
    } catch {
        err = error
    }
    return (credential, err)
}
```

## See Also

### Retrieving Credentials

- [isPreferredNetworkAvailable(completion:)](ispreferrednetworkavailable%28completion_%29.md): Indicates whether a preferred network is available.
- [checkPreferredNetwork(forActiveOperationalDataset:completion:)](checkpreferrednetwork%28foractiveoperationaldataset_completion_%29.md): Determines if the essential operating parameters match the preferred network’s parameters.
- [retrieveCredentials(forBorderAgent:completion:)](retrievecredentials%28forborderagent_completion_%29.md): Requests Thread credentials for a Border Agent.
- [retrieveCredentials(forExtendedPANID:completion:)](retrievecredentials%28forextendedpanid_completion_%29.md): Requests Thread credentials for an extended Personal Area Network (PAN) ID.
- [retrieveAllCredentials(\_:)](retrieveallcredentials%28__%29.md): Requests all Thread credentials from the framework.
- [retrieveAllActiveCredentials(\_:)](retrieveallactivecredentials%28__%29.md): Returns a set of the active credentials.

# retrievePreferredCredentials: (Objective-C)

**Framework:** ThreadNetwork  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

Requests Thread credentials for the preferred network.

## Declaration

```objectivec
- (void) retrievePreferredCredentials:(void (^)(THCredentials *credentials, NSError *error)) completion;
```

## Parameters

- `completion`: The completion handler the framework calls when the credentials become available.

## Mentioned In

- [Managing Thread network credentials](../managing-thread-network-credentials.md)
- [Configuring a Border Router](../configuring-a-border-router.md)

<a id="discussion"></a>

## Discussion

> **Concurrency note**

> You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func preferredCredentials() async throws -> THCredentials
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

When you call this method, an alert appears asking for user permission to access credentials.

Call the method as follows:

```swift
func obtainPreferredCredentials() async -> (cred: THCredentials? , err: Error? ) {
    let client = THClient()
    var credential: THCredentials?
    var err:Error?
    do {
        credential = try await client.preferredCredentials()
    } catch {
        err = error
    }
    return (credential, err)
}
```

## See Also

### Retrieving Credentials

- [isPreferredNetworkAvailableWithCompletion:](ispreferrednetworkavailable%28completion_%29.md): Indicates whether a preferred network is available.
- [checkPreferredNetworkForActiveOperationalDataset:completion:](checkpreferrednetwork%28foractiveoperationaldataset_completion_%29.md): Determines if the essential operating parameters match the preferred network’s parameters.
- [retrieveCredentialsForBorderAgent:completion:](retrievecredentials%28forborderagent_completion_%29.md): Requests Thread credentials for a Border Agent.
- [retrieveCredentialsForExtendedPANID:completion:](retrievecredentials%28forextendedpanid_completion_%29.md): Requests Thread credentials for an extended Personal Area Network (PAN) ID.
- [retrieveAllCredentials:](retrieveallcredentials%28__%29.md): Requests all Thread credentials from the framework.
- [retrieveAllActiveCredentials:](retrieveallactivecredentials%28__%29.md): Returns a set of the active credentials.
