> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_copyimagenames(_:)](https://developer.apple.com/documentation/objectivec/objc_copyimagenames(_:))

# objc_copyImageNames(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the names of all the loaded Objective-C frameworks and dynamic libraries.

## Declaration

```swift
func objc_copyImageNames(_ outCount: UnsafeMutablePointer<UInt32>?) -> UnsafeMutablePointer<UnsafePointer<CChar>>
```

## Parameters

- `outCount`: The number of names in the returned array.

<a id="return-value"></a>

## Return Value

An array of C strings representing the names of all the loaded Objective-C frameworks and dynamic libraries.

## See Also

### Working with Libraries

- [class_getImageName(\_:)](class_getimagename%28__%29.md): Returns the name of the dynamic library a class originated from.
- [objc_copyClassNamesForImage(\_:\_:)](objc_copyclassnamesforimage%28____%29.md): Returns the names of all the classes within a specified library or framework.

# objc_copyImageNames (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the names of all the loaded Objective-C frameworks and dynamic libraries.

## Declaration

```objectivec
extern const char **objc_copyImageNames(unsigned int *outCount);
```

## Parameters

- `outCount`: The number of names in the returned array.

<a id="return-value"></a>

## Return Value

An array of C strings representing the names of all the loaded Objective-C frameworks and dynamic libraries.

## See Also

### Working with Libraries

- [class_getImageName](class_getimagename%28__%29.md): Returns the name of the dynamic library a class originated from.
- [objc_copyClassNamesForImage](objc_copyclassnamesforimage%28____%29.md): Returns the names of all the classes within a specified library or framework.
