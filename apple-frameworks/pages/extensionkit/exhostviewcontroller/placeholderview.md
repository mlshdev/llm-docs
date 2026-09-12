> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionkit/exhostviewcontroller/placeholderview](https://developer.apple.com/documentation/extensionkit/exhostviewcontroller/placeholderview)

# placeholderView

**Framework:** ExtensionKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 13.0+

The view to display when the view controller has no app extension content to display.

## Declaration

```swift
var placeholderView: UIView { get set }
```

```swift
var placeholderView: NSView { get set }
```

## See Also

### Configuring the view controller

- [configuration](configuration-swift.property.md): The information the host view controller uses to fetch the appropriate scene from an app extension.
- [EXHostViewController.Configuration](configuration-swift.struct.md): An object that holds configuration options for a host view controller.
