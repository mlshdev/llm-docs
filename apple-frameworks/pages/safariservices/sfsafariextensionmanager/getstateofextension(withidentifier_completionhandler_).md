> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariextensionmanager/getstateofextension(withidentifier:completionhandler:)](https://developer.apple.com/documentation/safariservices/sfsafariextensionmanager/getstateofextension(withidentifier:completionhandler:))

# getStateOfExtension(withIdentifier:completionHandler:) (Swift)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

Returns the current state of a Safari web extension.

## Declaration

```swift
class func getStateOfExtension(withIdentifier identifier: String, completionHandler: @escaping @Sendable (SFSafariExtensionState?, (any Error)?) -> Void)
```

```swift
class func stateOfExtension(withIdentifier identifier: String) async throws -> SFSafariExtensionState
```

## Parameters

- `identifier`: The bundle identifier for the Safari web extension to check.
- `completionHandler`: The completion handler the system calls with either the extension’s state or an error.

  - **state**: An object that describes the current state of the Safari web extension, or `nil` if the system can’t find the extension.
  - **error**: An error object indicating the reason for the failure, or `nil` if no failure occurs.

<a id="discussion"></a>

## Discussion

Use this method to check on the state of a Safari web extension embedded inside your app.

## See Also

### Checking on the state of an extension

- [getStateOfSafariExtension(withIdentifier:completionHandler:)](getstateofsafariextension%28withidentifier_completionhandler_%29.md): Returns the current state of a Safari extension.

# getStateOfExtensionWithIdentifier:completionHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

Returns the current state of a Safari web extension.

## Declaration

```objectivec
+ (void) getStateOfExtensionWithIdentifier:(NSString *) identifier completionHandler:(void (^)(SFSafariExtensionState *state, NSError *error)) completionHandler;
```

## Parameters

- `identifier`: The bundle identifier for the Safari web extension to check.
- `completionHandler`: The completion handler the system calls with either the extension’s state or an error.

  - **state**: An object that describes the current state of the Safari web extension, or `nil` if the system can’t find the extension.
  - **error**: An error object indicating the reason for the failure, or `nil` if no failure occurs.

<a id="discussion"></a>

## Discussion

Use this method to check on the state of a Safari web extension embedded inside your app.

## See Also

### Checking on the state of an extension

- [getStateOfSafariExtensionWithIdentifier:completionHandler:](getstateofsafariextension%28withidentifier_completionhandler_%29.md): Returns the current state of a Safari extension.
