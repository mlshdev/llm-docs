> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderservicesource](https://developer.apple.com/documentation/fileprovider/nsfileproviderservicesource)

# NSFileProviderServiceSource (Swift)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

A service that provides a custom communication channel between the host app and the File Provider extension.

## Declaration

```swift
protocol NSFileProviderServiceSource
```

<a id="overview"></a>

## Overview

To implement a File Provider service, the [NSFileProviderExtension](nsfileproviderextension.md) subclass must override the [supportedServiceSources(for:)](nsfileproviderextension/supportedservicesources%28for_%29.md) method and return the supported services.

For more information about creating services, see   [NSFileProviderService](../foundation/nsfileproviderservice.md).

## Topics

### Accessing the Service

- [serviceName](nsfileproviderservicesource/servicename.md): A name that uniquely identifies the service (reverse domain name notation is recommended).
- [makeListenerEndpoint()](nsfileproviderservicesource/makelistenerendpoint%28%29.md): Returns an endpoint object that lets the host app communicate with the File Provider extension.
- [isRestricted](nsfileproviderservicesource/isrestricted.md)

## See Also

### Working with services

- [supportedServiceSources(for:)](nsfileproviderextension/supportedservicesources%28for_%29.md): Return an array of service sources that let the host app perform actions associated with the specified item.

# NSFileProviderServiceSource (Objective-C)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

A service that provides a custom communication channel between the host app and the File Provider extension.

## Declaration

```objectivec
@protocol NSFileProviderServiceSource
```

<a id="overview"></a>

## Overview

To implement a File Provider service, the [NSFileProviderExtension](nsfileproviderextension.md) subclass must override the [supportedServiceSourcesForItemIdentifier:error:](nsfileproviderextension/supportedservicesources%28for_%29.md) method and return the supported services.

For more information about creating services, see   [NSFileProviderService](../foundation/nsfileproviderservice.md).

## Topics

### Accessing the Service

- [serviceName](nsfileproviderservicesource/servicename.md): A name that uniquely identifies the service (reverse domain name notation is recommended).
- [makeListenerEndpointAndReturnError:](nsfileproviderservicesource/makelistenerendpoint%28%29.md): Returns an endpoint object that lets the host app communicate with the File Provider extension.
- [restricted](nsfileproviderservicesource/isrestricted.md)

## See Also

### Working with services

- [supportedServiceSourcesForItemIdentifier:error:](nsfileproviderextension/supportedservicesources%28for_%29.md): Return an array of service sources that let the host app perform actions associated with the specified item.
