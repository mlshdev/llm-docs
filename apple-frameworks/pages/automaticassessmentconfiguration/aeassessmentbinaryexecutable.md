> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentbinaryexecutable](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentbinaryexecutable)

# AEAssessmentBinaryExecutable (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Class  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A non-bundled, non-UI executable (e.g. a launchd daemon) designated as an assessment participant by its on-disk path.

## Declaration

```swift
class AEAssessmentBinaryExecutable
```

<a id="overview"></a>

## Overview

Use this for a participant that has no bundle identifier and so cannot be expressed as an [AEAssessmentApplication](aeassessmentapplication.md). It feeds only the app-launch allowlist under [allowsOnlyParticipantsToRun](aeassessmentconfiguration/allowsonlyparticipantstorun.md) and, when its configuration permits, network access; UI policies do not apply.

Matching is by exact on-disk path. At runtime the executable must also satisfy [requiresSignatureValidation](aeassessmentbinaryexecutable/requiressignaturevalidation.md) (and the team identifier, if set), so a swapped or re-signed binary is not silently trusted.

With [requiresSignatureValidation](aeassessmentbinaryexecutable/requiressignaturevalidation.md) enabled (the default), an unsigned or invalidly signed binary is treated as unavailable: a participant that isn’t [isRequired](aeassessmentbinaryexecutableconfiguration/isrequired.md) is dropped from enforcement, while a required one prevents the assessment session from beginning.

> **See Also**

> [allowsOnlyParticipantsToRun](aeassessmentconfiguration/allowsonlyparticipantstorun.md) for why the launch allowlist requires a signature, and [AEAssessmentApplication](aeassessmentapplication.md) for bundled participants.

## Topics

### Initializers

- [init(binaryExecutableURL:)](aeassessmentbinaryexecutable/init%28binaryexecutableurl_%29.md)
- [init(binaryExecutableURL:teamIdentifier:)](aeassessmentbinaryexecutable/init%28binaryexecutableurl_teamidentifier_%29.md)

### Instance Properties

- [binaryExecutableURL](aeassessmentbinaryexecutable/binaryexecutableurl.md): On-disk path of the executable.
- [requiresSignatureValidation](aeassessmentbinaryexecutable/requiressignaturevalidation.md): Whether the running executable’s code signature is validated. Defaults to `YES`.
- [teamIdentifier](aeassessmentbinaryexecutable/teamidentifier.md): Team identifier the running executable’s signature must match, or `nil` to skip the team check.

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

# AEAssessmentBinaryExecutable (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Class  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A non-bundled, non-UI executable (e.g. a launchd daemon) designated as an assessment participant by its on-disk path.

## Declaration

```objectivec
@interface AEAssessmentBinaryExecutable : NSObject
```

<a id="overview"></a>

## Overview

Use this for a participant that has no bundle identifier and so cannot be expressed as an [AEAssessmentApplication](aeassessmentapplication.md). It feeds only the app-launch allowlist under [allowsOnlyParticipantsToRun](aeassessmentconfiguration/allowsonlyparticipantstorun.md) and, when its configuration permits, network access; UI policies do not apply.

Matching is by exact on-disk path. At runtime the executable must also satisfy [requiresSignatureValidation](aeassessmentbinaryexecutable/requiressignaturevalidation.md) (and the team identifier, if set), so a swapped or re-signed binary is not silently trusted.

With [requiresSignatureValidation](aeassessmentbinaryexecutable/requiressignaturevalidation.md) enabled (the default), an unsigned or invalidly signed binary is treated as unavailable: a participant that isn’t [required](aeassessmentbinaryexecutableconfiguration/isrequired.md) is dropped from enforcement, while a required one prevents the assessment session from beginning.

> **See Also**

> [allowsOnlyParticipantsToRun](aeassessmentconfiguration/allowsonlyparticipantstorun.md) for why the launch allowlist requires a signature, and [AEAssessmentApplication](aeassessmentapplication.md) for bundled participants.

## Topics

### Instance Properties

- [binaryExecutableURL](aeassessmentbinaryexecutable/binaryexecutableurl.md): On-disk path of the executable.
- [requiresSignatureValidation](aeassessmentbinaryexecutable/requiressignaturevalidation.md): Whether the running executable’s code signature is validated. Defaults to `YES`.
- [teamIdentifier](aeassessmentbinaryexecutable/teamidentifier.md): Team identifier the running executable’s signature must match, or `nil` to skip the team check.

### Instance Methods

- [initWithBinaryExecutableURL:](aeassessmentbinaryexecutable/init%28binaryexecutableurl_%29.md)
- [initWithBinaryExecutableURL:teamIdentifier:](aeassessmentbinaryexecutable/init%28binaryexecutableurl_teamidentifier_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
