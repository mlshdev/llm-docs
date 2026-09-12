> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cidatamatrixcodedescriptor/eccversion-swift.enum](https://developer.apple.com/documentation/coreimage/cidatamatrixcodedescriptor/eccversion-swift.enum)

# CIDataMatrixCodeDescriptor.ECCVersion (Swift)

**Framework:** Core Image  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Constants indicating the Data Matrix code ECC version.

## Declaration

```swift
enum ECCVersion
```

<a id="overview"></a>

## Overview

ECC 000 - 140 symbols offer five levels of error correction using convolutional code error correction. Each successive level or error correction offers more protection for the message data but increases the size of the symbol required to carry a given message. See the ISO/IEC 16022:2006 spec for other modes.

ECC 200 symbols utilize Reed-Solomon error correction. The error correction capacity for any given Data Matrix symbol is fixed by the size (in rows and columns) of the symbol. See Table 7 of ISO/IEC 16022:2006(E) for more details.

## Topics

### Enumeration Cases

- [CIDataMatrixCodeDescriptor.ECCVersion.v000](eccversion-swift.enum/v000.md): Indicates error correction using convolutional code error correction with no data protection.
- [CIDataMatrixCodeDescriptor.ECCVersion.v050](eccversion-swift.enum/v050.md): Indicates 1/4 of the symbol is dedicated to convolutional code error correction.
- [CIDataMatrixCodeDescriptor.ECCVersion.v080](eccversion-swift.enum/v080.md): Indicates 1/3 of the symbol is dedicated to convolutional code error correction.
- [CIDataMatrixCodeDescriptor.ECCVersion.v100](eccversion-swift.enum/v100.md): Indicates 1/2 of the symbol is dedicated to convolutional code error correction.
- [CIDataMatrixCodeDescriptor.ECCVersion.v140](eccversion-swift.enum/v140.md): Indicates 3/4 of the symbol is dedicated to convolutional code error correction.
- [CIDataMatrixCodeDescriptor.ECCVersion.v200](eccversion-swift.enum/v200.md): Indicates error correction using Reed-Solomon error correction. Data protection overhead varies based on symbol size.

### Initializers

- [init(rawValue:)](eccversion-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CIDataMatrixCodeECCVersion (Objective-C)

**Framework:** Core Image  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Constants indicating the Data Matrix code ECC version.

## Declaration

```objectivec
enum CIDataMatrixCodeECCVersion : NSInteger;
```

<a id="overview"></a>

## Overview

ECC 000 - 140 symbols offer five levels of error correction using convolutional code error correction. Each successive level or error correction offers more protection for the message data but increases the size of the symbol required to carry a given message. See the ISO/IEC 16022:2006 spec for other modes.

ECC 200 symbols utilize Reed-Solomon error correction. The error correction capacity for any given Data Matrix symbol is fixed by the size (in rows and columns) of the symbol. See Table 7 of ISO/IEC 16022:2006(E) for more details.

## Topics

### Enumeration Cases

- [CIDataMatrixCodeECCVersion000](eccversion-swift.enum/v000.md): Indicates error correction using convolutional code error correction with no data protection.
- [CIDataMatrixCodeECCVersion050](eccversion-swift.enum/v050.md): Indicates 1/4 of the symbol is dedicated to convolutional code error correction.
- [CIDataMatrixCodeECCVersion080](eccversion-swift.enum/v080.md): Indicates 1/3 of the symbol is dedicated to convolutional code error correction.
- [CIDataMatrixCodeECCVersion100](eccversion-swift.enum/v100.md): Indicates 1/2 of the symbol is dedicated to convolutional code error correction.
- [CIDataMatrixCodeECCVersion140](eccversion-swift.enum/v140.md): Indicates 3/4 of the symbol is dedicated to convolutional code error correction.
- [CIDataMatrixCodeECCVersion200](eccversion-swift.enum/v200.md): Indicates error correction using Reed-Solomon error correction. Data protection overhead varies based on symbol size.
