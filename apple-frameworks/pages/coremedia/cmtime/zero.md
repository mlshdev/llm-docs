> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtime/zero](https://developer.apple.com/documentation/coremedia/cmtime/zero)

# zero (Swift)

**Framework:** Core Media  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A value that represents time zero.

## Declaration

```swift
static let zero: CMTime
```

<a id="Discussion"></a>

## Discussion

Don’t test a time against this constant using (time == [zero](zero.md)) because there are many times that are also `0`. Use [CMTimeCompare(\_:\_:)](../cmtimecompare%28____%29.md) instead.

## See Also

### Constants

- [invalid](invalid.md): A value that represents an invalid time.
- [indefinite](indefinite.md): A value that represents an indefinite time.
- [negativeInfinity](negativeinfinity.md): A value that represents negative infinity.
- [positiveInfinity](positiveinfinity.md): A value that represents positive infinity.

# kCMTimeZero (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A value that represents time zero.

## Declaration

```objectivec
extern const CMTime kCMTimeZero;
```

<a id="Discussion"></a>

## Discussion

Don’t test a time against this constant using (time == [kCMTimeZero](zero.md)) because there are many times that are also `0`. Use [CMTimeCompare](../cmtimecompare%28____%29.md) instead.

## See Also

### Constants

- [kCMTimeInvalid](invalid.md): A value that represents an invalid time.
- [kCMTimeIndefinite](indefinite.md): A value that represents an indefinite time.
- [kCMTimeNegativeInfinity](negativeinfinity.md): A value that represents negative infinity.
- [kCMTimePositiveInfinity](positiveinfinity.md): A value that represents positive infinity.
