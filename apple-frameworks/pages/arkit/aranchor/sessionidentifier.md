> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/aranchor/sessionidentifier](https://developer.apple.com/documentation/arkit/aranchor/sessionidentifier)

# sessionIdentifier (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The unique identifier of the session that owns this anchor.

## Declaration

```swift
var sessionIdentifier: UUID? { get }
```

<a id="Discussion"></a>

## Discussion

ARKit sets this property when a user first adds an anchor to a session. In multiuser experiences, use this ID to identify the user that created the anchor.

## See Also

### Tracking Anchors

- [identifier](identifier.md): A unique identifier for the anchor.
- [transform](transform.md): A matrix encoding the position, orientation, and scale of the anchor relative to the world coordinate space of the AR session the anchor is placed in.

# sessionIdentifier (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The unique identifier of the session that owns this anchor.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSUUID * sessionIdentifier;
```

<a id="Discussion"></a>

## Discussion

ARKit sets this property when a user first adds an anchor to a session. In multiuser experiences, use this ID to identify the user that created the anchor.

## See Also

### Tracking Anchors

- [identifier](identifier.md): A unique identifier for the anchor.
- [transform](transform.md): A matrix encoding the position, orientation, and scale of the anchor relative to the world coordinate space of the AR session the anchor is placed in.
