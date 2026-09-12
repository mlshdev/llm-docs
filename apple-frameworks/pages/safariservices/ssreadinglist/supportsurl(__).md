> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/ssreadinglist/supportsurl(_:)](https://developer.apple.com/documentation/safariservices/ssreadinglist/supportsurl(_:))

# supportsURL(\_:) (Swift)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Determines whether a URL can be added to the Reading List.

## Declaration

```swift
class func supportsURL(_ URL: URL) -> Bool
```

## Parameters

- `URL`: The URL to be tested for Reading List support.

<a id="return-value"></a>

## Return Value

If [true](https://developer.apple.com/documentation/swift/true), then the URL is supported by Reading List; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use this method to determine whether to display a Reading List button in your app.

# supportsURL: (Objective-C)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Determines whether a URL can be added to the Reading List.

## Declaration

```objectivec
+ (BOOL) supportsURL:(NSURL *) URL;
```

## Parameters

- `URL`: The URL to be tested for Reading List support.

<a id="return-value"></a>

## Return Value

If [true](https://developer.apple.com/documentation/swift/true), then the URL is supported by Reading List; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use this method to determine whether to display a Reading List button in your app.
