> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/argumentdomain](https://developer.apple.com/documentation/foundation/userdefaults/argumentdomain)

# argumentDomain (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The identifier for the domain that contains command-line settings.

## Declaration

```swift
class let argumentDomain: String
```

<a id="discussion"></a>

## Discussion

When someone launches your app from Xcode or the command-line, they can override setting values using command-line arguments. The defaults system stores those overrides in this domain, which is volatile and resets with each app launch. Values in this domain override most other domains, including your app-specific settings.

To specify custom settings from the command line, add the `-default` parameter to your command-line invocation followed by a *key=value* string with the key and value you want to set.

## See Also

### Getting the domain names

- [globalDomain](globaldomain.md): The identifier for the domain that contains system-specified settings for all apps.
- [registrationDomain](registrationdomain.md): The identifier for the domain that contains your app’s registered default values.
- [volatileDomainNames](volatiledomainnames.md): An array of identifiers for the volatile domains associated with the current object.

# NSArgumentDomain (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The identifier for the domain that contains command-line settings.

## Declaration

```objectivec
extern NSString * const NSArgumentDomain;
```

<a id="discussion"></a>

## Discussion

When someone launches your app from Xcode or the command-line, they can override setting values using command-line arguments. The defaults system stores those overrides in this domain, which is volatile and resets with each app launch. Values in this domain override most other domains, including your app-specific settings.

To specify custom settings from the command line, add the `-default` parameter to your command-line invocation followed by a *key=value* string with the key and value you want to set.

## See Also

### Getting the domain names

- [NSGlobalDomain](globaldomain.md): The identifier for the domain that contains system-specified settings for all apps.
- [NSRegistrationDomain](registrationdomain.md): The identifier for the domain that contains your app’s registered default values.
- [volatileDomainNames](volatiledomainnames.md): An array of identifiers for the volatile domains associated with the current object.
