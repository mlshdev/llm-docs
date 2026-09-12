> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtime/invalid](https://developer.apple.com/documentation/coremedia/cmtime/invalid)

# invalid (Swift)

**Framework:** Core Media  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A value that represents an invalid time.

## Declaration

```swift
static let invalid: CMTime
```

<a id="Discussion"></a>

## Discussion

An invalid time has all of its fields set to `0`.

Don’t test a time against this constant using (time == [invalid](invalid.md)) because there are many times that are also invalid. Use [CMTIME_IS_INVALID(\_:)](../cmtime_is_invalid%28__%29.md) instead.

## See Also

### Constants

- [zero](zero.md): A value that represents time zero.
- [indefinite](indefinite.md): A value that represents an indefinite time.
- [negativeInfinity](negativeinfinity.md): A value that represents negative infinity.
- [positiveInfinity](positiveinfinity.md): A value that represents positive infinity.

# kCMTimeInvalid (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A value that represents an invalid time.

## Declaration

```objectivec
extern const CMTime kCMTimeInvalid;
```

<a id="Discussion"></a>

## Discussion

An invalid time has all of its fields set to `0`.

Don’t test a time against this constant using (time == [kCMTimeInvalid](invalid.md)) because there are many times that are also invalid. Use [CMTIME_IS_INVALID(\_:)](../cmtime_is_invalid%28__%29.md) instead.

## See Also

### Constants

- [kCMTimeZero](zero.md): A value that represents time zero.
- [kCMTimeIndefinite](indefinite.md): A value that represents an indefinite time.
- [kCMTimeNegativeInfinity](negativeinfinity.md): A value that represents negative infinity.
- [kCMTimePositiveInfinity](positiveinfinity.md): A value that represents positive infinity.
