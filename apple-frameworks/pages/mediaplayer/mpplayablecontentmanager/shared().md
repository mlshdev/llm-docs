> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpplayablecontentmanager/shared()](https://developer.apple.com/documentation/mediaplayer/mpplayablecontentmanager/shared())

# shared() (Swift)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 7.1+ (deprecated in 14.0) · iPadOS 7.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Returns the current content manager instance.

> Use CarPlay framework

## Declaration

```swift
class func shared() -> Self
```

<a id="return-value"></a>

## Return Value

The current content manager.

<a id="Discussion"></a>

## Discussion

Call this method to create a new content manager. Set the [dataSource](datasource.md) and [delegate](delegate.md) immediately after creating the content manager.

# sharedContentManager (Objective-C)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 7.1+ (deprecated in 14.0) · iPadOS 7.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Returns the current content manager instance.

> Use CarPlay framework

## Declaration

```objectivec
+ (instancetype) sharedContentManager;
```

<a id="return-value"></a>

## Return Value

The current content manager.

<a id="Discussion"></a>

## Discussion

Call this method to create a new content manager. Set the [dataSource](datasource.md) and [delegate](delegate.md) immediately after creating the content manager.
