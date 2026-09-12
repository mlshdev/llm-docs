> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/outofdomain](https://developer.apple.com/documentation/system/errno/outofdomain)

# outOfDomain

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Numerical argument out of domain.

## Declaration

```swift
static var outOfDomain: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

A numerical input argument was outside the defined domain of the mathematical function.

The corresponding C error is `EDOM`.

## See Also

### Math Errors

- [outOfRange](outofrange.md): Numerical result out of range.
- [overflow](overflow.md): Value too large to be stored in data type.
