> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/isfileurl](https://developer.apple.com/documentation/foundation/nsurl/isfileurl)

# isFileURL (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A boolean value that determines whether the receiver is a file URL.

## Declaration

```swift
var isFileURL: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The property’s value is  [true](https://developer.apple.com/documentation/swift/true) if the receiver uses the file scheme, [false](https://developer.apple.com/documentation/swift/false) otherwise. Both file path and file reference URLs are considered to be file URLs.

If this property’s value is [true](https://developer.apple.com/documentation/swift/true), then the receiver’s [path](path.md) property contains a suitable value for input into [FileManager](../filemanager.md) or `NSPathUtilities`.

## See Also

### Querying an NSURL

- [checkResourceIsReachableAndReturnError(\_:)](checkresourceisreachableandreturnerror%28__%29.md): Returns whether the resource pointed to by a file URL can be reached.
- [isFileReferenceURL()](isfilereferenceurl%28%29.md): Returns whether the URL is a file reference URL.

# fileURL (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A boolean value that determines whether the receiver is a file URL.

## Declaration

```objectivec
@property (readonly, getter=isFileURL) BOOL fileURL;
```

<a id="Discussion"></a>

## Discussion

The property’s value is  [true](https://developer.apple.com/documentation/swift/true) if the receiver uses the file scheme, [false](https://developer.apple.com/documentation/swift/false) otherwise. Both file path and file reference URLs are considered to be file URLs.

If this property’s value is [true](https://developer.apple.com/documentation/swift/true), then the receiver’s [path](path.md) property contains a suitable value for input into [NSFileManager](../filemanager.md) or `NSPathUtilities`.

## See Also

### Querying an NSURL

- [checkResourceIsReachableAndReturnError:](checkresourceisreachableandreturnerror%28__%29.md): Returns whether the resource pointed to by a file URL can be reached.
- [isFileReferenceURL](isfilereferenceurl%28%29.md): Returns whether the URL is a file reference URL.
