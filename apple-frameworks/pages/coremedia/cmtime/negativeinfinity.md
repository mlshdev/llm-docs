> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtime/negativeinfinity](https://developer.apple.com/documentation/coremedia/cmtime/negativeinfinity)

# negativeInfinity (Swift)

**Framework:** Core Media  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A value that represents negative infinity.

## Declaration

```swift
static let negativeInfinity: CMTime
```

<a id="Discussion"></a>

## Discussion

Don’t test a time against this constant using (time == [negativeInfinity](negativeinfinity.md)) because there are many times that are also negative infinity. Use [CMTIME_IS_NEGATIVEINFINITY(\_:)](../cmtime_is_negativeinfinity%28__%29.md) instead.

## See Also

### Constants

- [zero](zero.md): A value that represents time zero.
- [invalid](invalid.md): A value that represents an invalid time.
- [indefinite](indefinite.md): A value that represents an indefinite time.
- [positiveInfinity](positiveinfinity.md): A value that represents positive infinity.

# kCMTimeNegativeInfinity (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A value that represents negative infinity.

## Declaration

```objectivec
extern const CMTime kCMTimeNegativeInfinity;
```

<a id="Discussion"></a>

## Discussion

Don’t test a time against this constant using (time == [kCMTimeNegativeInfinity](negativeinfinity.md)) because there are many times that are also negative infinity. Use [CMTIME_IS_NEGATIVEINFINITY(\_:)](../cmtime_is_negativeinfinity%28__%29.md) instead.

## See Also

### Constants

- [kCMTimeZero](zero.md): A value that represents time zero.
- [kCMTimeInvalid](invalid.md): A value that represents an invalid time.
- [kCMTimeIndefinite](indefinite.md): A value that represents an indefinite time.
- [kCMTimePositiveInfinity](positiveinfinity.md): A value that represents positive infinity.
