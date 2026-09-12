> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdategetabsolutetime(_:)](https://developer.apple.com/documentation/corefoundation/cfdategetabsolutetime(_:))

# CFDateGetAbsoluteTime(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a `CFDate` object’s absolute time.

## Declaration

```swift
func CFDateGetAbsoluteTime(_ theDate: CFDate!) -> CFAbsoluteTime
```

## Parameters

- `theDate`: The date to examine.

<a id="return-value"></a>

## Return Value

The absolute time of `theDate`.

<a id="Discussion"></a>

## Discussion

Absolute time is measured in seconds relative to the absolute reference date of Jan 1 2001 00:00:00 GMT. A positive value represents a date after the reference date, a negative value represents a date before it. For example, the absolute time -32940326 is equivalent to December 16th, 1999 at 17:54:34.

## See Also

### CFDate Miscellaneous Functions

- [CFDateCompare(\_:\_:\_:)](cfdatecompare%28______%29.md): Compares two `CFDate` objects and returns a comparison result.
- [CFDateCreate(\_:\_:)](cfdatecreate%28____%29.md): Creates a `CFDate` object given an absolute time.
- [CFDateGetTimeIntervalSinceDate(\_:\_:)](cfdategettimeintervalsincedate%28____%29.md): Returns the number of elapsed seconds between the given `CFDate` objects.
- [CFDateGetTypeID()](cfdategettypeid%28%29.md): Returns the type identifier for the `CFDate` opaque type.

# CFDateGetAbsoluteTime (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a `CFDate` object’s absolute time.

## Declaration

```objectivec
extern CFAbsoluteTime CFDateGetAbsoluteTime(CFDateRef theDate);
```

## Parameters

- `theDate`: The date to examine.

<a id="return-value"></a>

## Return Value

The absolute time of `theDate`.

<a id="Discussion"></a>

## Discussion

Absolute time is measured in seconds relative to the absolute reference date of Jan 1 2001 00:00:00 GMT. A positive value represents a date after the reference date, a negative value represents a date before it. For example, the absolute time -32940326 is equivalent to December 16th, 1999 at 17:54:34.

## See Also

### CFDate Miscellaneous Functions

- [CFDateCompare](cfdatecompare%28______%29.md): Compares two `CFDate` objects and returns a comparison result.
- [CFDateCreate](cfdatecreate%28____%29.md): Creates a `CFDate` object given an absolute time.
- [CFDateGetTimeIntervalSinceDate](cfdategettimeintervalsincedate%28____%29.md): Returns the number of elapsed seconds between the given `CFDate` objects.
- [CFDateGetTypeID](cfdategettypeid%28%29.md): Returns the type identifier for the `CFDate` opaque type.
