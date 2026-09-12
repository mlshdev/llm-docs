> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnumbercompare(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfnumbercompare(_:_:_:))

# CFNumberCompare(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Compares two CFNumber objects and returns a comparison result.

## Declaration

```swift
func CFNumberCompare(_ number: CFNumber!, _ otherNumber: CFNumber!, _ context: UnsafeMutableRawPointer!) -> CFComparisonResult
```

## Parameters

- `number`: The first CFNumber object to compare.
- `otherNumber`: The second CFNumber object to compare.
- `context`: Pass `NULL`.

<a id="return-value"></a>

## Return Value

A [CFComparisonResult](cfcomparisonresult.md) constant that indicates whether `number` is equal to, less than, or greater than `otherNumber`.

<a id="Discussion"></a>

## Discussion

When comparing two CFNumber objects using this function, one or both objects can represent a special-case number such as signed 0, signed infinity, or NaN.

The following rules apply:

- Negative 0 compares less than positive 0.
- Positive infinity compares greater than everything except itself, to which it compares equal.
- Negative infinity compares less than everything except itself, to which it compares equal.
- If both numbers are NaN, then they compare equal.
- If only one of the numbers is NaN, then the NaN compares greater than the other number if it is negative, and smaller than the other number if it is positive.

# CFNumberCompare (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Compares two CFNumber objects and returns a comparison result.

## Declaration

```objectivec
extern CFComparisonResult CFNumberCompare(CFNumberRef number, CFNumberRef otherNumber, void *context);
```

## Parameters

- `number`: The first CFNumber object to compare.
- `otherNumber`: The second CFNumber object to compare.
- `context`: Pass `NULL`.

<a id="return-value"></a>

## Return Value

A [CFComparisonResult](cfcomparisonresult.md) constant that indicates whether `number` is equal to, less than, or greater than `otherNumber`.

<a id="Discussion"></a>

## Discussion

When comparing two CFNumber objects using this function, one or both objects can represent a special-case number such as signed 0, signed infinity, or NaN.

The following rules apply:

- Negative 0 compares less than positive 0.
- Positive infinity compares greater than everything except itself, to which it compares equal.
- Negative infinity compares less than everything except itself, to which it compares equal.
- If both numbers are NaN, then they compare equal.
- If only one of the numbers is NaN, then the NaN compares greater than the other number if it is negative, and smaller than the other number if it is positive.
