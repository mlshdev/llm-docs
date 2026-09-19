> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/externalaccessory/eaaccessorymanager/shared()

# shared() (Swift)

**Framework:** External Accessory  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Returns the shared accessory manager object for the iOS-based device.

## Declaration

```swift
class func shared() -> EAAccessoryManager
```

<a id="return-value"></a>

## Return Value

The shared accessory manager object.

<a id="Discussion"></a>

## Discussion

You should always use this method to obtain the accessory manager object and should not try to create instances directly.

# sharedAccessoryManager (Objective-C)

**Framework:** External Accessory  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Returns the shared accessory manager object for the iOS-based device.

## Declaration

```objectivec
+ (EAAccessoryManager *) sharedAccessoryManager;
```

<a id="return-value"></a>

## Return Value

The shared accessory manager object.

<a id="Discussion"></a>

## Discussion

You should always use this method to obtain the accessory manager object and should not try to create instances directly.
