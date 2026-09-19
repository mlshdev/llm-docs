> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coretelephony/ctsubscriberinfo/subscriber()

# subscriber() (Swift)

**Framework:** Core Telephony  
**Kind:** Type Method  
**Availability:** iOS 6.0+ (deprecated in 12.1) · iPadOS 6.0+ (deprecated in 12.1) · Mac Catalyst 6.0+ (deprecated in 12.1)

Returns the cellular network subscribers.

> Use [subscribers()](subscribers%28%29.md) instead.

## Declaration

```swift
class func subscriber() -> CTSubscriber
```

<a id="return-value"></a>

## Return Value

An array of [CTSubscriber](../ctsubscriber.md) instances.

## See Also

### Getting Subscriber Information

- [subscribers()](subscribers%28%29.md): Returns the cellular network subscribers.

# subscriber (Objective-C)

**Framework:** Core Telephony  
**Kind:** Type Method  
**Availability:** iOS 6.0+ (deprecated in 12.1) · iPadOS 6.0+ (deprecated in 12.1)

Returns the cellular network subscribers.

> Use [subscribers](subscribers%28%29.md) instead.

## Declaration

```objectivec
+ (CTSubscriber *) subscriber;
```

<a id="return-value"></a>

## Return Value

An array of [CTSubscriber](../ctsubscriber.md) instances.

## See Also

### Getting Subscriber Information

- [subscribers](subscribers%28%29.md): Returns the cellular network subscribers.
