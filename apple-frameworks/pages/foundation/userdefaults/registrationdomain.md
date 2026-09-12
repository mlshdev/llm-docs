> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/registrationdomain](https://developer.apple.com/documentation/foundation/userdefaults/registrationdomain)

# registrationDomain (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The identifier for the domain that contains your app’s registered default values.

## Declaration

```swift
class let registrationDomain: String
```

## Mentioned In

- [Accessing settings from your code](../accessing-settings-from-your-code.md)

<a id="discussion"></a>

## Discussion

The settings in this domain represent default values you want to use for its settings. To register your app’s default settings, call the [register(defaults:)](register%28defaults_%29.md) method shortly after launch.

## See Also

### Getting the domain names

- [argumentDomain](argumentdomain.md): The identifier for the domain that contains command-line settings.
- [globalDomain](globaldomain.md): The identifier for the domain that contains system-specified settings for all apps.
- [volatileDomainNames](volatiledomainnames.md): An array of identifiers for the volatile domains associated with the current object.

# NSRegistrationDomain (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The identifier for the domain that contains your app’s registered default values.

## Declaration

```objectivec
extern NSString * const NSRegistrationDomain;
```

## Mentioned In

- [Accessing settings from your code](../accessing-settings-from-your-code.md)

<a id="discussion"></a>

## Discussion

The settings in this domain represent default values you want to use for its settings. To register your app’s default settings, call the [registerDefaults:](register%28defaults_%29.md) method shortly after launch.

## See Also

### Getting the domain names

- [NSArgumentDomain](argumentdomain.md): The identifier for the domain that contains command-line settings.
- [NSGlobalDomain](globaldomain.md): The identifier for the domain that contains system-specified settings for all apps.
- [volatileDomainNames](volatiledomainnames.md): An array of identifiers for the volatile domains associated with the current object.
