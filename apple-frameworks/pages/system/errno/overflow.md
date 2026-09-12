> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/overflow](https://developer.apple.com/documentation/system/errno/overflow)

# overflow

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Value too large to be stored in data type.

## Declaration

```swift
static var overflow: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

A numerical result of the function is too large to be stored in the space that the caller provided.

The corresponding C error is `EOVERFLOW`.

## See Also

### Math Errors

- [outOfDomain](outofdomain.md): Numerical argument out of domain.
- [outOfRange](outofrange.md): Numerical result out of range.
