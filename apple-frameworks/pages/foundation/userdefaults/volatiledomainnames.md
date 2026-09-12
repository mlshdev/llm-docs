> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/volatiledomainnames](https://developer.apple.com/documentation/foundation/userdefaults/volatiledomainnames)

# volatileDomainNames (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of identifiers for the volatile domains associated with the current object.

## Declaration

```swift
var volatileDomainNames: [String] { get }
```

<a id="discussion"></a>

## Discussion

Each string in the array corresponds to one of the volatile domains this `UserDefaults` object searches. To get the contents of one of these domains, call the [volatileDomain(forName:)](volatiledomain%28forname_%29.md) method.

## See Also

### Getting the domain names

- [argumentDomain](argumentdomain.md): The identifier for the domain that contains command-line settings.
- [globalDomain](globaldomain.md): The identifier for the domain that contains system-specified settings for all apps.
- [registrationDomain](registrationdomain.md): The identifier for the domain that contains your app’s registered default values.

# volatileDomainNames (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of identifiers for the volatile domains associated with the current object.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * volatileDomainNames;
```

<a id="discussion"></a>

## Discussion

Each string in the array corresponds to one of the volatile domains this `UserDefaults` object searches. To get the contents of one of these domains, call the [volatileDomainForName:](volatiledomain%28forname_%29.md) method.

## See Also

### Getting the domain names

- [NSArgumentDomain](argumentdomain.md): The identifier for the domain that contains command-line settings.
- [NSGlobalDomain](globaldomain.md): The identifier for the domain that contains system-specified settings for all apps.
- [NSRegistrationDomain](registrationdomain.md): The identifier for the domain that contains your app’s registered default values.
