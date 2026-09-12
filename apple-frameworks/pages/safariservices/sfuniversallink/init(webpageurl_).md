> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfuniversallink/init(webpageurl:)](https://developer.apple.com/documentation/safariservices/sfuniversallink/init(webpageurl:))

# init(webpageURL:) (Swift)

**Framework:** Safari Services  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates a universal link object with the URL.

## Declaration

```swift
init?(webpageURL url: URL)
```

## Parameters

- `url`: The URL of the web page to associate.

<a id="Discussion"></a>

## Discussion

This designated initializer creates a [SFUniversalLink](../sfuniversallink.md) object.

# initWithWebpageURL: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Creates a universal link object with the URL.

## Declaration

```objectivec
- (instancetype) initWithWebpageURL:(NSURL *) url;
```

## Parameters

- `url`: The URL of the web page to associate.

<a id="Discussion"></a>

## Discussion

This designated initializer creates a [SFUniversalLink](../sfuniversallink.md) object.
