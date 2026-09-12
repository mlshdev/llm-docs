> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedunarchiver/class(forclassname:)-swift.type.method](https://developer.apple.com/documentation/foundation/nskeyedunarchiver/class(forclassname:)-swift.type.method)

# class(forClassName:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the class from which this unarchiver instantiates an encoded object with a given class name.

## Declaration

```swift
class func `class`(forClassName codedName: String) -> AnyClass?
```

## Parameters

- `codedName`: The ostensible name of a class in an archive.

<a id="return-value"></a>

## Return Value

The class from which `NSKeyedUnarchiver` instantiates an object encoded with the class name `codedName`. Returns `nil` if `NSKeyedUnarchiver` does not have a translation mapping for `codedName`.

## See Also

### Managing Class Names

- [setClass(\_:forClassName:)](setclass%28__forclassname_%29-swift.type.method.md): Sets a global translation mapping to decode objects encoded with a given class name as instances of a given class instead.
- [setClass(\_:forClassName:)](setclass%28__forclassname_%29-swift.method.md): Sets a translation mapping on this unarchiver to decode objects encoded with a given class name as instances of a given class instead.
- [class(forClassName:)](class%28forclassname_%29-swift.method.md): Returns the class from which this unarchiver instantiates an encoded object with a given class name.

# classForClassName: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the class from which this unarchiver instantiates an encoded object with a given class name.

## Declaration

```objectivec
+ (Class) classForClassName:(NSString *) codedName;
```

## Parameters

- `codedName`: The ostensible name of a class in an archive.

<a id="return-value"></a>

## Return Value

The class from which `NSKeyedUnarchiver` instantiates an object encoded with the class name `codedName`. Returns `nil` if `NSKeyedUnarchiver` does not have a translation mapping for `codedName`.

## See Also

### Managing Class Names

- [setClass:forClassName:](setclass%28__forclassname_%29-swift.type.method.md): Sets a global translation mapping to decode objects encoded with a given class name as instances of a given class instead.
- [setClass:forClassName:](setclass%28__forclassname_%29-swift.method.md): Sets a translation mapping on this unarchiver to decode objects encoded with a given class name as instances of a given class instead.
- [classForClassName:](class%28forclassname_%29-swift.method.md): Returns the class from which this unarchiver instantiates an encoded object with a given class name.
