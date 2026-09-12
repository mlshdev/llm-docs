> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/threadnetwork/thclient/retrieveallactivecredentials(_:)](https://developer.apple.com/documentation/threadnetwork/thclient/retrieveallactivecredentials(_:))

# retrieveAllActiveCredentials(\_:) (Swift)

**Framework:** ThreadNetwork  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.4+

Returns a set of the active credentials.

## Declaration

```swift
func retrieveAllActiveCredentials(_ completion: @escaping @Sendable (Set<THCredentials>?, (any Error)?) -> Void)
```

```swift
func allActiveCredentials() async throws -> Set<THCredentials>
```

## Parameters

- `completion`: The completion handler the framework calls when the active credentials become available.

## Mentioned In

- [Managing Thread network credentials](../managing-thread-network-credentials.md)

<a id="discussion"></a>

## Discussion

> **Concurrency note**

> You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func allActiveCredentials() async throws -> Set<THCredentials>
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Call the method as follows:

```swift
func obtainAllActiveCredentials() async -> (Set<THCredentials>?, Error?) {
    let client = THClient()
    var credentials: Set<THCredentials>?
    var err:Error?
    do {
        credentials = try await client.allActiveCredentials()
    } catch {
        err = error
    }
    return (credentials, err)
}
```

## See Also

### Retrieving Credentials

- [isPreferredNetworkAvailable(completion:)](ispreferrednetworkavailable%28completion_%29.md): Indicates whether a preferred network is available.
- [checkPreferredNetwork(forActiveOperationalDataset:completion:)](checkpreferrednetwork%28foractiveoperationaldataset_completion_%29.md): Determines if the essential operating parameters match the preferred network’s parameters.
- [retrieveCredentials(forBorderAgent:completion:)](retrievecredentials%28forborderagent_completion_%29.md): Requests Thread credentials for a Border Agent.
- [retrieveCredentials(forExtendedPANID:completion:)](retrievecredentials%28forextendedpanid_completion_%29.md): Requests Thread credentials for an extended Personal Area Network (PAN) ID.
- [retrieveAllCredentials(\_:)](retrieveallcredentials%28__%29.md): Requests all Thread credentials from the framework.
- [retrievePreferredCredentials(\_:)](retrievepreferredcredentials%28__%29.md): Requests Thread credentials for the preferred network.

# retrieveAllActiveCredentials: (Objective-C)

**Framework:** ThreadNetwork  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.4+

Returns a set of the active credentials.

## Declaration

```objectivec
- (void) retrieveAllActiveCredentials:(void (^)(NSSet<THCredentials *> *credentials, NSError *error)) completion;
```

## Parameters

- `completion`: The completion handler the framework calls when the active credentials become available.

## Mentioned In

- [Managing Thread network credentials](../managing-thread-network-credentials.md)

<a id="discussion"></a>

## Discussion

> **Concurrency note**

> You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func allActiveCredentials() async throws -> Set<THCredentials>
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Call the method as follows:

```swift
func obtainAllActiveCredentials() async -> (Set<THCredentials>?, Error?) {
    let client = THClient()
    var credentials: Set<THCredentials>?
    var err:Error?
    do {
        credentials = try await client.allActiveCredentials()
    } catch {
        err = error
    }
    return (credentials, err)
}
```

## See Also

### Retrieving Credentials

- [isPreferredNetworkAvailableWithCompletion:](ispreferrednetworkavailable%28completion_%29.md): Indicates whether a preferred network is available.
- [checkPreferredNetworkForActiveOperationalDataset:completion:](checkpreferrednetwork%28foractiveoperationaldataset_completion_%29.md): Determines if the essential operating parameters match the preferred network’s parameters.
- [retrieveCredentialsForBorderAgent:completion:](retrievecredentials%28forborderagent_completion_%29.md): Requests Thread credentials for a Border Agent.
- [retrieveCredentialsForExtendedPANID:completion:](retrievecredentials%28forextendedpanid_completion_%29.md): Requests Thread credentials for an extended Personal Area Network (PAN) ID.
- [retrieveAllCredentials:](retrieveallcredentials%28__%29.md): Requests all Thread credentials from the framework.
- [retrievePreferredCredentials:](retrievepreferredcredentials%28__%29.md): Requests Thread credentials for the preferred network.
