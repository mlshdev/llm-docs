> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourcemanager/default()](https://developer.apple.com/documentation/photos/phassetresourcemanager/default())

# default() (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Returns the shared asset resource manager object.

## Declaration

```swift
class func `default`() -> PHAssetResourceManager
```

<a id="return-value"></a>

## Return Value

The asset resource manager.

<a id="Discussion"></a>

## Discussion

This method always returns the same asset resource manager object, which is shared for all uses in your app.

# defaultManager (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Returns the shared asset resource manager object.

## Declaration

```objectivec
+ (PHAssetResourceManager *) defaultManager;
```

<a id="return-value"></a>

## Return Value

The asset resource manager.

<a id="Discussion"></a>

## Discussion

This method always returns the same asset resource manager object, which is shared for all uses in your app.
