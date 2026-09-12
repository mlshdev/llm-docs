> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/threadnetwork/thclient/storecredentials(forborderagent:activeoperationaldataset:completion:)](https://developer.apple.com/documentation/threadnetwork/thclient/storecredentials(forborderagent:activeoperationaldataset:completion:))

# storeCredentials(forBorderAgent:activeOperationalDataSet:completion:) (Swift)

**Framework:** ThreadNetwork  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

Stores Thread network credentials into the framework database that a Border Agent provides.

## Declaration

```swift
func storeCredentials(forBorderAgent borderAgentID: Data, activeOperationalDataSet: Data, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func storeCredentials(forBorderAgent borderAgentID: Data, activeOperationalDataSet: Data) async throws
```

## Parameters

- `borderAgentID`: The identifer of an active Thread network Border Agent.
- `activeOperationalDataSet`: The essential operational parameters for the Thread network.
- `completion`: The completion handler the framework calls after storing the credentials.

## Mentioned In

- [Managing Thread network credentials](../managing-thread-network-credentials.md)
- [Configuring a Border Router](../configuring-a-border-router.md)

<a id="discussion"></a>

## Discussion

> **Important**

> You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func storeCredentials(forBorderAgent borderAgentID: Data, activeOperationalDataSet: Data) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

The Border Agent is the software component running in the Thread Border Router responsible for advertising itself in the Wi-Fi or Ethernet network.

The framework only stores credentials if it can find an mDNS record for the Border Agent that contains the specified Border Agent identifier.

Call the method as follows:

```swift
func saveCredentials(borderAgentID: Data, activeOperationalDataSet: Data) async -> (Error?) {
    let client = THClient()
    var err:Error?
    do {
        err = try await client.storeCredentials(forBorderAgent: borderAgentID, activeOperationalDataSet: activeOperationalDataSet) as? Error
    } catch {
        err = error
    }
    return (err)
}
```

## See Also

### Storing and Deleting Credentials

- [deleteCredentials(forBorderAgent:completion:)](deletecredentials%28forborderagent_completion_%29.md): Deletes Thread network credentials from the framework database for a Border Agent.

# storeCredentialsForBorderAgent:activeOperationalDataSet:completion: (Objective-C)

**Framework:** ThreadNetwork  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

Stores Thread network credentials into the framework database that a Border Agent provides.

## Declaration

```objectivec
- (void) storeCredentialsForBorderAgent:(NSData *) borderAgentID activeOperationalDataSet:(NSData *) activeOperationalDataSet completion:(void (^)(NSError *error)) completion;
```

## Parameters

- `borderAgentID`: The identifer of an active Thread network Border Agent.
- `activeOperationalDataSet`: The essential operational parameters for the Thread network.
- `completion`: The completion handler the framework calls after storing the credentials.

## Mentioned In

- [Managing Thread network credentials](../managing-thread-network-credentials.md)
- [Configuring a Border Router](../configuring-a-border-router.md)

<a id="discussion"></a>

## Discussion

> **Important**

> You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func storeCredentials(forBorderAgent borderAgentID: Data, activeOperationalDataSet: Data) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

The Border Agent is the software component running in the Thread Border Router responsible for advertising itself in the Wi-Fi or Ethernet network.

The framework only stores credentials if it can find an mDNS record for the Border Agent that contains the specified Border Agent identifier.

Call the method as follows:

```swift
func saveCredentials(borderAgentID: Data, activeOperationalDataSet: Data) async -> (Error?) {
    let client = THClient()
    var err:Error?
    do {
        err = try await client.storeCredentials(forBorderAgent: borderAgentID, activeOperationalDataSet: activeOperationalDataSet) as? Error
    } catch {
        err = error
    }
    return (err)
}
```

## See Also

### Storing and Deleting Credentials

- [deleteCredentialsForBorderAgent:completion:](deletecredentials%28forborderagent_completion_%29.md): Deletes Thread network credentials from the framework database for a Border Agent.
