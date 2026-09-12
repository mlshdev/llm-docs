> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secrequirementtype](https://developer.apple.com/documentation/security/secrequirementtype)

# SecRequirementType (Swift)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An enumeration indicating different types of internal requirements for code.

## Declaration

```swift
enum SecRequirementType
```

<a id="overview"></a>

## Overview

These constants are indexes into requirement sets and are not currently used in any public API.

## Topics

### Constants

- [SecRequirementType.hostRequirementType](secrequirementtype/hostrequirementtype.md): What hosts may run this code.
- [SecRequirementType.guestRequirementType](secrequirementtype/guestrequirementtype.md): What guests this code may run.
- [SecRequirementType.designatedRequirementType](secrequirementtype/designatedrequirementtype.md): A designated requirement.
- [SecRequirementType.libraryRequirementType](secrequirementtype/libraryrequirementtype.md): What libraries this code may link against.
- [SecRequirementType.pluginRequirementType](secrequirementtype/pluginrequirementtype.md): What plug-ins this code may load.
- [SecRequirementType.invalidRequirementType](secrequirementtype/invalidrequirementtype.md): Invalid type of requirement.
- [requirementTypeCount](secrequirementtype/requirementtypecount.md): The number of valid requirement types.

### Initializers

- [init(rawValue:)](secrequirementtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SecRequirementType (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An enumeration indicating different types of internal requirements for code.

## Declaration

```objectivec
enum SecRequirementType : uint32_t;
```

<a id="overview"></a>

## Overview

These constants are indexes into requirement sets and are not currently used in any public API.

## Topics

### Constants

- [kSecHostRequirementType](secrequirementtype/hostrequirementtype.md): What hosts may run this code.
- [kSecGuestRequirementType](secrequirementtype/guestrequirementtype.md): What guests this code may run.
- [kSecDesignatedRequirementType](secrequirementtype/designatedrequirementtype.md): A designated requirement.
- [kSecLibraryRequirementType](secrequirementtype/libraryrequirementtype.md): What libraries this code may link against.
- [kSecPluginRequirementType](secrequirementtype/pluginrequirementtype.md): What plug-ins this code may load.
- [kSecInvalidRequirementType](secrequirementtype/invalidrequirementtype.md): Invalid type of requirement.
- [kSecRequirementTypeCount](secrequirementtype/requirementtypecount.md): The number of valid requirement types.
