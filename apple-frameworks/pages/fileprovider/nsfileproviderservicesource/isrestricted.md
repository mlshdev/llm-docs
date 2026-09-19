> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fileprovider/nsfileproviderservicesource/isrestricted

# isRestricted (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

## Declaration

```swift
optional var isRestricted: Bool { get }
```

## See Also

### Accessing the Service

- [serviceName](servicename.md): A name that uniquely identifies the service (reverse domain name notation is recommended).
- [makeListenerEndpoint()](makelistenerendpoint%28%29.md): Returns an endpoint object that lets the host app communicate with the File Provider extension.

# restricted (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isRestricted) BOOL restricted;
```

## See Also

### Accessing the Service

- [serviceName](servicename.md): A name that uniquely identifies the service (reverse domain name notation is recommended).
- [makeListenerEndpointAndReturnError:](makelistenerendpoint%28%29.md): Returns an endpoint object that lets the host app communicate with the File Provider extension.
