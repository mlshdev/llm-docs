> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalnumber/compare(_:)](https://developer.apple.com/documentation/foundation/nsdecimalnumber/compare(_:))

# compare(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Compares this decimal number and another.

## Declaration

```swift
func compare(_ decimalNumber: NSNumber) -> ComparisonResult
```

## Parameters

- `decimalNumber`: The number with which to compare the receiver.

  This value must not be `nil`. If this value is `nil`, the behavior is undefined and may change in future versions of macOS.

<a id="return-value"></a>

## Return Value

`NSOrderedAscending` if the value of `decimalNumber` is greater than the receiver; `NSOrderedSame` if they’re equal; and `NSOrderedDescending` if the value of `decimalNumber` is less than the receiver.

# compare: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Compares this decimal number and another.

## Declaration

```objectivec
- (NSComparisonResult) compare:(NSNumber *) decimalNumber;
```

## Parameters

- `decimalNumber`: The number with which to compare the receiver.

  This value must not be `nil`. If this value is `nil`, the behavior is undefined and may change in future versions of macOS.

<a id="return-value"></a>

## Return Value

`NSOrderedAscending` if the value of `decimalNumber` is greater than the receiver; `NSOrderedSame` if they’re equal; and `NSOrderedDescending` if the value of `decimalNumber` is less than the receiver.
