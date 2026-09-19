> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inimage/imagesize(for:)

# imageSize(for:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Returns the preferred image size for the specified response object.

## Declaration

```swift
class func imageSize(for response: INIntentResponse) -> CGSize
```

## Parameters

- `response`: The response object that uses the image.

<a id="return-value"></a>

## Return Value

The response object’s preferred image size.

<a id="Discussion"></a>

## Discussion

If a response object includes an image, use this method to get its preferred size and then create an image of that size.

# imageSizeForIntentResponse: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Returns the preferred image size for the specified response object.

## Declaration

```objectivec
+ (CGSize) imageSizeForIntentResponse:(INIntentResponse *) response;
```

## Parameters

- `response`: The response object that uses the image.

<a id="return-value"></a>

## Return Value

The response object’s preferred image size.

<a id="Discussion"></a>

## Discussion

If a response object includes an image, use this method to get its preferred size and then create an image of that size.
