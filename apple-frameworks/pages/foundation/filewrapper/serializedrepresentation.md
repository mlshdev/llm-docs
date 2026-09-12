> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/serializedrepresentation](https://developer.apple.com/documentation/foundation/filewrapper/serializedrepresentation)

# serializedRepresentation (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The contents of the file wrapper as an opaque data object.

## Declaration

```swift
var serializedRepresentation: Data? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains a data object in the format used by the [fileContents](https://developer.apple.com/documentation/appkit/nspasteboard/pasteboardtype/filecontents) pasteboard type. This data object is also suitable for passing to [init(serializedRepresentation:)](init%28serializedrepresentation_%29.md).

This property may be `nil` if the user modifies the contents of the file system node after you call [read(from:options:)](read%28from_options_%29.md) or [init(url:options:)](init%28url_options_%29-70161.md), but before [FileWrapper](../filewrapper.md) has read the contents of the file.  You can use the [immediate](readingoptions/immediate.md) reading option to reduce the likelihood of this problem.

## See Also

### Related Documentation

- [init(serializedRepresentation:)](init%28serializedrepresentation_%29.md): Initializes the receiver as a regular-file file wrapper from given serialized data.

# serializedRepresentation (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The contents of the file wrapper as an opaque data object.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSData * serializedRepresentation;
```

<a id="Discussion"></a>

## Discussion

This property contains a data object in the format used by the [NSFileContentsPboardType](https://developer.apple.com/documentation/appkit/nspasteboard/pasteboardtype/filecontents) pasteboard type. This data object is also suitable for passing to [initWithSerializedRepresentation:](init%28serializedrepresentation_%29.md).

This property may be `nil` if the user modifies the contents of the file system node after you call [readFromURL:options:error:](read%28from_options_%29.md) or [initWithURL:options:error:](init%28url_options_%29-70161.md), but before [NSFileWrapper](../filewrapper.md) has read the contents of the file.  You can use the [NSFileWrapperReadingImmediate](readingoptions/immediate.md) reading option to reduce the likelihood of this problem.

## See Also

### Related Documentation

- [initWithSerializedRepresentation:](init%28serializedrepresentation_%29.md): Initializes the receiver as a regular-file file wrapper from given serialized data.
