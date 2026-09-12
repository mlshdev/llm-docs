> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/openapplication(at:configuration:completionhandler:)](https://developer.apple.com/documentation/appkit/nsworkspace/openapplication(at:configuration:completionhandler:))

# openApplication(at:configuration:completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Launches the app at the specified URL and asynchronously reports back on the app’s status.

## Declaration

```swift
func openApplication(at applicationURL: URL, configuration: NSWorkspace.OpenConfiguration, completionHandler: (@Sendable (NSRunningApplication?, (any Error)?) -> Void)? = nil)
```

```swift
func openApplication(at applicationURL: URL, configuration: NSWorkspace.OpenConfiguration) async throws -> NSRunningApplication
```

## Parameters

- `applicationURL`: A URL specifying the location of the app in the file system.
- `configuration`: The options that indicate how you want to launch the app.
- `completionHandler`: The completion handler block to call asynchronously with the results. AppKit executes the completion handler on a concurrent queue. The handler block has no return value and takes the following parameters:

  - **app**: On success, this parameter contains a reference to the launched app. If the app wasn’t launched, this parameter is `nil`.
  - **error**: On failure, this parameter contains an [NSError](https://developer.apple.com/documentation/foundation/nserror) object indicating the reason for the failure. If the app launched successfully, this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

## See Also

### Launching and Hiding Apps

- [hideOtherApplications()](hideotherapplications%28%29.md): Hides all applications other than the sender.

# openApplicationAtURL:configuration:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Launches the app at the specified URL and asynchronously reports back on the app’s status.

## Declaration

```objectivec
- (void) openApplicationAtURL:(NSURL *) applicationURL configuration:(NSWorkspaceOpenConfiguration *) configuration completionHandler:(void (^)(NSRunningApplication *app, NSError *error)) completionHandler;
```

## Parameters

- `applicationURL`: A URL specifying the location of the app in the file system.
- `configuration`: The options that indicate how you want to launch the app.
- `completionHandler`: The completion handler block to call asynchronously with the results. AppKit executes the completion handler on a concurrent queue. The handler block has no return value and takes the following parameters:

  - **app**: On success, this parameter contains a reference to the launched app. If the app wasn’t launched, this parameter is `nil`.
  - **error**: On failure, this parameter contains an [NSError](https://developer.apple.com/documentation/foundation/nserror) object indicating the reason for the failure. If the app launched successfully, this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

## See Also

### Launching and Hiding Apps

- [hideOtherApplications](hideotherapplications%28%29.md): Hides all applications other than the sender.
