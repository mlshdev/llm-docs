> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/propertylist()](https://developer.apple.com/documentation/foundation/nsstring/propertylist())

# propertyList() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Parses the receiver as a text representation of a property list, returning an `NSString`, `NSData`, `NSArray`, or `NSDictionary` object, according to the topmost element.

## Declaration

```swift
func propertyList() -> Any
```

<a id="return-value"></a>

## Return Value

A property list representation of returning an `NSString`, `NSData`, `NSArray`, or `NSDictionary` object, according to the topmost element.

<a id="Discussion"></a>

## Discussion

The receiver must contain a string in a property list format. For a discussion of property list formats, see [Property List Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/Introduction/Introduction.html#//apple_ref/doc/uid/10000048i).

> **Important**

>  Raises an `NSParseErrorException` if the receiver cannot be parsed as a property list.

## See Also

### Related Documentation

- [string(withContentsOfFile:)](string%28withcontentsoffile_%29.md): Deprecated. Returns a string created by reading data from the file named by a given path.

### Converting String Contents Into a Property List

- [propertyListFromStringsFileFormat()](propertylistfromstringsfileformat%28%29.md): Returns a dictionary object initialized with the keys and values found in the receiver.

# propertyList (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Parses the receiver as a text representation of a property list, returning an `NSString`, `NSData`, `NSArray`, or `NSDictionary` object, according to the topmost element.

## Declaration

```objectivec
- (id) propertyList;
```

<a id="return-value"></a>

## Return Value

A property list representation of returning an `NSString`, `NSData`, `NSArray`, or `NSDictionary` object, according to the topmost element.

<a id="Discussion"></a>

## Discussion

The receiver must contain a string in a property list format. For a discussion of property list formats, see [Property List Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/Introduction/Introduction.html#//apple_ref/doc/uid/10000048i).

> **Important**

>  Raises an `NSParseErrorException` if the receiver cannot be parsed as a property list.

## See Also

### Related Documentation

- [stringWithContentsOfFile:](string%28withcontentsoffile_%29.md): Deprecated. Returns a string created by reading data from the file named by a given path.

### Converting String Contents Into a Property List

- [propertyListFromStringsFileFormat](propertylistfromstringsfileformat%28%29.md): Returns a dictionary object initialized with the keys and values found in the receiver.
