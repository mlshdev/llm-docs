> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_copyclassnamesforimage(_:_:)](https://developer.apple.com/documentation/objectivec/objc_copyclassnamesforimage(_:_:))

# objc_copyClassNamesForImage(\_:\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the names of all the classes within a specified library or framework.

## Declaration

```swift
func objc_copyClassNamesForImage(_ image: UnsafePointer<CChar>, _ outCount: UnsafeMutablePointer<UInt32>?) -> UnsafeMutablePointer<UnsafePointer<CChar>>?
```

## Parameters

- `image`: The library or framework you are inquiring about.
- `outCount`: The number of class names in the returned array.

<a id="return-value"></a>

## Return Value

An array of C strings representing all of the class names within the specified library or framework.

## See Also

### Working with Libraries

- [objc_copyImageNames(\_:)](objc_copyimagenames%28__%29.md): Returns the names of all the loaded Objective-C frameworks and dynamic libraries.
- [class_getImageName(\_:)](class_getimagename%28__%29.md): Returns the name of the dynamic library a class originated from.

# objc_copyClassNamesForImage (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the names of all the classes within a specified library or framework.

## Declaration

```objectivec
extern const char **objc_copyClassNamesForImage(const char *image, unsigned int *outCount);
```

## Parameters

- `image`: The library or framework you are inquiring about.
- `outCount`: The number of class names in the returned array.

<a id="return-value"></a>

## Return Value

An array of C strings representing all of the class names within the specified library or framework.

## See Also

### Working with Libraries

- [objc_copyImageNames](objc_copyimagenames%28__%29.md): Returns the names of all the loaded Objective-C frameworks and dynamic libraries.
- [class_getImageName](class_getimagename%28__%29.md): Returns the name of the dynamic library a class originated from.
