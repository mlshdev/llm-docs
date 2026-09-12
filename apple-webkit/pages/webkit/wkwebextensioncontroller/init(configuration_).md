> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontroller/init(configuration:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontroller/init(configuration:))

# init(configuration:) (Swift)

**Framework:** WebKit  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Returns a web extension controller initialized with the specified configuration.

## Declaration

```swift
init(configuration: WKWebExtensionController.Configuration)
```

## Parameters

- `configuration`: The configuration for the new web extension controller.

<a id="return-value"></a>

## Return Value

An initialized web extension controller, or nil if the object could not be initialized.

<a id="discussion"></a>

## Discussion

This is a designated initializer. You can use [init()](init%28%29.md) to initialize an instance with the default configuration. The initializer copies the specified configuration, so mutating the configuration after invoking the initializer has no effect on the web extension controller.

## See Also

### Related Documentation

- [init()](init%28%29.md): Returns a web extension controller initialized with the default configuration.

# initWithConfiguration: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Returns a web extension controller initialized with the specified configuration.

## Declaration

```objectivec
- (instancetype) initWithConfiguration:(WKWebExtensionControllerConfiguration *) configuration;
```

## Parameters

- `configuration`: The configuration for the new web extension controller.

<a id="return-value"></a>

## Return Value

An initialized web extension controller, or nil if the object could not be initialized.

<a id="discussion"></a>

## Discussion

This is a designated initializer. You can use [init](init%28%29.md) to initialize an instance with the default configuration. The initializer copies the specified configuration, so mutating the configuration after invoking the initializer has no effect on the web extension controller.

## See Also

### Related Documentation

- [init](init%28%29.md): Returns a web extension controller initialized with the default configuration.
