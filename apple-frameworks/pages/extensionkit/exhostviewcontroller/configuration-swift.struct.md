> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionkit/exhostviewcontroller/configuration-swift.struct](https://developer.apple.com/documentation/extensionkit/exhostviewcontroller/configuration-swift.struct)

# EXHostViewController.Configuration

**Framework:** ExtensionKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 13.0+

An object that holds configuration options for a host view controller.

## Declaration

```swift
struct Configuration
```

## Topics

### Creating a configuration type

- [init(appExtension:sceneID:)](configuration-swift.struct/init%28appextension_sceneid_%29.md): Creates a new configuration object.

### Identifying the scene to display

- [appExtension](configuration-swift.struct/appextension.md): The app extension for this configuration object.
- [sceneID](configuration-swift.struct/sceneid.md): The unique identifier for this configuration object’s user interface.

## See Also

### Configuring the view controller

- [configuration](configuration-swift.property.md): The information the host view controller uses to fetch the appropriate scene from an app extension.
- [placeholderView](placeholderview.md): The view to display when the view controller has no app extension content to display.
