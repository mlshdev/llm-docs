> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcalldirectorymanager/getenabledstatusforextension(withidentifier:completionhandler:)](https://developer.apple.com/documentation/callkit/cxcalldirectorymanager/getenabledstatusforextension(withidentifier:completionhandler:))

# getEnabledStatusForExtension(withIdentifier:completionHandler:) (Swift)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+

Asynchronously returns the enabled status of the extension with the specified identifier.

## Declaration

```swift
func getEnabledStatusForExtension(withIdentifier identifier: String, completionHandler completion: @escaping @Sendable (CXCallDirectoryManager.EnabledStatus, (any Error)?) -> Void)
```

```swift
func enabledStatusForExtension(withIdentifier identifier: String) async throws -> CXCallDirectoryManager.EnabledStatus
```

## Parameters

- `identifier`: The identifier for the call extension.
- `completion`: A block to be executed when the manager is finished determining the enabled status of the specified extension.

  - **enabledStatus**: The enabled status of the extension. For possible values, see [CXCallDirectoryManager.EnabledStatus](enabledstatus.md).
  - **error**: If an error occurred, an error object indicating how the check failed, otherwise `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func enabledStatusForExtension(withIdentifier identifier: String) async throws -> CXCallDirectoryManager.EnabledStatus
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Working with a Call Directory App Extension

- [reloadExtension(withIdentifier:completionHandler:)](reloadextension%28withidentifier_completionhandler_%29.md): Asynchronously reloads the extension with the specified identifier.
- [CXCallDirectoryManager.EnabledStatus](enabledstatus.md): The enabled status of a Call Directory app extension, as reported by the [getEnabledStatusForExtension(withIdentifier:completionHandler:)](getenabledstatusforextension%28withidentifier_completionhandler_%29.md) method.

# getEnabledStatusForExtensionWithIdentifier:completionHandler: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Asynchronously returns the enabled status of the extension with the specified identifier.

## Declaration

```objectivec
- (void) getEnabledStatusForExtensionWithIdentifier:(NSString *) identifier completionHandler:(void (^)(CXCallDirectoryEnabledStatus enabledStatus, NSError *error)) completion;
```

## Parameters

- `identifier`: The identifier for the call extension.
- `completion`: A block to be executed when the manager is finished determining the enabled status of the specified extension.

  - **enabledStatus**: The enabled status of the extension. For possible values, see [CXCallDirectoryEnabledStatus](enabledstatus.md).
  - **error**: If an error occurred, an error object indicating how the check failed, otherwise `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func enabledStatusForExtension(withIdentifier identifier: String) async throws -> CXCallDirectoryManager.EnabledStatus
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Working with a Call Directory App Extension

- [reloadExtensionWithIdentifier:completionHandler:](reloadextension%28withidentifier_completionhandler_%29.md): Asynchronously reloads the extension with the specified identifier.
- [CXCallDirectoryEnabledStatus](enabledstatus.md): The enabled status of a Call Directory app extension, as reported by the [getEnabledStatusForExtensionWithIdentifier:completionHandler:](getenabledstatusforextension%28withidentifier_completionhandler_%29.md) method.
