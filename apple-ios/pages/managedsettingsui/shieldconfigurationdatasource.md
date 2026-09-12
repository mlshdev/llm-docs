> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettingsui/shieldconfigurationdatasource](https://developer.apple.com/documentation/managedsettingsui/shieldconfigurationdatasource)

# ShieldConfigurationDataSource

**Framework:** Managed Settings UI  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The base class for the principal object of an app extension that configures a shield’s appearance.

## Declaration

```swift
@objc class ShieldConfigurationDataSource
```

<a id="overview"></a>

## Overview

You can create an extension to customize the appearance of the shields that the system uses to cover an application or website. The system provides your extension with the display names, bundle identifiers, and domains for each application, website, or category it shields. Your extension is expected to return an appropriate configuration as quickly as possible, in order to provide the best possible user experience. To protect the Family Sharing group’s privacy, your extension runs in a sandbox. This sandbox prevents your extension from making network requests or moving sensitive content outside the extension’s address space. The system provides a default appearance for any methods that your subclass doesn’t override, or if it takes too long to return a configuration.

## Topics

### Styling an application shield

- [configuration(shielding:)](shieldconfigurationdatasource/configuration%28shielding_%29-5uqm1.md): Requests a configuration to use for a shield that covers an application.
- [configuration(shielding:in:)](shieldconfigurationdatasource/configuration%28shielding_in_%29-ia14.md): Requests a configuration to use for a shield that covers an application because of its category.

### Styling a website shield

- [configuration(shielding:)](shieldconfigurationdatasource/configuration%28shielding_%29-18i24.md): Requests a configuration to use for a shield that covers a website.
- [configuration(shielding:in:)](shieldconfigurationdatasource/configuration%28shielding_in_%29-6n6rd.md): Requests a configuration to use for a shield that covers a website because of its category.

### Initializers

- [init()](shieldconfigurationdatasource/init%28%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Shield appearance

- [ShieldConfiguration](shieldconfiguration.md): An object that defines the appearance of a shield to display over an application or website.
