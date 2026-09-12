> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariviewcontroller/init(url:configuration:)-305vl](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller/init(url:configuration:)-305vl)

# init(url:configuration:) (Swift)

**Framework:** Safari Services  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes and configures a Safari view controller that loads the specified URL.

## Declaration

```swift
init(url URL: URL, configuration: SFSafariViewController.Configuration)
```

## Parameters

- `URL`: The URL to navigate to. The URL must use the `http` or `https` scheme.
- `configuration`: The configuration for the new view controller.

<a id="return-value"></a>

## Return Value

A newly created Safari view controller.

<a id="Discussion"></a>

## Discussion

Use [init(url:)](init%28url_%29-5kpkn.md) to initialize an instance with the default configuration. The initializer copies the specified [SFSafariViewController.Configuration](configuration-swift.class.md) object, so mutating the configuration after invoking the initializer has no effect on the view controller.

## See Also

### Creating a View Controller

- [SFSafariViewController.Configuration](configuration-swift.class.md): A configuration object that defines how a Safari view controller should be initialized.
- [init(url:)](init%28url_%29-5kpkn.md): Initializes a Safari view controller that loads the specified URL.
- [init(url:entersReaderIfAvailable:)](init%28url_entersreaderifavailable_%29-3aatz.md): Deprecated. Initializes a Safari view controller that will load the specified URL, entering Reader mode if Reader mode is requested and available.

# initWithURL:configuration: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes and configures a Safari view controller that loads the specified URL.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) URL configuration:(SFSafariViewControllerConfiguration *) configuration;
```

## Parameters

- `URL`: The URL to navigate to. The URL must use the `http` or `https` scheme.
- `configuration`: The configuration for the new view controller.

<a id="return-value"></a>

## Return Value

A newly created Safari view controller.

<a id="Discussion"></a>

## Discussion

Use [initWithURL:](init%28url_%29-5kpkn.md) to initialize an instance with the default configuration. The initializer copies the specified [SFSafariViewControllerConfiguration](configuration-swift.class.md) object, so mutating the configuration after invoking the initializer has no effect on the view controller.

## See Also

### Creating a View Controller

- [SFSafariViewControllerConfiguration](configuration-swift.class.md): A configuration object that defines how a Safari view controller should be initialized.
- [initWithURL:](init%28url_%29-5kpkn.md): Initializes a Safari view controller that loads the specified URL.
- [initWithURL:entersReaderIfAvailable:](init%28url_entersreaderifavailable_%29-3aatz.md): Deprecated. Initializes a Safari view controller that will load the specified URL, entering Reader mode if Reader mode is requested and available.
