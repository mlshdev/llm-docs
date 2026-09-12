> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedarchiver/classname(for:)-swift.type.method](https://developer.apple.com/documentation/foundation/nskeyedarchiver/classname(for:)-swift.type.method)

# className(for:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the class name with which the archiver class encodes instances of a given class.

## Declaration

```swift
class func className(for cls: AnyClass) -> String?
```

## Parameters

- `cls`: The class for which to determine the translation mapping.

<a id="return-value"></a>

## Return Value

The class name with which [NSKeyedArchiver](../nskeyedarchiver.md) encodes instances of `cls`. Returns `nil` if [NSKeyedArchiver](../nskeyedarchiver.md) does not have a translation mapping for `cls`.

## See Also

### Managing Classes and Class Names

- [setClassName(\_:for:)](setclassname%28__for_%29-swift.type.method.md): Sets a global translation mapping to encode instances of a given class with the provided name, rather than their real name.
- [setClassName(\_:for:)](setclassname%28__for_%29-swift.method.md): Sets a mapping for this archiver to encode instances of a given class with the provided name, rather than their real name.
- [className(for:)](classname%28for_%29-swift.method.md): Returns the class name with which this archiver encodes instances of a given class.

# classNameForClass: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the class name with which the archiver class encodes instances of a given class.

## Declaration

```objectivec
+ (NSString *) classNameForClass:(Class) cls;
```

## Parameters

- `cls`: The class for which to determine the translation mapping.

<a id="return-value"></a>

## Return Value

The class name with which [NSKeyedArchiver](../nskeyedarchiver.md) encodes instances of `cls`. Returns `nil` if [NSKeyedArchiver](../nskeyedarchiver.md) does not have a translation mapping for `cls`.

## See Also

### Managing Classes and Class Names

- [setClassName:forClass:](setclassname%28__for_%29-swift.type.method.md): Sets a global translation mapping to encode instances of a given class with the provided name, rather than their real name.
- [setClassName:forClass:](setclassname%28__for_%29-swift.method.md): Sets a mapping for this archiver to encode instances of a given class with the provided name, rather than their real name.
- [classNameForClass:](classname%28for_%29-swift.method.md): Returns the class name with which this archiver encodes instances of a given class.
