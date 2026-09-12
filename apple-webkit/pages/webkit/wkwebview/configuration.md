> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/configuration](https://developer.apple.com/documentation/webkit/wkwebview/configuration)

# configuration (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The object that contains the configuration details for the web view.

## Declaration

```swift
@NSCopying var configuration: WKWebViewConfiguration { get }
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to obtain information about your web view’s configuration. Because this property returns a copy of the configuration object, changes you make to that object don’t affect the web view’s configuration.

If you didn’t create your web view using the [init(frame:configuration:)](init%28frame_configuration_%29.md) method, this property contains a default configuration object.

## See Also

### Related Documentation

- [WKWebViewConfiguration](../wkwebviewconfiguration.md): A collection of properties that you use to initialize a web view.

### Creating a web view

- [init(frame:configuration:)](init%28frame_configuration_%29.md): Creates a web view and initializes it with the specified frame and configuration data.
- [init(coder:)](init%28coder_%29.md): Returns an object initialized from data in the specified coder object.

# configuration (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The object that contains the configuration details for the web view.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) WKWebViewConfiguration * configuration;
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to obtain information about your web view’s configuration. Because this property returns a copy of the configuration object, changes you make to that object don’t affect the web view’s configuration.

If you didn’t create your web view using the [initWithFrame:configuration:](init%28frame_configuration_%29.md) method, this property contains a default configuration object.

## See Also

### Related Documentation

- [WKWebViewConfiguration](../wkwebviewconfiguration.md): A collection of properties that you use to initialize a web view.

### Creating a web view

- [initWithFrame:configuration:](init%28frame_configuration_%29.md): Creates a web view and initializes it with the specified frame and configuration data.
- [initWithCoder:](init%28coder_%29.md): Returns an object initialized from data in the specified coder object.
