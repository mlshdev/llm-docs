> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdatecompare(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfdatecompare(_:_:_:))

# CFDateCompare(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Compares two `CFDate` objects and returns a comparison result.

## Declaration

```swift
func CFDateCompare(_ theDate: CFDate!, _ otherDate: CFDate!, _ context: UnsafeMutableRawPointer!) -> CFComparisonResult
```

## Parameters

- `theDate`: The date to compare to `otherDate`.
- `otherDate`: The date to compare to `theDate`.
- `context`: Unused. Pass `NULL`.

<a id="return-value"></a>

## Return Value

A [CFComparisonResult](cfcomparisonresult.md) value that indicates whether `theDate` is equal to, less than, or greater than `otherDate`.

## See Also

### CFDate Miscellaneous Functions

- [CFDateCreate(\_:\_:)](cfdatecreate%28____%29.md): Creates a `CFDate` object given an absolute time.
- [CFDateGetAbsoluteTime(\_:)](cfdategetabsolutetime%28__%29.md): Returns a `CFDate` object’s absolute time.
- [CFDateGetTimeIntervalSinceDate(\_:\_:)](cfdategettimeintervalsincedate%28____%29.md): Returns the number of elapsed seconds between the given `CFDate` objects.
- [CFDateGetTypeID()](cfdategettypeid%28%29.md): Returns the type identifier for the `CFDate` opaque type.

# CFDateCompare (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Compares two `CFDate` objects and returns a comparison result.

## Declaration

```objectivec
extern CFComparisonResult CFDateCompare(CFDateRef theDate, CFDateRef otherDate, void *context);
```

## Parameters

- `theDate`: The date to compare to `otherDate`.
- `otherDate`: The date to compare to `theDate`.
- `context`: Unused. Pass `NULL`.

<a id="return-value"></a>

## Return Value

A [CFComparisonResult](cfcomparisonresult.md) value that indicates whether `theDate` is equal to, less than, or greater than `otherDate`.

## See Also

### CFDate Miscellaneous Functions

- [CFDateCreate](cfdatecreate%28____%29.md): Creates a `CFDate` object given an absolute time.
- [CFDateGetAbsoluteTime](cfdategetabsolutetime%28__%29.md): Returns a `CFDate` object’s absolute time.
- [CFDateGetTimeIntervalSinceDate](cfdategettimeintervalsincedate%28____%29.md): Returns the number of elapsed seconds between the given `CFDate` objects.
- [CFDateGetTypeID](cfdategettypeid%28%29.md): Returns the type identifier for the `CFDate` opaque type.
