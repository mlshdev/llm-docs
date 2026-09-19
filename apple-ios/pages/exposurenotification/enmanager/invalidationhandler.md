> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/exposurenotification/enmanager/invalidationhandler

# invalidationHandler (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The handler that the framework invokes when invalidation completes.

> No longer supported.

## Declaration

```swift
var invalidationHandler: (() -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

The framework invokes this handler only once, and clears the property before invoking it to break retain cycles.

# invalidationHandler (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The handler that the framework invokes when invalidation completes.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) dispatch_block_t invalidationHandler;
```

<a id="Discussion"></a>

## Discussion

The framework invokes this handler only once, and clears the property before invoking it to break retain cycles.
