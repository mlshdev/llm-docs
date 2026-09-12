> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/globaldomain](https://developer.apple.com/documentation/foundation/userdefaults/globaldomain)

# globalDomain (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The identifier for the domain that contains system-specified settings for all apps.

## Declaration

```swift
class let globalDomain: String
```

<a id="discussion"></a>

## Discussion

The system populates this domain with information that’s relevant to all apps. For example, this domain contains the current language settings for the device. You can read values from this domain, but don’t write your own settings to it.

## See Also

### Getting the domain names

- [argumentDomain](argumentdomain.md): The identifier for the domain that contains command-line settings.
- [registrationDomain](registrationdomain.md): The identifier for the domain that contains your app’s registered default values.
- [volatileDomainNames](volatiledomainnames.md): An array of identifiers for the volatile domains associated with the current object.

# NSGlobalDomain (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The identifier for the domain that contains system-specified settings for all apps.

## Declaration

```objectivec
extern NSString * const NSGlobalDomain;
```

<a id="discussion"></a>

## Discussion

The system populates this domain with information that’s relevant to all apps. For example, this domain contains the current language settings for the device. You can read values from this domain, but don’t write your own settings to it.

## See Also

### Getting the domain names

- [NSArgumentDomain](argumentdomain.md): The identifier for the domain that contains command-line settings.
- [NSRegistrationDomain](registrationdomain.md): The identifier for the domain that contains your app’s registered default values.
- [volatileDomainNames](volatiledomainnames.md): An array of identifiers for the volatile domains associated with the current object.
