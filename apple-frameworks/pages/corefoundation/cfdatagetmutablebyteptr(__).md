> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdatagetmutablebyteptr(_:)](https://developer.apple.com/documentation/corefoundation/cfdatagetmutablebyteptr(_:))

# CFDataGetMutableBytePtr(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a pointer to a mutable byte buffer of a CFMutableData object.

## Declaration

```swift
func CFDataGetMutableBytePtr(_ theData: CFMutableData!) -> UnsafeMutablePointer<UInt8>!
```

## Parameters

- `theData`: A CFMutableData object. If you pass an immutable CFData object, the behavior is not defined.

<a id="return-value"></a>

## Return Value

A pointer to the bytes associated with `theData`.

<a id="Discussion"></a>

## Discussion

If the length of `theData`‘s data is not zero, this function is guaranteed to return a pointer to a CFMutableData object’s internal bytes. If the length of `theData`’s data *is* zero, this function may or may not return `NULL` dependent upon many factors related to how the object was created (moreover, in this case the function result might change between different releases and on different platforms).

# CFDataGetMutableBytePtr (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a pointer to a mutable byte buffer of a CFMutableData object.

## Declaration

```objectivec
extern UInt8 *CFDataGetMutableBytePtr(CFMutableDataRef theData);
```

## Parameters

- `theData`: A CFMutableData object. If you pass an immutable CFData object, the behavior is not defined.

<a id="return-value"></a>

## Return Value

A pointer to the bytes associated with `theData`.

<a id="Discussion"></a>

## Discussion

If the length of `theData`‘s data is not zero, this function is guaranteed to return a pointer to a CFMutableData object’s internal bytes. If the length of `theData`’s data *is* zero, this function may or may not return `NULL` dependent upon many factors related to how the object was created (moreover, in this case the function result might change between different releases and on different platforms).
