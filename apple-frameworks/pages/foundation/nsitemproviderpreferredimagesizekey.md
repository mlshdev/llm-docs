> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemproviderpreferredimagesizekey](https://developer.apple.com/documentation/foundation/nsitemproviderpreferredimagesizekey)

# NSItemProviderPreferredImageSizeKey (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key provided to the options dictionary to indicate a preferred image size.

## Declaration

```swift
let NSItemProviderPreferredImageSizeKey: String
```

<a id="Discussion"></a>

## Discussion

Use this key only with the [NSItemProvider](nsitemprovider.md) type coercion policy. Ensure the value is an [NSValue](nsvalue.md) object that contains a [CGSize](../corefoundation/cgsize.md) struct specifying the requested size, in points.

# NSItemProviderPreferredImageSizeKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key provided to the options dictionary to indicate a preferred image size.

## Declaration

```objectivec
extern NSString * const NSItemProviderPreferredImageSizeKey;
```

<a id="Discussion"></a>

## Discussion

Use this key only with the [NSItemProvider](nsitemprovider.md) type coercion policy. Ensure the value is an [NSValue](nsvalue.md) object that contains a [CGSize](../corefoundation/cgsize.md) struct specifying the requested size, in points.
