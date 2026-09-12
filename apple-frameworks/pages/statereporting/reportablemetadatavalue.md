> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/statereporting/reportablemetadatavalue](https://developer.apple.com/documentation/statereporting/reportablemetadatavalue)

# ReportableMetadataValue

**Framework:** StateReporting  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A value in a reportable-metadata dictionary.

## Declaration

```swift
enum ReportableMetadataValue
```

<a id="overview"></a>

## Overview

Strings, numbers, and dates all initialize directly. The [ReportableMetadata()](reportablemetadata%28%29.md) macro constructs these automatically when you annotate your metadata type.

```swift
let values: [String: ReportableMetadataValue] = [
    "username": ReportableMetadataValue("alice"),
    "loginCount": ReportableMetadataValue(42),
    "lastLogin": ReportableMetadataValue(Date()),
    "score": ReportableMetadataValue(98.6)
]
```

## Topics

### Enumeration Cases

- [ReportableMetadataValue.date(\_:)](reportablemetadatavalue/date%28__%29.md)
- [ReportableMetadataValue.floatingPoint(\_:)](reportablemetadatavalue/floatingpoint%28__%29.md)
- [ReportableMetadataValue.integer(\_:)](reportablemetadatavalue/integer%28__%29.md)
- [ReportableMetadataValue.string(\_:)](reportablemetadatavalue/string%28__%29.md)

### Initializers

- [init(\_:)](reportablemetadatavalue/init%28__%29-14guo.md)
- [init(\_:)](reportablemetadatavalue/init%28__%29-1ahz9.md)
- [init(\_:)](reportablemetadatavalue/init%28__%29-2f79p.md)
- [init(\_:)](reportablemetadatavalue/init%28__%29-2h2re.md)
- [init(\_:)](reportablemetadatavalue/init%28__%29-2llwr.md)
- [init(\_:)](reportablemetadatavalue/init%28__%29-5y574.md)
- [init(\_:)](reportablemetadatavalue/init%28__%29-5yq8x.md)
- [init(\_:)](reportablemetadatavalue/init%28__%29-6kkn5.md)
- [init(\_:)](reportablemetadatavalue/init%28__%29-6r11y.md)
- [init(\_:)](reportablemetadatavalue/init%28__%29-6z809.md)
- [init(\_:)](reportablemetadatavalue/init%28__%29-85rvl.md)
- [init(\_:)](reportablemetadatavalue/init%28__%29-90tzm.md)
- [init(\_:)](reportablemetadatavalue/init%28__%29-9dt4i.md)
- [init(\_:)](reportablemetadatavalue/init%28__%29-pijp.md)
- [init(\_:)](reportablemetadatavalue/init%28__%29-tnel.md)
- [init(\_:)](reportablemetadatavalue/init%28__%29-zkel.md)

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining metadata

- [ReportableMetadata](reportablemetadata.md): A protocol for types that can supply their metadata as a dictionary of reportable values.
