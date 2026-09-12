> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsclient/fetchinstalledextensions(completionhandler:)](https://developer.apple.com/documentation/fskit/fsclient/fetchinstalledextensions(completionhandler:))

# fetchInstalledExtensions(completionHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Asynchronously retrieves an list of installed file system modules.

## Declaration

```swift
func fetchInstalledExtensions(completionHandler: @escaping @Sendable ([FSModuleIdentity]?, (any Error)?) -> Void)
```

```swift
var installedExtensions: [FSModuleIdentity] { get async throws }
```

## Parameters

- `completionHandler`: A block or closure that executes when FSKit finishes its fetch process. If the fetch succeeds, the first parameter contains an array of [FSModuleIdentity](../fsmoduleidentity.md) instances that identify installed modules. If the fetch fails, the second parameter contains an error detailing the failure.

<a id="discussion"></a>

## Discussion

In Swift, you can either call this method and pass a completion handler closure, or get the value of the `installedExtensions` property with the `async` keyword.

## See Also

### Discovering installed extensions

- [FSModuleIdentity](../fsmoduleidentity.md): An installed file system module.

# fetchInstalledExtensionsWithCompletionHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Asynchronously retrieves an list of installed file system modules.

## Declaration

```objectivec
- (void) fetchInstalledExtensionsWithCompletionHandler:(void (^)(NSArray<FSModuleIdentity *> *, NSError *)) completionHandler;
```

## Parameters

- `completionHandler`: A block or closure that executes when FSKit finishes its fetch process. If the fetch succeeds, the first parameter contains an array of [FSModuleIdentity](../fsmoduleidentity.md) instances that identify installed modules. If the fetch fails, the second parameter contains an error detailing the failure.

<a id="discussion"></a>

## Discussion

In Swift, you can either call this method and pass a completion handler closure, or get the value of the `installedExtensions` property with the `async` keyword.

## See Also

### Discovering installed extensions

- [FSModuleIdentity](../fsmoduleidentity.md): An installed file system module.
