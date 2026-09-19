> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inplaymediaintent/mediacontainer

# mediaContainer (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

The media item container.

## Declaration

```swift
@NSCopying var mediaContainer: INMediaItem? { get }
```

<a id="Discussion"></a>

## Discussion

A container consists of one or more pieces of media content such as a playlist or album. You set [mediaContainer](mediacontainer.md) when creating the [INPlayMediaIntent](../inplaymediaintent.md) object.

> **Note**

>  This property isn’t used with SiriKit Intents.

## See Also

### Accessing Media Items

- [mediaItems](mediaitems.md): The media content.

# mediaContainer (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

The media item container.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INMediaItem * mediaContainer;
```

```objectivec
@property (atomic, copy, readonly, nullable) INMediaItem * mediaContainer;
```

<a id="Discussion"></a>

## Discussion

A container consists of one or more pieces of media content such as a playlist or album. You set [mediaContainer](mediacontainer.md) when creating the [INPlayMediaIntent](../inplaymediaintent.md) object.

> **Note**

>  This property isn’t used with SiriKit Intents.

## See Also

### Accessing Media Items

- [mediaItems](mediaitems.md): The media content.
