> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnresourcestatus](https://developer.apple.com/documentation/cinematic/cnresourcestatus)

# CNResourceStatus (Swift)

**Framework:** Cinematic  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

## Declaration

```swift
enum CNResourceStatus
```

## Topics

### Enumeration Cases

- [CNResourceStatus.needsDownloading](cnresourcestatus/needsdownloading.md): Configuration is supported but requires download of resources
- [CNResourceStatus.ready](cnresourcestatus/ready.md): Configuration is supported
- [CNResourceStatus.unsupportedAsset](cnresourcestatus/unsupportedasset.md): The given asset is unsupported on the current build
- [CNResourceStatus.unsupportedDevice](cnresourcestatus/unsupporteddevice.md): The device lacks hardware capabilities for the given configuration

### Initializers

- [init(rawValue:)](cnresourcestatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CNResourceStatus (Objective-C)

**Framework:** Cinematic  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

## Declaration

```objectivec
enum CNResourceStatus : NSInteger;
```

## Topics

### Enumeration Cases

- [CNResourceStatusNeedsDownloading](cnresourcestatus/needsdownloading.md): Configuration is supported but requires download of resources
- [CNResourceStatusReady](cnresourcestatus/ready.md): Configuration is supported
- [CNResourceStatusUnsupportedAsset](cnresourcestatus/unsupportedasset.md): The given asset is unsupported on the current build
- [CNResourceStatusUnsupportedDevice](cnresourcestatus/unsupporteddevice.md): The device lacks hardware capabilities for the given configuration
