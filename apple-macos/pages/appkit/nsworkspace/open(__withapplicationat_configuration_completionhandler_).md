> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/open(_:withapplicationat:configuration:completionhandler:)](https://developer.apple.com/documentation/appkit/nsworkspace/open(_:withapplicationat:configuration:completionhandler:))

# open(\_:withApplicationAt:configuration:completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Opens one or more URLs asynchronously in the specified app using the provided options.

## Declaration

```swift
func open(_ urls: [URL], withApplicationAt applicationURL: URL, configuration: NSWorkspace.OpenConfiguration, completionHandler: (@Sendable (NSRunningApplication?, (any Error)?) -> Void)? = nil)
```

```swift
func open(_ urls: [URL], withApplicationAt applicationURL: URL, configuration: NSWorkspace.OpenConfiguration) async throws -> NSRunningApplication
```

## Parameters

- `urls`: The URL to open.
- `applicationURL`: A URL specifying the location of the app in the file system.
- `configuration`: The options that indicate how you want to open the URLs.
- `completionHandler`: The completion handler block to call asynchronously with the results. AppKit executes the completion handler on a concurrent queue. The handler block has no return value and takes the following parameters:

  - **app**: On success, this parameter contains a reference to the app that opened the URLs. If the app didn’t open the URLs successfully, this parameter is `nil`.
  - **error**: On failure, this parameter contains an [NSError](https://developer.apple.com/documentation/foundation/nserror) object indicating the reason for the failure. If the method opened the URLs successfully, this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

You may call this method safely from any thread of your app.

## See Also

### Opening URLs

- [open(\_:configuration:completionHandler:)](open%28__configuration_completionhandler_%29.md): Opens a URL asynchronously using the provided options.
- [open(\_:)](open%28__%29.md): Opens the location at the specified URL.

# openURLs:withApplicationAtURL:configuration:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Opens one or more URLs asynchronously in the specified app using the provided options.

## Declaration

```objectivec
- (void) openURLs:(NSArray<NSURL *> *) urls withApplicationAtURL:(NSURL *) applicationURL configuration:(NSWorkspaceOpenConfiguration *) configuration completionHandler:(void (^)(NSRunningApplication *app, NSError *error)) completionHandler;
```

## Parameters

- `urls`: The URL to open.
- `applicationURL`: A URL specifying the location of the app in the file system.
- `configuration`: The options that indicate how you want to open the URLs.
- `completionHandler`: The completion handler block to call asynchronously with the results. AppKit executes the completion handler on a concurrent queue. The handler block has no return value and takes the following parameters:

  - **app**: On success, this parameter contains a reference to the app that opened the URLs. If the app didn’t open the URLs successfully, this parameter is `nil`.
  - **error**: On failure, this parameter contains an [NSError](https://developer.apple.com/documentation/foundation/nserror) object indicating the reason for the failure. If the method opened the URLs successfully, this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

You may call this method safely from any thread of your app.

## See Also

### Opening URLs

- [openURL:configuration:completionHandler:](open%28__configuration_completionhandler_%29.md): Opens a URL asynchronously using the provided options.
- [openURL:](open%28__%29.md): Opens the location at the specified URL.
