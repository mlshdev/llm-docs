> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedunarchiver/setclass(_:forclassname:)-swift.method](https://developer.apple.com/documentation/foundation/nskeyedunarchiver/setclass(_:forclassname:)-swift.method)

# setClass(\_:forClassName:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets a translation mapping on this unarchiver to decode objects encoded with a given class name as instances of a given class instead.

## Declaration

```swift
func setClass(_ cls: AnyClass?, forClassName codedName: String)
```

## Parameters

- `cls`: The class with which to replace instances of the class named `codedName`.
- `codedName`: The ostensible name of a class in an archive.

<a id="Discussion"></a>

## Discussion

When decoding, the receiver’s translation map overrides any translation that may also be present in the class’s map (see [setClass(\_:forClassName:)](setclass%28__forclassname_%29-swift.type.method.md)).

## See Also

### Managing Class Names

- [setClass(\_:forClassName:)](setclass%28__forclassname_%29-swift.type.method.md): Sets a global translation mapping to decode objects encoded with a given class name as instances of a given class instead.
- [class(forClassName:)](class%28forclassname_%29-swift.type.method.md): Returns the class from which this unarchiver instantiates an encoded object with a given class name.
- [class(forClassName:)](class%28forclassname_%29-swift.method.md): Returns the class from which this unarchiver instantiates an encoded object with a given class name.

# setClass:forClassName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets a translation mapping on this unarchiver to decode objects encoded with a given class name as instances of a given class instead.

## Declaration

```objectivec
- (void) setClass:(Class) cls forClassName:(NSString *) codedName;
```

## Parameters

- `cls`: The class with which to replace instances of the class named `codedName`.
- `codedName`: The ostensible name of a class in an archive.

<a id="Discussion"></a>

## Discussion

When decoding, the receiver’s translation map overrides any translation that may also be present in the class’s map (see [setClass:forClassName:](setclass%28__forclassname_%29-swift.type.method.md)).

## See Also

### Managing Class Names

- [setClass:forClassName:](setclass%28__forclassname_%29-swift.type.method.md): Sets a global translation mapping to decode objects encoded with a given class name as instances of a given class instead.
- [classForClassName:](class%28forclassname_%29-swift.type.method.md): Returns the class from which this unarchiver instantiates an encoded object with a given class name.
- [classForClassName:](class%28forclassname_%29-swift.method.md): Returns the class from which this unarchiver instantiates an encoded object with a given class name.
