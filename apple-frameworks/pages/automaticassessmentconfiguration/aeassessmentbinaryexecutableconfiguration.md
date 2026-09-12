> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentbinaryexecutableconfiguration](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentbinaryexecutableconfiguration)

# AEAssessmentBinaryExecutableConfiguration (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Class  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

The configuration applied to an [AEAssessmentBinaryExecutable](aeassessmentbinaryexecutable.md) participant.

## Declaration

```swift
class AEAssessmentBinaryExecutableConfiguration
```

<a id="overview"></a>

## Overview

A non-bundled executable (such as a launchd daemon) is headless, so it supports only the subset of participant policies that apply to a process without UI: network access and whether the assessment requires it. The UI-oriented policies of [AEAssessmentParticipantConfiguration](aeassessmentparticipantconfiguration.md) (allowed menu items, graceful termination) do not apply.

> **See Also**

> [AEAssessmentBinaryExecutable](aeassessmentbinaryexecutable.md), [AEAssessmentParticipantConfiguration](aeassessmentparticipantconfiguration.md).

## Topics

### Initializers

- [init()](aeassessmentbinaryexecutableconfiguration/init%28%29.md)

### Instance Properties

- [allowsNetworkAccess](aeassessmentbinaryexecutableconfiguration/allowsnetworkaccess.md): Whether the executable may access the network during an assessment. Defaults to `YES`.
- [isRequired](aeassessmentbinaryexecutableconfiguration/isrequired.md): Whether the assessment requires this executable. Defaults to `NO`.

### Type Methods

- [new()](aeassessmentbinaryexecutableconfiguration/new%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# AEAssessmentBinaryExecutableConfiguration (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Class  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

The configuration applied to an [AEAssessmentBinaryExecutable](aeassessmentbinaryexecutable.md) participant.

## Declaration

```objectivec
@interface AEAssessmentBinaryExecutableConfiguration : NSObject
```

<a id="overview"></a>

## Overview

A non-bundled executable (such as a launchd daemon) is headless, so it supports only the subset of participant policies that apply to a process without UI: network access and whether the assessment requires it. The UI-oriented policies of [AEAssessmentParticipantConfiguration](aeassessmentparticipantconfiguration.md) (allowed menu items, graceful termination) do not apply.

> **See Also**

> [AEAssessmentBinaryExecutable](aeassessmentbinaryexecutable.md), [AEAssessmentParticipantConfiguration](aeassessmentparticipantconfiguration.md).

## Topics

### Instance Properties

- [allowsNetworkAccess](aeassessmentbinaryexecutableconfiguration/allowsnetworkaccess.md): Whether the executable may access the network during an assessment. Defaults to `YES`.
- [required](aeassessmentbinaryexecutableconfiguration/isrequired.md): Whether the assessment requires this executable. Defaults to `NO`.

### Instance Methods

- [init](aeassessmentbinaryexecutableconfiguration/init%28%29.md)

### Type Methods

- [new](aeassessmentbinaryexecutableconfiguration/new%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
