> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcalldirectorymanager/reloadextension(withidentifier:completionhandler:)](https://developer.apple.com/documentation/callkit/cxcalldirectorymanager/reloadextension(withidentifier:completionhandler:))

# reloadExtension(withIdentifier:completionHandler:) (Swift)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+

Asynchronously reloads the extension with the specified identifier.

## Declaration

```swift
func reloadExtension(withIdentifier identifier: String, completionHandler completion: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func reloadExtension(withIdentifier identifier: String) async throws
```

## Parameters

- `identifier`: The identifier for the call extension.
- `completion`: A block to be executed when the manager is finished reloading the specified extension.

  - **error**: If an error occurred, an error object indicating how reloading failed, otherwise `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func reloadExtension(withIdentifier identifier: String) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Working with a Call Directory App Extension

- [getEnabledStatusForExtension(withIdentifier:completionHandler:)](getenabledstatusforextension%28withidentifier_completionhandler_%29.md): Asynchronously returns the enabled status of the extension with the specified identifier.
- [CXCallDirectoryManager.EnabledStatus](enabledstatus.md): The enabled status of a Call Directory app extension, as reported by the [getEnabledStatusForExtension(withIdentifier:completionHandler:)](getenabledstatusforextension%28withidentifier_completionhandler_%29.md) method.

# reloadExtensionWithIdentifier:completionHandler: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Asynchronously reloads the extension with the specified identifier.

## Declaration

```objectivec
- (void) reloadExtensionWithIdentifier:(NSString *) identifier completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `identifier`: The identifier for the call extension.
- `completion`: A block to be executed when the manager is finished reloading the specified extension.

  - **error**: If an error occurred, an error object indicating how reloading failed, otherwise `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func reloadExtension(withIdentifier identifier: String) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Working with a Call Directory App Extension

- [getEnabledStatusForExtensionWithIdentifier:completionHandler:](getenabledstatusforextension%28withidentifier_completionhandler_%29.md): Asynchronously returns the enabled status of the extension with the specified identifier.
- [CXCallDirectoryEnabledStatus](enabledstatus.md): The enabled status of a Call Directory app extension, as reported by the [getEnabledStatusForExtensionWithIdentifier:completionHandler:](getenabledstatusforextension%28withidentifier_completionhandler_%29.md) method.
