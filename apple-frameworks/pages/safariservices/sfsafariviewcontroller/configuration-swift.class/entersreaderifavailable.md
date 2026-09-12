> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariviewcontroller/configuration-swift.class/entersreaderifavailable](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller/configuration-swift.class/entersreaderifavailable)

# entersReaderIfAvailable (Swift)

**Framework:** Safari Services  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A value that specifies whether Safari should enter Reader mode, if it is available.

## Declaration

```swift
var entersReaderIfAvailable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set the value to [true](https://developer.apple.com/documentation/swift/true) if Reader mode should be entered automatically when it is available for the webpage; otherwise, [false](https://developer.apple.com/documentation/swift/false). The default value is [false](https://developer.apple.com/documentation/swift/false). Set this configuration property instead of initializing a view controller with [init(url:entersReaderIfAvailable:)](../init%28url_entersreaderifavailable_%29-3aatz.md).

## See Also

### Configuring a Safari View Controller

- [barCollapsingEnabled](barcollapsingenabled.md)
- [eventAttribution](eventattribution.md): An object you use to send tap event attribution data to the browser for Private Click Measurement.

# entersReaderIfAvailable (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A value that specifies whether Safari should enter Reader mode, if it is available.

## Declaration

```objectivec
@property (nonatomic) BOOL entersReaderIfAvailable;
```

<a id="Discussion"></a>

## Discussion

Set the value to [true](https://developer.apple.com/documentation/swift/true) if Reader mode should be entered automatically when it is available for the webpage; otherwise, [false](https://developer.apple.com/documentation/swift/false). The default value is [false](https://developer.apple.com/documentation/swift/false). Set this configuration property instead of initializing a view controller with [initWithURL:entersReaderIfAvailable:](../init%28url_entersreaderifavailable_%29-3aatz.md).

## See Also

### Configuring a Safari View Controller

- [barCollapsingEnabled](barcollapsingenabled.md)
- [eventAttribution](eventattribution.md): An object you use to send tap event attribution data to the browser for Private Click Measurement.
