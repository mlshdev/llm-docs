> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/columnconfigurationdidchangenotification](https://developer.apple.com/documentation/appkit/nsbrowser/columnconfigurationdidchangenotification)

# columnConfigurationDidChangeNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Notifies the delegate when the width of a browser column has changed.

## Declaration

```swift
class let columnConfigurationDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the browser whose column sizes need to be made persistent. This notification does not contain a `userInfo` dictionary. If the user resizes more than one column, a single notification is posted when the user is finished resizing.

## See Also

### Related Documentation

To observe this notification using Swift concurrency, use [NSBrowser.ColumnConfigurationDidChangeMessage](columnconfigurationdidchangemessage.md).

- [browserColumnConfigurationDidChange(\_:)](../nsbrowserdelegate/browsercolumnconfigurationdidchange%28__%29.md): Used by clients to implement their own column width persistence.

# NSBrowserColumnConfigurationDidChangeNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Notifies the delegate when the width of a browser column has changed.

## Declaration

```objectivec
extern NSNotificationName NSBrowserColumnConfigurationDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the browser whose column sizes need to be made persistent. This notification does not contain a `userInfo` dictionary. If the user resizes more than one column, a single notification is posted when the user is finished resizing.

## See Also

### Related Documentation

To observe this notification using Swift concurrency, use [NSBrowser.ColumnConfigurationDidChangeMessage](columnconfigurationdidchangemessage.md).

- [browserColumnConfigurationDidChange:](../nsbrowserdelegate/browsercolumnconfigurationdidchange%28__%29.md): Used by clients to implement their own column width persistence.
