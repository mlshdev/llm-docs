> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderdomain/testingmodes-swift.struct/alwaysenabled](https://developer.apple.com/documentation/fileprovider/nsfileproviderdomain/testingmodes-swift.struct/alwaysenabled)

# alwaysEnabled (Swift)

**Framework:** File Provider  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

A testing mode that automatically enables the domain.

## Declaration

```swift
static var alwaysEnabled: NSFileProviderDomain.TestingModes { get }
```

<a id="Discussion"></a>

## Discussion

By default, the user must manually enable a domain in System Preferences \> Extensions before the File Provider extension can access it. This testing mode bypasses that workflow and automatically enables the domain.

## See Also

### Accessing Modes

- [interactive](interactive.md): A testing mode where the extension can deterministically test asynchronous operations.

# NSFileProviderDomainTestingModeAlwaysEnabled (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.15+ · visionOS 1.0+

A testing mode that automatically enables the domain.

## Declaration

```objectivec
NSFileProviderDomainTestingModeAlwaysEnabled
```

<a id="Discussion"></a>

## Discussion

By default, the user must manually enable a domain in System Preferences \> Extensions before the File Provider extension can access it. This testing mode bypasses that workflow and automatically enables the domain.

## See Also

### Accessing Modes

- [NSFileProviderDomainTestingModeInteractive](interactive.md): A testing mode where the extension can deterministically test asynchronous operations.
