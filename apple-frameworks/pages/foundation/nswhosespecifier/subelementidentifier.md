> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nswhosespecifier/subelementidentifier](https://developer.apple.com/documentation/foundation/nswhosespecifier/subelementidentifier)

# NSWhoseSpecifier.SubelementIdentifier (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

`NSWhoseSpecifier` uses these constants to specify sub-elements within the collection of objects being tested that pass the specifier’s test.

## Declaration

```swift
enum SubelementIdentifier
```

<a id="overview"></a>

## Overview

These constants are used by [startSubelementIdentifier](startsubelementidentifier.md), [startSubelementIdentifier](startsubelementidentifier.md), [endSubelementIdentifier](endsubelementidentifier.md), and [endSubelementIdentifier](endsubelementidentifier.md).

## Topics

### Constants

- [NSWhoseSpecifier.SubelementIdentifier.indexSubelement](subelementidentifier/indexsubelement.md): An element at a given index that meets the specifier test.
- [NSWhoseSpecifier.SubelementIdentifier.everySubelement](subelementidentifier/everysubelement.md): Every element that meets the specifier test.
- [NSWhoseSpecifier.SubelementIdentifier.middleSubelement](subelementidentifier/middlesubelement.md): The middle element that meets the specifier test.
- [NSWhoseSpecifier.SubelementIdentifier.randomSubelement](subelementidentifier/randomsubelement.md): Any element that meets the specifier test.
- [NSWhoseSpecifier.SubelementIdentifier.noSubelement](subelementidentifier/nosubelement.md): No sub-element met the specifier test. Valid only for specifying the end sub-element.; that is, there is no end, so consider all elements.

### Initializers

- [init(rawValue:)](subelementidentifier/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSWhoseSubelementIdentifier (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

`NSWhoseSpecifier` uses these constants to specify sub-elements within the collection of objects being tested that pass the specifier’s test.

## Declaration

```objectivec
enum NSWhoseSubelementIdentifier : NSUInteger;
```

<a id="overview"></a>

## Overview

These constants are used by [startSubelementIdentifier](startsubelementidentifier.md), [startSubelementIdentifier](startsubelementidentifier.md), [endSubelementIdentifier](endsubelementidentifier.md), and [endSubelementIdentifier](endsubelementidentifier.md).

## Topics

### Constants

- [NSIndexSubelement](subelementidentifier/indexsubelement.md): An element at a given index that meets the specifier test.
- [NSEverySubelement](subelementidentifier/everysubelement.md): Every element that meets the specifier test.
- [NSMiddleSubelement](subelementidentifier/middlesubelement.md): The middle element that meets the specifier test.
- [NSRandomSubelement](subelementidentifier/randomsubelement.md): Any element that meets the specifier test.
- [NSNoSubelement](subelementidentifier/nosubelement.md): No sub-element met the specifier test. Valid only for specifying the end sub-element.; that is, there is no end, so consider all elements.
