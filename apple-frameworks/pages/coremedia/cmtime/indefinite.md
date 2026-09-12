> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtime/indefinite](https://developer.apple.com/documentation/coremedia/cmtime/indefinite)

# indefinite (Swift)

**Framework:** Core Media  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A value that represents an indefinite time.

## Declaration

```swift
static let indefinite: CMTime
```

<a id="Discussion"></a>

## Discussion

Don’t test a time against this constant using (`time ==` [indefinite](indefinite.md)) because there are many that are also indefinite. Use [CMTIME_IS_INDEFINITE(\_:)](../cmtime_is_indefinite%28__%29.md) instead.

## See Also

### Constants

- [zero](zero.md): A value that represents time zero.
- [invalid](invalid.md): A value that represents an invalid time.
- [negativeInfinity](negativeinfinity.md): A value that represents negative infinity.
- [positiveInfinity](positiveinfinity.md): A value that represents positive infinity.

# kCMTimeIndefinite (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A value that represents an indefinite time.

## Declaration

```objectivec
extern const CMTime kCMTimeIndefinite;
```

<a id="Discussion"></a>

## Discussion

Don’t test a time against this constant using (`time ==` [kCMTimeIndefinite](indefinite.md)) because there are many that are also indefinite. Use [CMTIME_IS_INDEFINITE(\_:)](../cmtime_is_indefinite%28__%29.md) instead.

## See Also

### Constants

- [kCMTimeZero](zero.md): A value that represents time zero.
- [kCMTimeInvalid](invalid.md): A value that represents an invalid time.
- [kCMTimeNegativeInfinity](negativeinfinity.md): A value that represents negative infinity.
- [kCMTimePositiveInfinity](positiveinfinity.md): A value that represents positive infinity.
