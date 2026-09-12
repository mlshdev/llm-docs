> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/threadnetwork/thclient/deletecredentials(forborderagent:completion:)](https://developer.apple.com/documentation/threadnetwork/thclient/deletecredentials(forborderagent:completion:))

# deleteCredentials(forBorderAgent:completion:) (Swift)

**Framework:** ThreadNetwork  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

Deletes Thread network credentials from the framework database for a Border Agent.

## Declaration

```swift
func deleteCredentials(forBorderAgent borderAgentID: Data, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func deleteCredentials(forBorderAgent borderAgentID: Data) async throws
```

## Parameters

- `borderAgentID`: The identifer of a Thread network Border Agent.
- `completion`: The completion handler the framework calls after deleting the credentials.

## Mentioned In

- [Managing Thread network credentials](../managing-thread-network-credentials.md)

<a id="discussion"></a>

## Discussion

> **Concurrency note**

> You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func deleteCredentials(forBorderAgent borderAgentID: Data) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

The Border Agent is the software component running in the Thread Border Router responsible for advertising itself in the Wi-Fi or Ethernet network.

Call the method as follows:

```swift
func removeCredentials(borderAgentID: Data) async -> (Error?) {
    let client = THClient()
    var err:Error?
    do {
        err = try await client.deleteCredentials(forBorderAgent: borderAgentID) as? Error
    } catch {
        err = error
    }
    return (err)
}
```

## See Also

### Storing and Deleting Credentials

- [storeCredentials(forBorderAgent:activeOperationalDataSet:completion:)](storecredentials%28forborderagent_activeoperationaldataset_completion_%29.md): Stores Thread network credentials into the framework database that a Border Agent provides.

# deleteCredentialsForBorderAgent:completion: (Objective-C)

**Framework:** ThreadNetwork  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

Deletes Thread network credentials from the framework database for a Border Agent.

## Declaration

```objectivec
- (void) deleteCredentialsForBorderAgent:(NSData *) borderAgentID completion:(void (^)(NSError *error)) completion;
```

## Parameters

- `borderAgentID`: The identifer of a Thread network Border Agent.
- `completion`: The completion handler the framework calls after deleting the credentials.

## Mentioned In

- [Managing Thread network credentials](../managing-thread-network-credentials.md)

<a id="discussion"></a>

## Discussion

> **Concurrency note**

> You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func deleteCredentials(forBorderAgent borderAgentID: Data) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

The Border Agent is the software component running in the Thread Border Router responsible for advertising itself in the Wi-Fi or Ethernet network.

Call the method as follows:

```swift
func removeCredentials(borderAgentID: Data) async -> (Error?) {
    let client = THClient()
    var err:Error?
    do {
        err = try await client.deleteCredentials(forBorderAgent: borderAgentID) as? Error
    } catch {
        err = error
    }
    return (err)
}
```

## See Also

### Storing and Deleting Credentials

- [storeCredentialsForBorderAgent:activeOperationalDataSet:completion:](storecredentials%28forborderagent_activeoperationaldataset_completion_%29.md): Stores Thread network credentials into the framework database that a Border Agent provides.
