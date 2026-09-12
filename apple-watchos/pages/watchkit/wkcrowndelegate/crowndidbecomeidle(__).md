> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkcrowndelegate/crowndidbecomeidle(_:)](https://developer.apple.com/documentation/watchkit/wkcrowndelegate/crowndidbecomeidle(_:))

# crownDidBecomeIdle(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Called when the user stops rotating the crown.

## Declaration

```swift
optional func crownDidBecomeIdle(_ crownSequencer: WKCrownSequencer?)
```

## Parameters

- `crownSequencer`: The crown sequencer object reporting the change.

<a id="Discussion"></a>

## Discussion

The crown sequencer calls this method when the crown finally comes to rest. The sequencer calls this method only after one or more calls to the [crownDidRotate(\_:rotationalDelta:)](crowndidrotate%28__rotationaldelta_%29.md) method.

## See Also

### Related Documentation

- [isIdle](../wkcrownsequencer/isidle.md): A Boolean value indicating whether the crown is at rest.

### Receiving Crown Events

- [crownDidRotate(\_:rotationalDelta:)](crowndidrotate%28__rotationaldelta_%29.md): Called when the user rotates the crown.

# crownDidBecomeIdle: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Called when the user stops rotating the crown.

## Declaration

```objectivec
- (void) crownDidBecomeIdle:(WKCrownSequencer *) crownSequencer;
```

## Parameters

- `crownSequencer`: The crown sequencer object reporting the change.

<a id="Discussion"></a>

## Discussion

The crown sequencer calls this method when the crown finally comes to rest. The sequencer calls this method only after one or more calls to the [crownDidRotate:rotationalDelta:](crowndidrotate%28__rotationaldelta_%29.md) method.

## See Also

### Related Documentation

- [idle](../wkcrownsequencer/isidle.md): A Boolean value indicating whether the crown is at rest.

### Receiving Crown Events

- [crownDidRotate:rotationalDelta:](crowndidrotate%28__rotationaldelta_%29.md): Called when the user rotates the crown.
