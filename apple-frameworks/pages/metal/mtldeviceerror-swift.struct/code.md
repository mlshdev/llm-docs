> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldeviceerror-swift.struct/code](https://developer.apple.com/documentation/metal/mtldeviceerror-swift.struct/code)

# MTLDeviceError.Code (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+

Enumeration of kinds of errors that methods on MTLDevice can produce.

## Declaration

```swift
enum Code
```

## Topics

### Enumeration Cases

- [MTLDeviceError.Code.none](code/none.md): Indicates the absence of any problems.
- [MTLDeviceError.Code.notSupported](code/notsupported.md): Indicates the requested feature is not supported by the current device.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MTLDeviceError (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+

Enumeration of kinds of errors that methods on MTLDevice can produce.

## Declaration

```objectivec
enum MTLDeviceError : NSInteger;
```

## Topics

### Enumeration Cases

- [MTLDeviceErrorNone](code/none.md): Indicates the absence of any problems.
- [MTLDeviceErrorNotSupported](code/notsupported.md): Indicates the requested feature is not supported by the current device.
