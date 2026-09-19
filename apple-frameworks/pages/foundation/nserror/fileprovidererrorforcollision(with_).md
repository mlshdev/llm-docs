> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nserror/fileprovidererrorforcollision(with:)

# fileProviderErrorForCollision(with:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

Returns a properly formatted error object with a `NSFileProviderItemCollisionError` error code.

## Declaration

```swift
class func fileProviderErrorForCollision(with existingItem: NSFileProviderItem) -> Self
```

# fileProviderErrorForCollisionWithItem: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

Returns a properly formatted error object with a `NSFileProviderItemCollisionError` error code.

## Declaration

```objectivec
+ (instancetype) fileProviderErrorForCollisionWithItem:(NSFileProviderItem) existingItem;
```
