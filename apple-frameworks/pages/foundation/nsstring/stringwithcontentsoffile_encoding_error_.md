> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/stringwithcontentsoffile:encoding:error:](https://developer.apple.com/documentation/foundation/nsstring/stringwithcontentsoffile:encoding:error:)

# stringWithContentsOfFile:encoding:error:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string created by reading data from the file at a given path interpreted using a given encoding.

## Declaration

```objectivec
+ (instancetype) stringWithContentsOfFile:(NSString *) path encoding:(NSStringEncoding) enc error:(NSError **) error;
```

## Parameters

- `path`: A path to a file.
- `enc`: The encoding of the file at `path`. For possible values, see [NSStringEncoding](../nsstringencoding.md).
- `error`: If an error occurs, upon returns contains an `NSError` object that describes the problem. If you are not interested in possible errors, pass in `NULL`.

<a id="return-value"></a>

## Return Value

A string created by reading data from the file named by `path` using the encoding, `enc`. If the file can’t be opened or there is an encoding error, returns `nil`.

## See Also

### Creating and Initializing a String from a File

- [initWithContentsOfFile:encoding:error:](init%28contentsoffile_encoding_%29.md): Returns an `NSString` object initialized by reading data from the file at a given path using a given encoding.
- [stringWithContentsOfFile:usedEncoding:error:](stringwithcontentsoffile_usedencoding_error_.md): Returns a string created by reading data from the file at a given path and returns by reference the encoding used to interpret the file.
- [initWithContentsOfFile:usedEncoding:error:](init%28contentsoffile_usedencoding_%29.md): Returns an `NSString` object initialized by reading data from the file at a given path and returns by reference the encoding used to interpret the characters.
