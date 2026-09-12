> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariviewcontroller/init(url:entersreaderifavailable:)-3aatz](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller/init(url:entersreaderifavailable:)-3aatz)

# init(url:entersReaderIfAvailable:) (Swift)

**Framework:** Safari Services  
**Kind:** Initializer  
**Availability:** iOS 9.0+ (deprecated in 11.0) · iPadOS 9.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Initializes a Safari view controller that will load the specified URL, entering Reader mode if Reader mode is requested and available.

## Declaration

```swift
init(url URL: URL, entersReaderIfAvailable: Bool)
```

## Parameters

- `URL`: The URL to navigate to. The URL must use the `http` or `https` scheme.
- `entersReaderIfAvailable`: On output, [true](https://developer.apple.com/documentation/swift/true) if Reader mode should be entered automatically when it is available for the webpage; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

A newly created Safari view controller.

<a id="Discussion"></a>

## Discussion

`entersReaderIfAvailable` applies only to the first page loaded.

## See Also

### Creating a View Controller

- [init(url:configuration:)](init%28url_configuration_%29-305vl.md): Initializes and configures a Safari view controller that loads the specified URL.
- [SFSafariViewController.Configuration](configuration-swift.class.md): A configuration object that defines how a Safari view controller should be initialized.
- [init(url:)](init%28url_%29-5kpkn.md): Initializes a Safari view controller that loads the specified URL.

# initWithURL:entersReaderIfAvailable: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 11.0) · iPadOS 9.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Initializes a Safari view controller that will load the specified URL, entering Reader mode if Reader mode is requested and available.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) URL entersReaderIfAvailable:(BOOL) entersReaderIfAvailable;
```

## Parameters

- `URL`: The URL to navigate to. The URL must use the `http` or `https` scheme.
- `entersReaderIfAvailable`: On output, [true](https://developer.apple.com/documentation/swift/true) if Reader mode should be entered automatically when it is available for the webpage; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

A newly created Safari view controller.

<a id="Discussion"></a>

## Discussion

`entersReaderIfAvailable` applies only to the first page loaded.

## See Also

### Creating a View Controller

- [initWithURL:configuration:](init%28url_configuration_%29-305vl.md): Initializes and configures a Safari view controller that loads the specified URL.
- [SFSafariViewControllerConfiguration](configuration-swift.class.md): A configuration object that defines how a Safari view controller should be initialized.
- [initWithURL:](init%28url_%29-5kpkn.md): Initializes a Safari view controller that loads the specified URL.
