> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediadatastorage/init(url:options:)-5cv8s](https://developer.apple.com/documentation/avfoundation/avmediadatastorage/init(url:options:)-5cv8s)

# init(url:options:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Creates a media data storage object associated with a file URL.

## Declaration

```swift
init(url URL: URL, options: [String : Any]? = nil)
```

## Parameters

- `URL`: The URL specifying where sample data added to a movie or track is written.
- `options`: A dictionary object containing keys for specifying initialization options. No keys are currently defined.

<a id="return-value"></a>

## Return Value

An `AVMediaDataStorage` object.

# initWithURL:options: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Creates a media data storage object associated with a file URL.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) URL options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `URL`: The URL specifying where sample data added to a movie or track is written.
- `options`: A dictionary object containing keys for specifying initialization options. No keys are currently defined.

<a id="return-value"></a>

## Return Value

An `AVMediaDataStorage` object.
