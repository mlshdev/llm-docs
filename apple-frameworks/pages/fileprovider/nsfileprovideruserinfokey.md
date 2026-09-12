> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideruserinfokey](https://developer.apple.com/documentation/fileprovider/nsfileprovideruserinfokey)

# NSFileProviderUserInfoKey (Swift)

**Framework:** File Provider  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

## Declaration

```swift
struct NSFileProviderUserInfoKey
```

## Topics

### Initializers

- [init(\_:)](nsfileprovideruserinfokey/init%28__%29.md)
- [init(rawValue:)](nsfileprovideruserinfokey/init%28rawvalue_%29.md)

### Type Properties

- [experimentID](nsfileprovideruserinfokey/experimentid.md): System interpreted user info key When setting a value to that user info on a domain, the system will ingest this value. If user has given their consent for telemetry, this value will be used to decorate telemetry messages sent by the FileProvider subsystem. The telemetry messages can be then later on retrieved by developers along with the other metrics through the CloudKit console as detailed here: https://developer.apple.com/documentation/fileprovider/exporting-file-provider-metrics-data?language=objc This will help developers triaging data they receive from testing population compared to regular users The value must either be a NSNumber between \[0 - 31\]. If it’s not in that range, or if it is not a NSNumber, any call to addDomain with that invalid UserInfo dictionary will fail with a EINVAL POSIX NSError. To update this value, the provider must call addDomain with an updated userInfo dictionary

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSFileProviderUserInfoKey (Objective-C)

**Framework:** File Provider  
**Kind:** Type Alias  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · macOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
typedef NSString * NSFileProviderUserInfoKey;
```
