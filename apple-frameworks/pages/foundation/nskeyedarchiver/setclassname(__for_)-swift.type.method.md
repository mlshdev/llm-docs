> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedarchiver/setclassname(_:for:)-swift.type.method](https://developer.apple.com/documentation/foundation/nskeyedarchiver/setclassname(_:for:)-swift.type.method)

# setClassName(\_:for:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets a global translation mapping to encode instances of a given class with the provided name, rather than their real name.

## Declaration

```swift
class func setClassName(_ codedName: String?, for cls: AnyClass)
```

## Parameters

- `codedName`: The name of the class that `NSKeyedArchiver` uses in place of `cls`.
- `cls`: The class for which to set up a translation mapping.

<a id="Discussion"></a>

## Discussion

When encoding, an archiver consults its own translation map before using the class’ translation map.

## See Also

### Managing Classes and Class Names

- [className(for:)](classname%28for_%29-swift.type.method.md): Returns the class name with which the archiver class encodes instances of a given class.
- [setClassName(\_:for:)](setclassname%28__for_%29-swift.method.md): Sets a mapping for this archiver to encode instances of a given class with the provided name, rather than their real name.
- [className(for:)](classname%28for_%29-swift.method.md): Returns the class name with which this archiver encodes instances of a given class.

# setClassName:forClass: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets a global translation mapping to encode instances of a given class with the provided name, rather than their real name.

## Declaration

```objectivec
+ (void) setClassName:(NSString *) codedName forClass:(Class) cls;
```

## Parameters

- `codedName`: The name of the class that `NSKeyedArchiver` uses in place of `cls`.
- `cls`: The class for which to set up a translation mapping.

<a id="Discussion"></a>

## Discussion

When encoding, an archiver consults its own translation map before using the class’ translation map.

## See Also

### Managing Classes and Class Names

- [classNameForClass:](classname%28for_%29-swift.type.method.md): Returns the class name with which the archiver class encodes instances of a given class.
- [setClassName:forClass:](setclassname%28__for_%29-swift.method.md): Sets a mapping for this archiver to encode instances of a given class with the provided name, rather than their real name.
- [classNameForClass:](classname%28for_%29-swift.method.md): Returns the class name with which this archiver encodes instances of a given class.
