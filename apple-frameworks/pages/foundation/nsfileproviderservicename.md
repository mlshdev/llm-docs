> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfileproviderservicename](https://developer.apple.com/documentation/foundation/nsfileproviderservicename)

# NSFileProviderServiceName (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The name used to identify a File Provider service.

## Declaration

```swift
struct NSFileProviderServiceName
```

<a id="Discussion"></a>

## Discussion

The team providing the protocol also defines the name. To create a new service’s name:

- Use reverse domain name notation for the interfaces name (for example, `com.example.MyInterface`).
- (Optional) Incorporate versioning by appending a version number to the end of the name (`com.example.MyInterface.v2`).

For more information on defining a service’s protocol, see [Defining the Service’s Protocol](nsfileproviderservice.md#Defining-the-Services-Protocol).

## Topics

### Initializers

- [init(\_:)](nsfileproviderservicename/init%28__%29.md): Instantiates a new service name from the provided string.
- [init(rawValue:)](nsfileproviderservicename/init%28rawvalue_%29.md): Instantiates a new service name from the provided string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing file provider services

- [getFileProviderServicesForItem(at:completionHandler:)](filemanager/getfileproviderservicesforitem%28at_completionhandler_%29.md): Returns the services provided by the File Provider extension that manages the item at the given URL.
- [NSFileProviderService](nsfileproviderservice.md): A service that provides a custom communication channel between your app and a File Provider extension.

# NSFileProviderServiceName (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The name used to identify a File Provider service.

## Declaration

```objectivec
typedef NSString * NSFileProviderServiceName;
```

<a id="Discussion"></a>

## Discussion

The team providing the protocol also defines the name. To create a new service’s name:

- Use reverse domain name notation for the interfaces name (for example, `com.example.MyInterface`).
- (Optional) Incorporate versioning by appending a version number to the end of the name (`com.example.MyInterface.v2`).

For more information on defining a service’s protocol, see [Defining the Service’s Protocol](nsfileproviderservice.md#Defining-the-Services-Protocol).

## See Also

### Accessing file provider services

- [getFileProviderServicesForItemAtURL:completionHandler:](filemanager/getfileproviderservicesforitem%28at_completionhandler_%29.md): Returns the services provided by the File Provider extension that manages the item at the given URL.
- [NSFileProviderService](nsfileproviderservice.md): A service that provides a custom communication channel between your app and a File Provider extension.
