> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedunarchiver/class(forclassname:)-swift.method](https://developer.apple.com/documentation/foundation/nskeyedunarchiver/class(forclassname:)-swift.method)

# class(forClassName:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the class from which this unarchiver instantiates an encoded object with a given class name.

## Declaration

```swift
func `class`(forClassName codedName: String) -> AnyClass?
```

## Parameters

- `codedName`: The name of a class.

<a id="return-value"></a>

## Return Value

The class from which the receiver instantiates an encoded object with the class name `codedName`. Returns `nil` if the receiver does not have a translation mapping for `codedName`.

<a id="Discussion"></a>

## Discussion

The class’s separate translation map is not searched.

## See Also

### Managing Class Names

- [setClass(\_:forClassName:)](setclass%28__forclassname_%29-swift.type.method.md): Sets a global translation mapping to decode objects encoded with a given class name as instances of a given class instead.
- [class(forClassName:)](class%28forclassname_%29-swift.type.method.md): Returns the class from which this unarchiver instantiates an encoded object with a given class name.
- [setClass(\_:forClassName:)](setclass%28__forclassname_%29-swift.method.md): Sets a translation mapping on this unarchiver to decode objects encoded with a given class name as instances of a given class instead.

# classForClassName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the class from which this unarchiver instantiates an encoded object with a given class name.

## Declaration

```objectivec
- (Class) classForClassName:(NSString *) codedName;
```

## Parameters

- `codedName`: The name of a class.

<a id="return-value"></a>

## Return Value

The class from which the receiver instantiates an encoded object with the class name `codedName`. Returns `nil` if the receiver does not have a translation mapping for `codedName`.

<a id="Discussion"></a>

## Discussion

The class’s separate translation map is not searched.

## See Also

### Managing Class Names

- [setClass:forClassName:](setclass%28__forclassname_%29-swift.type.method.md): Sets a global translation mapping to decode objects encoded with a given class name as instances of a given class instead.
- [classForClassName:](class%28forclassname_%29-swift.type.method.md): Returns the class from which this unarchiver instantiates an encoded object with a given class name.
- [setClass:forClassName:](setclass%28__forclassname_%29-swift.method.md): Sets a translation mapping on this unarchiver to decode objects encoded with a given class name as instances of a given class instead.
