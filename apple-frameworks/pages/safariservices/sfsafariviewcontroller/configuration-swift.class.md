> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariviewcontroller/configuration-swift.class](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller/configuration-swift.class)

# SFSafariViewController.Configuration (Swift)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A configuration object that defines how a Safari view controller should be initialized.

## Declaration

```swift
class Configuration
```

<a id="overview"></a>

## Overview

Use a configuration object with the [init(url:configuration:)](init%28url_configuration_%29-305vl.md) method to initialize your view controller.

## Topics

### Configuring a Safari View Controller

- [entersReaderIfAvailable](configuration-swift.class/entersreaderifavailable.md): A value that specifies whether Safari should enter Reader mode, if it is available.
- [barCollapsingEnabled](configuration-swift.class/barcollapsingenabled.md)
- [eventAttribution](configuration-swift.class/eventattribution.md): An object you use to send tap event attribution data to the browser for Private Click Measurement.

### Instance Properties

- [activityButton](configuration-swift.class/activitybutton.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Creating a View Controller

- [init(url:configuration:)](init%28url_configuration_%29-305vl.md): Initializes and configures a Safari view controller that loads the specified URL.
- [init(url:)](init%28url_%29-5kpkn.md): Initializes a Safari view controller that loads the specified URL.
- [init(url:entersReaderIfAvailable:)](init%28url_entersreaderifavailable_%29-3aatz.md): Deprecated. Initializes a Safari view controller that will load the specified URL, entering Reader mode if Reader mode is requested and available.

# SFSafariViewControllerConfiguration (Objective-C)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A configuration object that defines how a Safari view controller should be initialized.

## Declaration

```objectivec
@interface SFSafariViewControllerConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Use a configuration object with the [initWithURL:configuration:](init%28url_configuration_%29-305vl.md) method to initialize your view controller.

## Topics

### Configuring a Safari View Controller

- [entersReaderIfAvailable](configuration-swift.class/entersreaderifavailable.md): A value that specifies whether Safari should enter Reader mode, if it is available.
- [barCollapsingEnabled](configuration-swift.class/barcollapsingenabled.md)
- [eventAttribution](configuration-swift.class/eventattribution.md): An object you use to send tap event attribution data to the browser for Private Click Measurement.

### Instance Properties

- [activityButton](configuration-swift.class/activitybutton.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)

## See Also

### Creating a View Controller

- [initWithURL:configuration:](init%28url_configuration_%29-305vl.md): Initializes and configures a Safari view controller that loads the specified URL.
- [initWithURL:](init%28url_%29-5kpkn.md): Initializes a Safari view controller that loads the specified URL.
- [initWithURL:entersReaderIfAvailable:](init%28url_entersreaderifavailable_%29-3aatz.md): Deprecated. Initializes a Safari view controller that will load the specified URL, entering Reader mode if Reader mode is requested and available.
