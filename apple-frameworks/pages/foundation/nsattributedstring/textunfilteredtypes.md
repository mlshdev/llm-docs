> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/textunfilteredtypes](https://developer.apple.com/documentation/foundation/nsattributedstring/textunfilteredtypes)

# textUnfilteredTypes (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.5+

An array of UTI strings that identify the file types that attributed strings support directly.

## Declaration

```swift
class var textUnfilteredTypes: [String] { get }
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which contains a UTI identifying a supported file type.

<a id="Discussion"></a>

## Discussion

The returned list includes UTI strings only for those file types that are supported directly by the receiver. It does not include types that are supported through user-installed filter services. You can use the returned UTI strings with any method that supports UTIs.

## See Also

### Getting the supported text-file formats

- [prefersRTFD(in:)](prefersrtfd%28in_%29.md): Returns a Boolean value that indicates whether the specified range of text prefers RTFD formatting.
- [textTypes](texttypes.md): An array of UTI strings that identify the file types that attributed strings support, either directly or through a user-installed filter service.

# textUnfilteredTypes (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.5+

An array of UTI strings that identify the file types that attributed strings support directly.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<NSString *> * textUnfilteredTypes;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which contains a UTI identifying a supported file type.

<a id="Discussion"></a>

## Discussion

The returned list includes UTI strings only for those file types that are supported directly by the receiver. It does not include types that are supported through user-installed filter services. You can use the returned UTI strings with any method that supports UTIs.

## See Also

### Getting the supported text-file formats

- [prefersRTFDInRange:](prefersrtfd%28in_%29.md): Returns a Boolean value that indicates whether the specified range of text prefers RTFD formatting.
- [textTypes](texttypes.md): An array of UTI strings that identify the file types that attributed strings support, either directly or through a user-installed filter service.
