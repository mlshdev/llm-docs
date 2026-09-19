> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/exposurenotification/enmanager/invalidate()

# invalidate() (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Method  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

Stops any outstanding operations and invalidates the manager.

> No longer supported.

## Declaration

```swift
func invalidate()
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This method is available in iOS 12.5, and in iOS 13.5 and later.

Once you call this method, the object can no longer be used. To start using [ENManager](../enmanager.md) again, create and activate a new instance of the class.

## Topics

### Completion Handlers

- [invalidationHandler](invalidationhandler.md): Deprecated. The handler that the framework invokes when invalidation completes.

# invalidate (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Method  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

Stops any outstanding operations and invalidates the manager.

> No longer supported.

## Declaration

```objectivec
- (void) invalidate;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This method is available in iOS 12.5, and in iOS 13.5 and later.

Once you call this method, the object can no longer be used. To start using [ENManager](../enmanager.md) again, create and activate a new instance of the class.

## Topics

### Completion Handlers

- [invalidationHandler](invalidationhandler.md): Deprecated. The handler that the framework invokes when invalidation completes.
