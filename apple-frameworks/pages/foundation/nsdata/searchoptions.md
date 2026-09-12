> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/searchoptions](https://developer.apple.com/documentation/foundation/nsdata/searchoptions)

# NSData.SearchOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for method used to search data objects.

## Declaration

```swift
struct SearchOptions
```

<a id="overview"></a>

## Overview

These options are used with the [range(of:options:in:)](range%28of_options_in_%29.md) method.

## Topics

### Initializers

- [init(rawValue:)](searchoptions/init%28rawvalue_%29.md)

### Constants

- [backwards](searchoptions/backwards.md): Search from the end of the data object.
- [anchored](searchoptions/anchored.md): Search is limited to start (or end, if searching backwards) of the data object.

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

## See Also

### Finding Data

- [subdata(with:)](subdata%28with_%29.md): Returns a new data object containing the data object’s bytes that fall within the limits specified by a given range.
- [range(of:options:in:)](range%28of_options_in_%29.md): Finds and returns the range of the first occurrence of the given data, within the given range, subject to given options.

# NSDataSearchOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for method used to search data objects.

## Declaration

```objectivec
enum NSDataSearchOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

These options are used with the [rangeOfData:options:range:](range%28of_options_in_%29.md) method.

## Topics

### Constants

- [NSDataSearchBackwards](searchoptions/backwards.md): Search from the end of the data object.
- [NSDataSearchAnchored](searchoptions/anchored.md): Search is limited to start (or end, if searching backwards) of the data object.

## See Also

### Finding Data

- [subdataWithRange:](subdata%28with_%29.md): Returns a new data object containing the data object’s bytes that fall within the limits specified by a given range.
- [rangeOfData:options:range:](range%28of_options_in_%29.md): Finds and returns the range of the first occurrence of the given data, within the given range, subject to given options.
