> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrangemake(_:_:)](https://developer.apple.com/documentation/corefoundation/cfrangemake(_:_:))

# CFRangeMake(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Declares and initializes a `CFRange` structure.

## Declaration

```swift
func CFRangeMake(_ loc: CFIndex, _ len: CFIndex) -> CFRange
```

## Parameters

- `loc`: The starting location of the range.
- `len`: The length of the range.

<a id="return-value"></a>

## Return Value

An initialized structure of type [CFRange](cfrange.md).

<a id="Discussion"></a>

## Discussion

This is an in-line convenience function for creating initialized [CFRange](cfrange.md) structures.

# CFRangeMake (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Declares and initializes a `CFRange` structure.

## Declaration

```objectivec
static CFRange CFRangeMake(CFIndex loc, CFIndex len);
```

## Parameters

- `loc`: The starting location of the range.
- `len`: The length of the range.

<a id="return-value"></a>

## Return Value

An initialized structure of type [CFRange](cfrange.md).

<a id="Discussion"></a>

## Discussion

This is an in-line convenience function for creating initialized [CFRange](cfrange.md) structures.
