> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderservicesource/servicename](https://developer.apple.com/documentation/fileprovider/nsfileproviderservicesource/servicename)

# serviceName (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

A name that uniquely identifies the service (reverse domain name notation is recommended).

## Declaration

```swift
var serviceName: NSFileProviderServiceName { get }
```

## See Also

### Accessing the Service

- [makeListenerEndpoint()](makelistenerendpoint%28%29.md): Returns an endpoint object that lets the host app communicate with the File Provider extension.
- [isRestricted](isrestricted.md)

# serviceName (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

A name that uniquely identifies the service (reverse domain name notation is recommended).

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSFileProviderServiceName serviceName;
```

## See Also

### Accessing the Service

- [makeListenerEndpointAndReturnError:](makelistenerendpoint%28%29.md): Returns an endpoint object that lets the host app communicate with the File Provider extension.
- [restricted](isrestricted.md)
