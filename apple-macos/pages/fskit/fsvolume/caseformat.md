> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/caseformat](https://developer.apple.com/documentation/fskit/fsvolume/caseformat)

# FSVolume.CaseFormat (Swift)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

An enumeration of case-sensitivity support types.

## Declaration

```swift
enum CaseFormat
```

<a id="overview"></a>

## Overview

A case-sensitive volume is a volume that treats upper and lower case characters in file and directory names as being distinct from each other. For example, `FILE.TXT` and `file.TXT` are different names in a case-sensitive volume, and the same name in a case-insensitive volume.

## Topics

### Declaring case formats

- [FSVolume.CaseFormat.sensitive](caseformat/sensitive.md): The volume is case sensitive.
- [FSVolume.CaseFormat.insensitive](caseformat/insensitive.md): The volume isn’t case sensitive.
- [FSVolume.CaseFormat.insensitiveCasePreserving](caseformat/insensitivecasepreserving.md): The volume isn’t case sensitive, but supports preserving the case of file and directory names.

### Initializers

- [init(rawValue:)](caseformat/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with case sensitivity

- [caseFormat](supportedcapabilities/caseformat.md): A value that indicates the volume’s support for case sensitivity.

# FSVolumeCaseFormat (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

An enumeration of case-sensitivity support types.

## Declaration

```objectivec
enum FSVolumeCaseFormat : NSInteger;
```

<a id="overview"></a>

## Overview

A case-sensitive volume is a volume that treats upper and lower case characters in file and directory names as being distinct from each other. For example, `FILE.TXT` and `file.TXT` are different names in a case-sensitive volume, and the same name in a case-insensitive volume.

## Topics

### Declaring case formats

- [FSVolumeCaseFormatSensitive](caseformat/sensitive.md): The volume is case sensitive.
- [FSVolumeCaseFormatInsensitive](caseformat/insensitive.md): The volume isn’t case sensitive.
- [FSVolumeCaseFormatInsensitiveCasePreserving](caseformat/insensitivecasepreserving.md): The volume isn’t case sensitive, but supports preserving the case of file and directory names.

## See Also

### Working with case sensitivity

- [caseFormat](supportedcapabilities/caseformat.md): A value that indicates the volume’s support for case sensitivity.
