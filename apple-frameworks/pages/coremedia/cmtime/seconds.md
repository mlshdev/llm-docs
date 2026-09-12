> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtime/seconds](https://developer.apple.com/documentation/coremedia/cmtime/seconds)

# seconds

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A representation of the time in seconds.

## Declaration

```swift
var seconds: Double { get }
```

<a id="Discussion"></a>

## Discussion

If the time is [invalid](../cmsampletiminginfo/invalid.md) or [indefinite](../cmtimeflags/indefinite.md), the value equals [nan](https://developer.apple.com/documentation/swift/double/nan).

## See Also

### Inspecting a Time

- [hasBeenRounded](hasbeenrounded.md): A Boolean value that indicates whether the system rounded the time.
- [isValid](isvalid.md): A Boolean value that indicates whether a time is valid.
- [isNumeric](isnumeric.md): A Boolean value that indicates whether a time is numeric.
- [isIndefinite](isindefinite.md): A Boolean value that indicates whether a time is indefinite.
- [isPositiveInfinity](ispositiveinfinity.md): A Boolean value that indicates whether a time represents positive infinity.
- [isNegativeInfinity](isnegativeinfinity.md): A Boolean value that indicates whether a time represents negative infinity.
