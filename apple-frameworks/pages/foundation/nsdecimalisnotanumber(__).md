> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalisnotanumber(_:)](https://developer.apple.com/documentation/foundation/nsdecimalisnotanumber(_:))

# NSDecimalIsNotANumber(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean that indicates whether a given decimal contains a valid number.

## Declaration

```swift
func NSDecimalIsNotANumber(_ dcm: UnsafePointer<Decimal>) -> Bool
```

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) if the value in `dcm` represents a valid number, otherwise [true](https://developer.apple.com/documentation/swift/true).

<a id="discussion"></a>

## Discussion

For more information, see [Number and Value Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NumbersandValues/NumbersandValues.html#//apple_ref/doc/uid/10000038i).

# NSDecimalIsNotANumber (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean that indicates whether a given decimal contains a valid number.

## Declaration

```objectivec
static BOOL NSDecimalIsNotANumber(const NSDecimal *dcm);
```

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) if the value in `dcm` represents a valid number, otherwise [true](https://developer.apple.com/documentation/swift/true).

<a id="discussion"></a>

## Discussion

For more information, see [Number and Value Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NumbersandValues/NumbersandValues.html#//apple_ref/doc/uid/10000038i).
