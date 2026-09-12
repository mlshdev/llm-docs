> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/threadnetwork/thclient/retrieveactivecredentialsfornearbynetworks(completion:)](https://developer.apple.com/documentation/threadnetwork/thclient/retrieveactivecredentialsfornearbynetworks(completion:))

# retrieveActiveCredentialsForNearbyNetworks(completion:) (Swift)

**Framework:** ThreadNetwork  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 13.0+ · visionOS 27.0+ · watchOS 27.0+

Requests all active Thread credentials with active border routers around from the framework.

## Declaration

```swift
func retrieveActiveCredentialsForNearbyNetworks(completion: @escaping @Sendable (Set<THCredentials>?, (any Error)?) -> Void)
```

```swift
var activeCredentialsForNearbyNetworks: Set<THCredentials> { get async throws }
```

## Parameters

- `completion`: The completion handler the framework calls when the credentials become available.

<a id="discussion"></a>

## Discussion

When calling this method, you will receive credentials for active border routers around. You receive all credentials agnostic to team ID. Unlike [retrieveAllActiveCredentials(\_:)](retrieveallactivecredentials%28__%29.md), this method returns active credentials on the device regardless of who actually stored it.

> **Note**

> This method asks for user permission to share available credentials. If user denies the permission then the completion will contain error with code 15.

> **Concurrency Note**

> You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> var activeCredentialsForNearbyNetworks: Set<THCredentials> { get async throws }
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

# retrieveActiveCredentialsForNearbyNetworksWithCompletion: (Objective-C)

**Framework:** ThreadNetwork  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 13.0+ · visionOS 27.0+ · watchOS 27.0+

Requests all active Thread credentials with active border routers around from the framework.

## Declaration

```objectivec
- (void) retrieveActiveCredentialsForNearbyNetworksWithCompletion:(void (^)(NSSet<THCredentials *> *credentials, NSError *error)) completion;
```

## Parameters

- `completion`: The completion handler the framework calls when the credentials become available.

<a id="discussion"></a>

## Discussion

When calling this method, you will receive credentials for active border routers around. You receive all credentials agnostic to team ID. Unlike [retrieveAllActiveCredentials:](retrieveallactivecredentials%28__%29.md), this method returns active credentials on the device regardless of who actually stored it.

> **Note**

> This method asks for user permission to share available credentials. If user denies the permission then the completion will contain error with code 15.

> **Concurrency Note**

> You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> var activeCredentialsForNearbyNetworks: Set<THCredentials> { get async throws }
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).
