> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mefileinfo/fragmentsstatus-swift.enum](https://developer.apple.com/documentation/mediaextension/mefileinfo/fragmentsstatus-swift.enum)

# MEFileInfo.FragmentsStatus (Swift)

**Framework:** MediaExtension  
**Kind:** Enumeration  
**Availability:** macOS 14.0+

An enumeration that describes if a media asset contains or supports fragments.

## Declaration

```swift
enum FragmentsStatus
```

<a id="overview"></a>

## Overview

For QuickTime movie and ISO files, it indicates the presence of an `mvex` box, which is necessary to signal the possible presence of later `moof` boxes.

## Topics

### File fragment status values

- [MEFileInfo.FragmentsStatus.couldNotContainFragments](fragmentsstatus-swift.enum/couldnotcontainfragments.md): The file isn’t extendable by fragments.
- [MEFileInfo.FragmentsStatus.containsFragments](fragmentsstatus-swift.enum/containsfragments.md): The file is extendable by fragments and contains at least one fragment.
- [MEFileInfo.FragmentsStatus.couldContainButDoesNotContainFragments](fragmentsstatus-swift.enum/couldcontainbutdoesnotcontainfragments.md): The file is extendable by fragments, but doesn’t contain any fragments.
- [MEFileInfo.FragmentsStatus.couldNotContainFragments](fragmentsstatus-swift.enum/couldnotcontainfragments.md): The file isn’t extendable by fragments.
- [MEFileInfo.FragmentsStatus.containsFragments](fragmentsstatus-swift.enum/containsfragments.md): The file is extendable by fragments and contains at least one fragment.
- [MEFileInfo.FragmentsStatus.couldContainButDoesNotContainFragments](fragmentsstatus-swift.enum/couldcontainbutdoesnotcontainfragments.md): The file is extendable by fragments, but doesn’t contain any fragments.

### Initializers

- [init(rawValue:)](fragmentsstatus-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting file properties

- [duration](duration.md): The duration of the media asset, if available.
- [fragmentsStatus](fragmentsstatus-swift.property.md): Indicates if the media asset contains fragments or is extendable by fragments.

# MEFileInfoFragmentsStatus (Objective-C)

**Framework:** MediaExtension  
**Kind:** Enumeration  
**Availability:** macOS 14.0+

An enumeration that describes if a media asset contains or supports fragments.

## Declaration

```objectivec
enum MEFileInfoFragmentsStatus : NSInteger;
```

<a id="overview"></a>

## Overview

For QuickTime movie and ISO files, it indicates the presence of an `mvex` box, which is necessary to signal the possible presence of later `moof` boxes.

## Topics

### File fragment status values

- [MEFileInfoCouldNotContainFragments](fragmentsstatus-swift.enum/couldnotcontainfragments.md): The file isn’t extendable by fragments.
- [MEFileInfoContainsFragments](fragmentsstatus-swift.enum/containsfragments.md): The file is extendable by fragments and contains at least one fragment.
- [MEFileInfoCouldContainButDoesNotContainFragments](fragmentsstatus-swift.enum/couldcontainbutdoesnotcontainfragments.md): The file is extendable by fragments, but doesn’t contain any fragments.
- [MEFileInfoCouldNotContainFragments](fragmentsstatus-swift.enum/couldnotcontainfragments.md): The file isn’t extendable by fragments.
- [MEFileInfoContainsFragments](fragmentsstatus-swift.enum/containsfragments.md): The file is extendable by fragments and contains at least one fragment.
- [MEFileInfoCouldContainButDoesNotContainFragments](fragmentsstatus-swift.enum/couldcontainbutdoesnotcontainfragments.md): The file is extendable by fragments, but doesn’t contain any fragments.

## See Also

### Inspecting file properties

- [duration](duration.md): The duration of the media asset, if available.
- [fragmentsStatus](fragmentsstatus-swift.property.md): Indicates if the media asset contains fragments or is extendable by fragments.
