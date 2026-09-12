> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtime/positiveinfinity](https://developer.apple.com/documentation/coremedia/cmtime/positiveinfinity)

# positiveInfinity (Swift)

**Framework:** Core Media  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A value that represents positive infinity.

## Declaration

```swift
static let positiveInfinity: CMTime
```

<a id="Discussion"></a>

## Discussion

Don’t test a time against this constant using (time == [positiveInfinity](positiveinfinity.md)) because there are many times that are also positive infinity. Use [CMTIME_IS_POSITIVEINFINITY(\_:)](../cmtime_is_positiveinfinity%28__%29.md) instead.

## See Also

### Constants

- [zero](zero.md): A value that represents time zero.
- [invalid](invalid.md): A value that represents an invalid time.
- [indefinite](indefinite.md): A value that represents an indefinite time.
- [negativeInfinity](negativeinfinity.md): A value that represents negative infinity.

# kCMTimePositiveInfinity (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A value that represents positive infinity.

## Declaration

```objectivec
extern const CMTime kCMTimePositiveInfinity;
```

<a id="Discussion"></a>

## Discussion

Don’t test a time against this constant using (time == [kCMTimePositiveInfinity](positiveinfinity.md)) because there are many times that are also positive infinity. Use [CMTIME_IS_POSITIVEINFINITY(\_:)](../cmtime_is_positiveinfinity%28__%29.md) instead.

## See Also

### Constants

- [kCMTimeZero](zero.md): A value that represents time zero.
- [kCMTimeInvalid](invalid.md): A value that represents an invalid time.
- [kCMTimeIndefinite](indefinite.md): A value that represents an indefinite time.
- [kCMTimeNegativeInfinity](negativeinfinity.md): A value that represents negative infinity.
