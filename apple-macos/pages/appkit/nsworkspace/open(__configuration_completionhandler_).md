> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/open(_:configuration:completionhandler:)](https://developer.apple.com/documentation/appkit/nsworkspace/open(_:configuration:completionhandler:))

# open(\_:configuration:completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Opens a URL asynchronously using the provided options.

## Declaration

```swift
func open(_ url: URL, configuration: NSWorkspace.OpenConfiguration, completionHandler: (@Sendable (NSRunningApplication?, (any Error)?) -> Void)? = nil)
```

```swift
func open(_ url: URL, configuration: NSWorkspace.OpenConfiguration) async throws -> NSRunningApplication
```

## Parameters

- `url`: The URL to open.
- `configuration`: The options that indicate how you want to open the URL.
- `completionHandler`: The completion handler block to call asynchronously with the results. AppKit executes the completion handler on a concurrent queue. The handler block has no return value and takes the following parameters:

  - **app**: On success, this parameter contains a reference to the app that opened the URL. If the app didn’t open the URL successfully, this parameter is `nil`.
  - **error**: On failure, this parameter contains an [NSError](https://developer.apple.com/documentation/foundation/nserror) object indicating the reason for the failure. If the method opened the URL successfully, this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

You may call this method safely from any thread of your app.

## See Also

### Opening URLs

- [open(\_:withApplicationAt:configuration:completionHandler:)](open%28__withapplicationat_configuration_completionhandler_%29.md): Opens one or more URLs asynchronously in the specified app using the provided options.
- [open(\_:)](open%28__%29.md): Opens the location at the specified URL.

# openURL:configuration:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Opens a URL asynchronously using the provided options.

## Declaration

```objectivec
- (void) openURL:(NSURL *) url configuration:(NSWorkspaceOpenConfiguration *) configuration completionHandler:(void (^)(NSRunningApplication *app, NSError *error)) completionHandler;
```

## Parameters

- `url`: The URL to open.
- `configuration`: The options that indicate how you want to open the URL.
- `completionHandler`: The completion handler block to call asynchronously with the results. AppKit executes the completion handler on a concurrent queue. The handler block has no return value and takes the following parameters:

  - **app**: On success, this parameter contains a reference to the app that opened the URL. If the app didn’t open the URL successfully, this parameter is `nil`.
  - **error**: On failure, this parameter contains an [NSError](https://developer.apple.com/documentation/foundation/nserror) object indicating the reason for the failure. If the method opened the URL successfully, this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

You may call this method safely from any thread of your app.

## See Also

### Opening URLs

- [openURLs:withApplicationAtURL:configuration:completionHandler:](open%28__withapplicationat_configuration_completionhandler_%29.md): Opens one or more URLs asynchronously in the specified app using the provided options.
- [openURL:](open%28__%29.md): Opens the location at the specified URL.
