> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsunarchiver/unarchiveobject(with:)](https://developer.apple.com/documentation/foundation/nsunarchiver/unarchiveobject(with:))

# unarchiveObject(with:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Decodes and returns the object archived in a given `NSData` object.

> Use NSKeyedUnarchiver instead

## Declaration

```swift
class func unarchiveObject(with data: Data) -> Any?
```

## Parameters

- `data`: An `NSData` object that contains an archive created using `NSArchiver`.

<a id="return-value"></a>

## Return Value

The object, or object graph, that was archived in `data`. Returns `nil` if `data` cannot be unarchived.

<a id="Discussion"></a>

## Discussion

This method invokes [init(forReadingWith:)](init%28forreadingwith_%29.md) and [decodeObject()](../nscoder/decodeobject%28%29.md) to create a temporary `NSUnarchiver` object that decodes the object. If the archived object is the root of a graph of objects, the entire graph is unarchived.

## See Also

### Related Documentation

- [encodeRootObject(\_:)](../nsarchiver/encoderootobject%28__%29.md): Deprecated. Archives a given object along with all the objects to which it is connected.

### Decoding objects

- [unarchiveObject(withFile:)](unarchiveobject%28withfile_%29.md): Deprecated. Decodes and returns the object archived in the file `path`.

# unarchiveObjectWithData: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Decodes and returns the object archived in a given `NSData` object.

> Use NSKeyedUnarchiver instead

## Declaration

```objectivec
+ (id) unarchiveObjectWithData:(NSData *) data;
```

## Parameters

- `data`: An `NSData` object that contains an archive created using `NSArchiver`.

<a id="return-value"></a>

## Return Value

The object, or object graph, that was archived in `data`. Returns `nil` if `data` cannot be unarchived.

<a id="Discussion"></a>

## Discussion

This method invokes [initForReadingWithData:](init%28forreadingwith_%29.md) and [decodeObject](../nscoder/decodeobject%28%29.md) to create a temporary `NSUnarchiver` object that decodes the object. If the archived object is the root of a graph of objects, the entire graph is unarchived.

## See Also

### Related Documentation

- [encodeRootObject:](../nsarchiver/encoderootobject%28__%29.md): Deprecated. Archives a given object along with all the objects to which it is connected.

### Decoding objects

- [unarchiveObjectWithFile:](unarchiveobject%28withfile_%29.md): Deprecated. Decodes and returns the object archived in the file `path`.
