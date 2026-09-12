> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostobjectdataoptions](https://developer.apple.com/documentation/iousbhost/iousbhostobjectdataoptions)

# IOUSBHostObjectDataOptions (Swift)

**Framework:** IOUSBHost  
**Kind:** Structure  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```swift
struct IOUSBHostObjectDataOptions
```

<a id="overview"></a>

## Overview

Options for dataWithCapacity:options:error

```
         task as well as the kernel.  This option is recommended when allocating isochronous frame lists.
```

## Topics

### Initializers

- [init(rawValue:)](iousbhostobjectdataoptions/init%28rawvalue_%29.md)

### Type Properties

- [kernelUserShared](iousbhostobjectdataoptions/kernelusershared.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# IOUSBHostObjectDataOptions (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
enum IOUSBHostObjectDataOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

Options for dataWithCapacity:options:error

```
         task as well as the kernel.  This option is recommended when allocating isochronous frame lists.
```

## Topics

### Enumeration Cases

- [IOUSBHostObjectDataOptionsNone](iousbhostobjectdataoptions/iousbhostobjectdataoptionsnone.md)
- [IOUSBHostObjectDataOptionsKernelUserShared](iousbhostobjectdataoptions/kernelusershared.md)
