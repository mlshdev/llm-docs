> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimagemanager/default()](https://developer.apple.com/documentation/photos/phimagemanager/default())

# default() (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Returns the shared image manager object.

## Declaration

```swift
class func `default`() -> PHImageManager
```

<a id="return-value"></a>

## Return Value

The image manager.

<a id="Discussion"></a>

## Discussion

This method always returns the same image manager object, which is shared for all uses in your app.

# defaultManager (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Returns the shared image manager object.

## Declaration

```objectivec
+ (PHImageManager *) defaultManager;
```

<a id="return-value"></a>

## Return Value

The image manager.

<a id="Discussion"></a>

## Discussion

This method always returns the same image manager object, which is shared for all uses in your app.
