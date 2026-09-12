> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/init(contentsof:encoding:)](https://developer.apple.com/documentation/foundation/nsstring/init(contentsof:encoding:))

# init(contentsOf:encoding:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an @c NSString object initialized by reading data from a given URL interpreted using a given encoding.

## Declaration

```swift
convenience init(contentsOf url: URL, encoding enc: UInt) throws
```

## Parameters

- `url`: The URL to read.
- `enc`: The encoding of the file at @c url.

<a id="return-value"></a>

## Return Value

An @c NSString object initialized by reading data from @c url. Returns @c nil if the URL can’t be opened or there is an encoding error.

# initWithContentsOfURL:encoding:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an @c NSString object initialized by reading data from a given URL interpreted using a given encoding.

## Declaration

```objectivec
- (instancetype) initWithContentsOfURL:(NSURL *) url encoding:(NSStringEncoding) enc error:(NSError **) error;
```

## Parameters

- `url`: The URL to read.
- `enc`: The encoding of the file at @c url.
- `error`: If an error occurs, upon return contains an @c NSError object that describes the problem.

<a id="return-value"></a>

## Return Value

An @c NSString object initialized by reading data from @c url. Returns @c nil if the URL can’t be opened or there is an encoding error.
