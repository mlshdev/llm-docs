> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/class_getimagename(_:)](https://developer.apple.com/documentation/objectivec/class_getimagename(_:))

# class_getImageName(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the name of the dynamic library a class originated from.

## Declaration

```swift
func class_getImageName(_ cls: AnyClass?) -> UnsafePointer<CChar>?
```

## Parameters

- `cls`: The class you are inquiring about.

<a id="return-value"></a>

## Return Value

A C string representing the name of the library containing the `cls` class.

## See Also

### Working with Libraries

- [objc_copyImageNames(\_:)](objc_copyimagenames%28__%29.md): Returns the names of all the loaded Objective-C frameworks and dynamic libraries.
- [objc_copyClassNamesForImage(\_:\_:)](objc_copyclassnamesforimage%28____%29.md): Returns the names of all the classes within a specified library or framework.

# class_getImageName (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the name of the dynamic library a class originated from.

## Declaration

```objectivec
extern const char *class_getImageName(Class cls);
```

## Parameters

- `cls`: The class you are inquiring about.

<a id="return-value"></a>

## Return Value

A C string representing the name of the library containing the `cls` class.

## See Also

### Working with Libraries

- [objc_copyImageNames](objc_copyimagenames%28__%29.md): Returns the names of all the loaded Objective-C frameworks and dynamic libraries.
- [objc_copyClassNamesForImage](objc_copyclassnamesforimage%28____%29.md): Returns the names of all the classes within a specified library or framework.
