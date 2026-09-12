> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/outofrange](https://developer.apple.com/documentation/system/errno/outofrange)

# outOfRange

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Numerical result out of range.

## Declaration

```swift
static var outOfRange: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

A numerical result of the function was too large to fit in the available space; for example, because it exceeded a floating point number’s level of precision.

The corresponding C error is `ERANGE`.

## See Also

### Math Errors

- [outOfDomain](outofdomain.md): Numerical argument out of domain.
- [overflow](overflow.md): Value too large to be stored in data type.
