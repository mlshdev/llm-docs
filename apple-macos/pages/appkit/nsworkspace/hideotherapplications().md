> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/hideotherapplications()](https://developer.apple.com/documentation/appkit/nsworkspace/hideotherapplications())

# hideOtherApplications() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Hides all applications other than the sender.

## Declaration

```swift
func hideOtherApplications()
```

<a id="Discussion"></a>

## Discussion

In order to hide all apps except the current one, the user can Command-Option-click an app’s Dock icon.

You must call this method from your app’s main thread.

## See Also

### Launching and Hiding Apps

- [openApplication(at:configuration:completionHandler:)](openapplication%28at_configuration_completionhandler_%29.md): Launches the app at the specified URL and asynchronously reports back on the app’s status.

# hideOtherApplications (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Hides all applications other than the sender.

## Declaration

```objectivec
- (void) hideOtherApplications;
```

<a id="Discussion"></a>

## Discussion

In order to hide all apps except the current one, the user can Command-Option-click an app’s Dock icon.

You must call this method from your app’s main thread.

## See Also

### Launching and Hiding Apps

- [openApplicationAtURL:configuration:completionHandler:](openapplication%28at_configuration_completionhandler_%29.md): Launches the app at the specified URL and asynchronously reports back on the app’s status.
