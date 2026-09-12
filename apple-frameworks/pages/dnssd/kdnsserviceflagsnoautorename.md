> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/kdnsserviceflagsnoautorename](https://developer.apple.com/documentation/dnssd/kdnsserviceflagsnoautorename)

# kDNSServiceFlagsNoAutoRename (Swift)

**Framework:** dnssd  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```swift
var kDNSServiceFlagsNoAutoRename: UInt32 { get }
```

<a id="Discussion"></a>

## Discussion

Flag for specifying renaming behavior on name conflict when registering non-shared records. By default, name conflicts are automatically handled by renaming the service. NoAutoRename overrides this behavior - with this flag set, name conflicts will result in a callback. The NoAutorename flag is only valid if a name is explicitly specified when registering a service (i.e. the default name is not used.)

# kDNSServiceFlagsNoAutoRename (Objective-C)

**Framework:** dnssd  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```objectivec
kDNSServiceFlagsNoAutoRename
```

<a id="Discussion"></a>

## Discussion

Flag for specifying renaming behavior on name conflict when registering non-shared records. By default, name conflicts are automatically handled by renaming the service. NoAutoRename overrides this behavior - with this flag set, name conflicts will result in a callback. The NoAutorename flag is only valid if a name is explicitly specified when registering a service (i.e. the default name is not used.)
