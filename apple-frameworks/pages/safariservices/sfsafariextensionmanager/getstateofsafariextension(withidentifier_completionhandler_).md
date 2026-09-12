> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariextensionmanager/getstateofsafariextension(withidentifier:completionhandler:)](https://developer.apple.com/documentation/safariservices/sfsafariextensionmanager/getstateofsafariextension(withidentifier:completionhandler:))

# getStateOfSafariExtension(withIdentifier:completionHandler:) (Swift)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** macOS 10.12+

Returns the current state of a Safari extension.

## Declaration

```swift
class func getStateOfSafariExtension(withIdentifier identifier: String, completionHandler: @escaping @MainActor @Sendable (SFSafariExtensionState?, (any Error)?) -> Void)
```

```swift
class func stateOfSafariExtension(withIdentifier identifier: String) async throws -> SFSafariExtensionState
```

## Parameters

- `identifier`: The bundle identifier for the Safari extension to check.
- `completionHandler`: The completion handler the system calls with either the extension’s state or an error.

  - **state**: An object that describes the current state of the Safari extension, or `nil` if the system can’t find the extension.
  - **error**: An error object indicating the reason for the failure, or `nil` if no failure occurs.

<a id="Discussion"></a>

## Discussion

Use this method to check on the state of one of the Safari app or web extensions embedded inside your app.

## See Also

### Checking on the state of an extension

- [getStateOfExtension(withIdentifier:completionHandler:)](getstateofextension%28withidentifier_completionhandler_%29.md): Returns the current state of a Safari web extension.

# getStateOfSafariExtensionWithIdentifier:completionHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** macOS 10.12+

Returns the current state of a Safari extension.

## Declaration

```objectivec
+ (void) getStateOfSafariExtensionWithIdentifier:(NSString *) identifier completionHandler:(void (^)(SFSafariExtensionState *, NSError *)) completionHandler;
```

## Parameters

- `identifier`: The bundle identifier for the Safari extension to check.
- `completionHandler`: The completion handler the system calls with either the extension’s state or an error.

  - **state**: An object that describes the current state of the Safari extension, or `nil` if the system can’t find the extension.
  - **error**: An error object indicating the reason for the failure, or `nil` if no failure occurs.

<a id="Discussion"></a>

## Discussion

Use this method to check on the state of one of the Safari app or web extensions embedded inside your app.

## See Also

### Checking on the state of an extension

- [getStateOfExtensionWithIdentifier:completionHandler:](getstateofextension%28withidentifier_completionhandler_%29.md): Returns the current state of a Safari web extension.
