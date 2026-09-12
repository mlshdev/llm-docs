> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdatecreate(_:_:)](https://developer.apple.com/documentation/corefoundation/cfdatecreate(_:_:))

# CFDateCreate(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a `CFDate` object given an absolute time.

## Declaration

```swift
func CFDateCreate(_ allocator: CFAllocator!, _ at: CFAbsoluteTime) -> CFDate!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `at`: The absolute time to convert to a CFDate object.

<a id="return-value"></a>

## Return Value

A date object that represents the absolute time `at`.  The caller is responsible for releasing the `CFDate` object using [CFRelease](cfrelease.md).

<a id="Discussion"></a>

## Discussion

`CFDate` objects must always be created using absolute time. Time intervals are not supported.

## See Also

### CFDate Miscellaneous Functions

- [CFDateCompare(\_:\_:\_:)](cfdatecompare%28______%29.md): Compares two `CFDate` objects and returns a comparison result.
- [CFDateGetAbsoluteTime(\_:)](cfdategetabsolutetime%28__%29.md): Returns a `CFDate` object’s absolute time.
- [CFDateGetTimeIntervalSinceDate(\_:\_:)](cfdategettimeintervalsincedate%28____%29.md): Returns the number of elapsed seconds between the given `CFDate` objects.
- [CFDateGetTypeID()](cfdategettypeid%28%29.md): Returns the type identifier for the `CFDate` opaque type.

# CFDateCreate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a `CFDate` object given an absolute time.

## Declaration

```objectivec
extern CFDateRefCFDateCreate(CFAllocatorRef allocator, CFAbsoluteTime at);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `at`: The absolute time to convert to a CFDate object.

<a id="return-value"></a>

## Return Value

A date object that represents the absolute time `at`.  The caller is responsible for releasing the `CFDate` object using [CFRelease](cfrelease.md).

<a id="Discussion"></a>

## Discussion

`CFDate` objects must always be created using absolute time. Time intervals are not supported.

## See Also

### CFDate Miscellaneous Functions

- [CFDateCompare](cfdatecompare%28______%29.md): Compares two `CFDate` objects and returns a comparison result.
- [CFDateGetAbsoluteTime](cfdategetabsolutetime%28__%29.md): Returns a `CFDate` object’s absolute time.
- [CFDateGetTimeIntervalSinceDate](cfdategettimeintervalsincedate%28____%29.md): Returns the number of elapsed seconds between the given `CFDate` objects.
- [CFDateGetTypeID](cfdategettypeid%28%29.md): Returns the type identifier for the `CFDate` opaque type.
