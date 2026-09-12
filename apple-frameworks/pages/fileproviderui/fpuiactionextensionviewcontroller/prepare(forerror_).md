> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileproviderui/fpuiactionextensionviewcontroller/prepare(forerror:)](https://developer.apple.com/documentation/fileproviderui/fpuiactionextensionviewcontroller/prepare(forerror:))

# prepare(forError:) (Swift)

**Framework:** File Provider UI  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.15+ · visionOS 1.0+

Performs any necessary setup or configuration when an authentication error occurs.

## Declaration

```swift
func prepare(forError error: any Error)
```

## Parameters

- `error`: An object representing the authentication error. Your File Provider extension can pass additional information in the error’s [userInfo](../../foundation/nserror/userinfo.md) property.

<a id="Discussion"></a>

## Discussion

While your file provider is enumerating its content, the system calls this method whenever your file provider returns an [NSFileProviderErrorDomain](../../fileprovider/nsfileprovidererrordomain.md) error with a [NSFileProviderError.Code.notAuthenticated](../../fileprovider/nsfileprovidererror/code/notauthenticated.md) code. Use this method to present an interface to authenticate the user.

## See Also

### Working with Actions

- [prepare(forAction:itemIdentifiers:)](prepare%28foraction_itemidentifiers_%29.md): Performs any necessary setup or configuration for the specified action.
- [extensionContext](extensioncontext.md): The extension context provided by the host app.
- [FPUIActionExtensionContext](../fpuiactionextensioncontext.md): An extension context provided to File Provider UI extensions.

# prepareForError: (Objective-C)

**Framework:** File Provider UI  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.15+ · visionOS 1.0+

Performs any necessary setup or configuration when an authentication error occurs.

## Declaration

```objectivec
- (void) prepareForError:(NSError *) error;
```

## Parameters

- `error`: An object representing the authentication error. Your File Provider extension can pass additional information in the error’s [userInfo](../../foundation/nserror/userinfo.md) property.

<a id="Discussion"></a>

## Discussion

While your file provider is enumerating its content, the system calls this method whenever your file provider returns an [NSFileProviderErrorDomain](../../fileprovider/nsfileprovidererrordomain.md) error with a [NSFileProviderErrorNotAuthenticated](../../fileprovider/nsfileprovidererror/code/notauthenticated.md) code. Use this method to present an interface to authenticate the user.

## See Also

### Working with Actions

- [prepareForActionWithIdentifier:itemIdentifiers:](prepare%28foraction_itemidentifiers_%29.md): Performs any necessary setup or configuration for the specified action.
- [extensionContext](extensioncontext.md): The extension context provided by the host app.
- [FPUIActionExtensionContext](../fpuiactionextensioncontext.md): An extension context provided to File Provider UI extensions.
