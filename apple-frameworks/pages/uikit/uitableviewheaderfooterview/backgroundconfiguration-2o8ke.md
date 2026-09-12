> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewheaderfooterview/backgroundconfiguration-2o8ke](https://developer.apple.com/documentation/uikit/uitableviewheaderfooterview/backgroundconfiguration-2o8ke)

# backgroundConfiguration

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The current background configuration of the view.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIBackgroundConfiguration * backgroundConfiguration;
```

<a id="Discussion"></a>

## Discussion

Using a background configuration, you can obtain system default background styling for a variety of different view states. Create a background configuration with one of the default system styles, customize the configuration to match your view’s style as necessary, and assign the configuration to this property.

```objc
UIBackgroundConfiguration *backgroundConfig = [UIBackgroundConfiguration listPlainHeaderFooterConfiguration];
[backgroundConfig setBackgroundColor: [UIColor systemGrayColor]];
[header setBackgroundConfiguration: backgroundConfig];
```

A background configuration is mutually exclusive with background views, so you must use one approach or the other. Setting a non-`nil` value for this property resets the following APIs to `nil`:

- [backgroundColor](../uiview/backgroundcolor.md)
- [backgroundView](backgroundview.md)

## See Also

### Configuring the background

- [defaultBackgroundConfiguration](defaultbackgroundconfiguration.md): Retrieves a background configuration with system default values.
- [automaticallyUpdatesBackgroundConfiguration](automaticallyupdatesbackgroundconfiguration.md): A Boolean value that determines whether the view automatically updates its background configuration when its state changes.
- [backgroundView](backgroundview.md): The background view of the header or footer.
