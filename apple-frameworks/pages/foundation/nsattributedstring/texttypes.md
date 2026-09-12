> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/texttypes](https://developer.apple.com/documentation/foundation/nsattributedstring/texttypes)

# textTypes (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.5+

An array of UTI strings that identify the file types that attributed strings support, either directly or through a user-installed filter service.

## Declaration

```swift
class var textTypes: [String] { get }
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which contains a UTI identifying a supported file type.

<a id="Discussion"></a>

## Discussion

The returned list includes UTIs all file types supported by the receiver plus those that can be opened by the receiver after being converted by a user-installed filter service. You can use the returned UTI strings with any method that supports UTIs.

## See Also

### Getting the supported text-file formats

- [prefersRTFD(in:)](prefersrtfd%28in_%29.md): Returns a Boolean value that indicates whether the specified range of text prefers RTFD formatting.
- [textUnfilteredTypes](textunfilteredtypes.md): An array of UTI strings that identify the file types that attributed strings support directly.

# textTypes (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.5+

An array of UTI strings that identify the file types that attributed strings support, either directly or through a user-installed filter service.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<NSString *> * textTypes;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which contains a UTI identifying a supported file type.

<a id="Discussion"></a>

## Discussion

The returned list includes UTIs all file types supported by the receiver plus those that can be opened by the receiver after being converted by a user-installed filter service. You can use the returned UTI strings with any method that supports UTIs.

## See Also

### Getting the supported text-file formats

- [prefersRTFDInRange:](prefersrtfd%28in_%29.md): Returns a Boolean value that indicates whether the specified range of text prefers RTFD formatting.
- [textUnfilteredTypes](textunfilteredtypes.md): An array of UTI strings that identify the file types that attributed strings support directly.
