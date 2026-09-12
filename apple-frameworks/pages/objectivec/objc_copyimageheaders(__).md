> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_copyimageheaders(_:)](https://developer.apple.com/documentation/objectivec/objc_copyimageheaders(_:))

# objc_copyImageHeaders(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns the Mach headers of all the images loaded into the current process that contain Objective-C or Swift code.

## Declaration

```swift
func objc_copyImageHeaders(_ outCount: UnsafeMutablePointer<UInt32>?) -> UnsafeMutablePointer<OpaquePointer>
```

```swift
func objc_copyImageHeaders(_ outCount: UnsafeMutablePointer<UInt32>?) -> UnsafeMutablePointer<UnsafePointer<mach_header>>
```

## Parameters

- `outCount`: The number of image headers returned.

<a id="return-value"></a>

## Return Value

An array of @c mach_header pointers. The array contains @c \*outCount pointers followed by a @c NULL terminator. You must free the array with

# objc_copyImageHeaders (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns the Mach headers of all the images loaded into the current process that contain Objective-C or Swift code.

## Declaration

```objectivec
extern const struct mach_header **objc_copyImageHeaders(unsigned int *outCount);
```

## Parameters

- `outCount`: The number of image headers returned.

<a id="return-value"></a>

## Return Value

An array of @c mach_header pointers. The array contains @c \*outCount pointers followed by a @c NULL terminator. You must free the array with
