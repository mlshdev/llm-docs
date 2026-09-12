> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/init(frame:configuration:)](https://developer.apple.com/documentation/webkit/wkwebview/init(frame:configuration:))

# init(frame:configuration:) (Swift)

**Framework:** WebKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Creates a web view and initializes it with the specified frame and configuration data.

## Declaration

```swift
init(frame: CGRect, configuration: WKWebViewConfiguration)
```

## Parameters

- `frame`: The frame rectangle for the new web view.
- `configuration`: The configuration of the new web view. This method saves a copy of your configuration object. Changes you make to your original object after calling this method have no effect on the web view’s configuration. For a list of configuration options and their default values, see [WKWebViewConfiguration](../wkwebviewconfiguration.md).

<a id="return-value"></a>

## Return Value

An initialized web view, or `nil` if the view couldn’t be initialized.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for the class. Use this method to create a web view that requires custom configuration. For example, use it when you need to specify custom cookies or content filters for the web content.

To create a web view with default configuration values, call the inherited [init(frame:)](https://developer.apple.com/documentation/uikit/uiview/init%28frame:%29) method.

## See Also

### Creating a web view

- [init(coder:)](init%28coder_%29.md): Returns an object initialized from data in the specified coder object.
- [configuration](configuration.md): The object that contains the configuration details for the web view.

# initWithFrame:configuration: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Creates a web view and initializes it with the specified frame and configuration data.

## Declaration

```objectivec
- (instancetype) initWithFrame:(CGRect) frame configuration:(WKWebViewConfiguration *) configuration;
```

## Parameters

- `frame`: The frame rectangle for the new web view.
- `configuration`: The configuration of the new web view. This method saves a copy of your configuration object. Changes you make to your original object after calling this method have no effect on the web view’s configuration. For a list of configuration options and their default values, see [WKWebViewConfiguration](../wkwebviewconfiguration.md).

<a id="return-value"></a>

## Return Value

An initialized web view, or `nil` if the view couldn’t be initialized.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for the class. Use this method to create a web view that requires custom configuration. For example, use it when you need to specify custom cookies or content filters for the web content.

To create a web view with default configuration values, call the inherited [initWithFrame:](https://developer.apple.com/documentation/uikit/uiview/init%28frame:%29) method.

## See Also

### Creating a web view

- [initWithCoder:](init%28coder_%29.md): Returns an object initialized from data in the specified coder object.
- [configuration](configuration.md): The object that contains the configuration details for the web view.
