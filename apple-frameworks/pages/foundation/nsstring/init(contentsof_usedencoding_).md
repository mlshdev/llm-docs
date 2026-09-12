> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/init(contentsof:usedencoding:)](https://developer.apple.com/documentation/foundation/nsstring/init(contentsof:usedencoding:))

# init(contentsOf:usedEncoding:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an @c NSString object initialized by reading data from a given URL and returns by reference the encoding used to interpret the data.

## Declaration

```swift
convenience init(contentsOf url: URL, usedEncoding enc: UnsafeMutablePointer<UInt>?) throws
```

## Parameters

- `url`: The URL to read.
- `enc`: Upon return, if the URL is read successfully, contains the encoding used to interpret the file at @c url.

<a id="return-value"></a>

## Return Value

An @c NSString object initialized by reading data from @c url. Returns @c nil if the URL can’t be opened or there is an encoding error.

# initWithContentsOfURL:usedEncoding:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an @c NSString object initialized by reading data from a given URL and returns by reference the encoding used to interpret the data.

## Declaration

```objectivec
- (instancetype) initWithContentsOfURL:(NSURL *) url usedEncoding:(NSStringEncoding *) enc error:(NSError **) error;
```

## Parameters

- `url`: The URL to read.
- `enc`: Upon return, if the URL is read successfully, contains the encoding used to interpret the file at @c url.
- `error`: If an error occurs, upon return contains an @c NSError object that describes the problem.

<a id="return-value"></a>

## Return Value

An @c NSString object initialized by reading data from @c url. Returns @c nil if the URL can’t be opened or there is an encoding error.
