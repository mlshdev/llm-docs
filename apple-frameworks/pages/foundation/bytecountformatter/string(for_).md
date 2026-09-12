> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bytecountformatter/string(for:)](https://developer.apple.com/documentation/foundation/bytecountformatter/string(for:))

# string(for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Formats `obj` as a byte count (if `obj` is an `NSNumber`) or specific byte measurement (if `obj` is an `NSMeasurement`) using the receiver’s settings.

## Declaration

```swift
func string(for obj: Any?) -> String?
```

<a id="discussion"></a>

## Discussion

Returns `nil` if `obj` is not of the correct class (`NSNumber` or `NSMeasurement`). Throws an exception if `obj` is an `NSMeasurement` whose unit does not belong to the `NSUnitInformationStorage` dimension.

# stringForObjectValue: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Formats `obj` as a byte count (if `obj` is an `NSNumber`) or specific byte measurement (if `obj` is an `NSMeasurement`) using the receiver’s settings.

## Declaration

```objectivec
- (NSString *) stringForObjectValue:(id) obj;
```

<a id="discussion"></a>

## Discussion

Returns `nil` if `obj` is not of the correct class (`NSNumber` or `NSMeasurement`). Throws an exception if `obj` is an `NSMeasurement` whose unit does not belong to the `NSUnitInformationStorage` dimension.
