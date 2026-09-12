> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedunarchiver/setclass(_:forclassname:)-swift.type.method](https://developer.apple.com/documentation/foundation/nskeyedunarchiver/setclass(_:forclassname:)-swift.type.method)

# setClass(\_:forClassName:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets a global translation mapping to decode objects encoded with a given class name as instances of a given class instead.

## Declaration

```swift
class func setClass(_ cls: AnyClass?, forClassName codedName: String)
```

## Parameters

- `cls`: The class with which to replace instances of the class named `codedName`.
- `codedName`: The ostensible name of a class in an archive.

<a id="Discussion"></a>

## Discussion

When decoding, the class’s translation mapping is used only if no translation is found first in an instance’s separate translation map.

## See Also

### Managing Class Names

- [class(forClassName:)](class%28forclassname_%29-swift.type.method.md): Returns the class from which this unarchiver instantiates an encoded object with a given class name.
- [setClass(\_:forClassName:)](setclass%28__forclassname_%29-swift.method.md): Sets a translation mapping on this unarchiver to decode objects encoded with a given class name as instances of a given class instead.
- [class(forClassName:)](class%28forclassname_%29-swift.method.md): Returns the class from which this unarchiver instantiates an encoded object with a given class name.

# setClass:forClassName: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets a global translation mapping to decode objects encoded with a given class name as instances of a given class instead.

## Declaration

```objectivec
+ (void) setClass:(Class) cls forClassName:(NSString *) codedName;
```

## Parameters

- `cls`: The class with which to replace instances of the class named `codedName`.
- `codedName`: The ostensible name of a class in an archive.

<a id="Discussion"></a>

## Discussion

When decoding, the class’s translation mapping is used only if no translation is found first in an instance’s separate translation map.

## See Also

### Managing Class Names

- [classForClassName:](class%28forclassname_%29-swift.type.method.md): Returns the class from which this unarchiver instantiates an encoded object with a given class name.
- [setClass:forClassName:](setclass%28__forclassname_%29-swift.method.md): Sets a translation mapping on this unarchiver to decode objects encoded with a given class name as instances of a given class instead.
- [classForClassName:](class%28forclassname_%29-swift.method.md): Returns the class from which this unarchiver instantiates an encoded object with a given class name.
