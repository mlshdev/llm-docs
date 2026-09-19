> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phphotolibrary/shared()

# shared() (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Retrieves the shared photo library object.

## Declaration

```swift
class func shared() -> PHPhotoLibrary
```

<a id="return-value"></a>

## Return Value

The singleton photo library object.

<a id="Discussion"></a>

## Discussion

You may use the shared photo library object from any thread.

# sharedPhotoLibrary (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Retrieves the shared photo library object.

## Declaration

```objectivec
+ (PHPhotoLibrary *) sharedPhotoLibrary;
```

<a id="return-value"></a>

## Return Value

The singleton photo library object.

<a id="Discussion"></a>

## Discussion

You may use the shared photo library object from any thread.
