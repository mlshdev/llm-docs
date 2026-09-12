> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/propertylistfromstringsfileformat()](https://developer.apple.com/documentation/foundation/nsstring/propertylistfromstringsfileformat())

# propertyListFromStringsFileFormat() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a dictionary object initialized with the keys and values found in the receiver.

## Declaration

```swift
func propertyListFromStringsFileFormat() -> [AnyHashable : Any]?
```

<a id="return-value"></a>

## Return Value

A dictionary object initialized with the keys and values found in the receiver

<a id="Discussion"></a>

## Discussion

The receiver must contain text in the format used for `.strings` files. In this format, keys and values are separated by an equal sign, and each key-value pair is terminated with a semicolon. The value is optional—if not present, the equal sign is also omitted. The keys and values themselves are always strings enclosed in straight quotation marks. Comments may be included, delimited by `/*` and `*/` as for ANSI C comments. Here’s a short example of a strings file:

```objc
/* Question in confirmation panel for quitting. */
"Confirm Quit" = "Are you sure you want to quit?";
 
/* Message when user tries to close unsaved document */
"Close or Save" = "Save changes before closing?";
 
/* Word for Cancel */
"Cancel";
```

## See Also

### Related Documentation

- [string(withContentsOfFile:)](string%28withcontentsoffile_%29.md): Deprecated. Returns a string created by reading data from the file named by a given path.

### Converting String Contents Into a Property List

- [propertyList()](propertylist%28%29.md): Parses the receiver as a text representation of a property list, returning an `NSString`, `NSData`, `NSArray`, or `NSDictionary` object, according to the topmost element.

# propertyListFromStringsFileFormat (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a dictionary object initialized with the keys and values found in the receiver.

## Declaration

```objectivec
- (NSDictionary *) propertyListFromStringsFileFormat;
```

<a id="return-value"></a>

## Return Value

A dictionary object initialized with the keys and values found in the receiver

<a id="Discussion"></a>

## Discussion

The receiver must contain text in the format used for `.strings` files. In this format, keys and values are separated by an equal sign, and each key-value pair is terminated with a semicolon. The value is optional—if not present, the equal sign is also omitted. The keys and values themselves are always strings enclosed in straight quotation marks. Comments may be included, delimited by `/*` and `*/` as for ANSI C comments. Here’s a short example of a strings file:

```objc
/* Question in confirmation panel for quitting. */
"Confirm Quit" = "Are you sure you want to quit?";
 
/* Message when user tries to close unsaved document */
"Close or Save" = "Save changes before closing?";
 
/* Word for Cancel */
"Cancel";
```

## See Also

### Related Documentation

- [stringWithContentsOfFile:](string%28withcontentsoffile_%29.md): Deprecated. Returns a string created by reading data from the file named by a given path.

### Converting String Contents Into a Property List

- [propertyList](propertylist%28%29.md): Parses the receiver as a text representation of a property list, returning an `NSString`, `NSData`, `NSArray`, or `NSDictionary` object, according to the topmost element.
