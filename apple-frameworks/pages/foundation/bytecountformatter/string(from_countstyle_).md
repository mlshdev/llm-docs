> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bytecountformatter/string(from:countstyle:)](https://developer.apple.com/documentation/foundation/bytecountformatter/string(from:countstyle:))

# string(from:countStyle:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Formats the value of the given measurement using the given `countStyle`.

## Declaration

```swift
class func string(from measurement: Measurement<UnitInformationStorage>, countStyle: ByteCountFormatter.CountStyle) -> String
```

<a id="discussion"></a>

## Discussion

Throws an exception if the given measurement’s unit does not belong to the `NSUnitInformationStorage` dimension.

# stringFromMeasurement:countStyle: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Formats the value of the given measurement using the given `countStyle`.

## Declaration

```objectivec
+ (NSString *) stringFromMeasurement:(NSMeasurement<NSUnitInformationStorage *> *) measurement countStyle:(NSByteCountFormatterCountStyle) countStyle;
```

<a id="discussion"></a>

## Discussion

Throws an exception if the given measurement’s unit does not belong to the `NSUnitInformationStorage` dimension.
