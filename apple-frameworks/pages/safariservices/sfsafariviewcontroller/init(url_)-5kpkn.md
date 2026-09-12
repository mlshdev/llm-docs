> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariviewcontroller/init(url:)-5kpkn](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller/init(url:)-5kpkn)

# init(url:) (Swift)

**Framework:** Safari Services  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a Safari view controller that loads the specified URL.

## Declaration

```swift
convenience init(url URL: URL)
```

## Parameters

- `URL`: The URL to navigate to. The URL must use the `http` or `https` scheme.

<a id="return-value"></a>

## Return Value

A newly created Safari view controller.

## See Also

### Creating a View Controller

- [init(url:configuration:)](init%28url_configuration_%29-305vl.md): Initializes and configures a Safari view controller that loads the specified URL.
- [SFSafariViewController.Configuration](configuration-swift.class.md): A configuration object that defines how a Safari view controller should be initialized.
- [init(url:entersReaderIfAvailable:)](init%28url_entersreaderifavailable_%29-3aatz.md): Deprecated. Initializes a Safari view controller that will load the specified URL, entering Reader mode if Reader mode is requested and available.

# initWithURL: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a Safari view controller that loads the specified URL.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) URL;
```

## Parameters

- `URL`: The URL to navigate to. The URL must use the `http` or `https` scheme.

<a id="return-value"></a>

## Return Value

A newly created Safari view controller.

## See Also

### Creating a View Controller

- [initWithURL:configuration:](init%28url_configuration_%29-305vl.md): Initializes and configures a Safari view controller that loads the specified URL.
- [SFSafariViewControllerConfiguration](configuration-swift.class.md): A configuration object that defines how a Safari view controller should be initialized.
- [initWithURL:entersReaderIfAvailable:](init%28url_entersreaderifavailable_%29-3aatz.md): Deprecated. Initializes a Safari view controller that will load the specified URL, entering Reader mode if Reader mode is requested and available.
