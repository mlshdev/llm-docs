> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdategettimeintervalsincedate(_:_:)](https://developer.apple.com/documentation/corefoundation/cfdategettimeintervalsincedate(_:_:))

# CFDateGetTimeIntervalSinceDate(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number of elapsed seconds between the given `CFDate` objects.

## Declaration

```swift
func CFDateGetTimeIntervalSinceDate(_ theDate: CFDate!, _ otherDate: CFDate!) -> CFTimeInterval
```

## Parameters

- `theDate`: The date to compare to `otherDate`.
- `otherDate`: The date to compare to `theDate`.

<a id="return-value"></a>

## Return Value

The number of elapsed seconds between `theDate` and `otherDate`. The result is positive if `theDate` is later than `otherDate`.

## See Also

### CFDate Miscellaneous Functions

- [CFDateCompare(\_:\_:\_:)](cfdatecompare%28______%29.md): Compares two `CFDate` objects and returns a comparison result.
- [CFDateCreate(\_:\_:)](cfdatecreate%28____%29.md): Creates a `CFDate` object given an absolute time.
- [CFDateGetAbsoluteTime(\_:)](cfdategetabsolutetime%28__%29.md): Returns a `CFDate` object’s absolute time.
- [CFDateGetTypeID()](cfdategettypeid%28%29.md): Returns the type identifier for the `CFDate` opaque type.

# CFDateGetTimeIntervalSinceDate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number of elapsed seconds between the given `CFDate` objects.

## Declaration

```objectivec
extern CFTimeInterval CFDateGetTimeIntervalSinceDate(CFDateRef theDate, CFDateRef otherDate);
```

## Parameters

- `theDate`: The date to compare to `otherDate`.
- `otherDate`: The date to compare to `theDate`.

<a id="return-value"></a>

## Return Value

The number of elapsed seconds between `theDate` and `otherDate`. The result is positive if `theDate` is later than `otherDate`.

## See Also

### CFDate Miscellaneous Functions

- [CFDateCompare](cfdatecompare%28______%29.md): Compares two `CFDate` objects and returns a comparison result.
- [CFDateCreate](cfdatecreate%28____%29.md): Creates a `CFDate` object given an absolute time.
- [CFDateGetAbsoluteTime](cfdategetabsolutetime%28__%29.md): Returns a `CFDate` object’s absolute time.
- [CFDateGetTypeID](cfdategettypeid%28%29.md): Returns the type identifier for the `CFDate` opaque type.
