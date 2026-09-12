> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxplaydtmfcallaction/init(coder:)](https://developer.apple.com/documentation/callkit/cxplaydtmfcallaction/init(coder:))

# init(coder:) (Swift)

**Framework:** CallKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a new action to play dual-tone multifrequency (DTMF) tones with data in an unarchiver.

## Declaration

```swift
init?(coder aDecoder: NSCoder)
```

## Parameters

- `aDecoder`: An unarchiver object.

## See Also

### Creating New Actions

- [init(call:digits:type:)](init%28call_digits_type_%29.md): Initializes a new action for a call identified by a given UUID, as well as a specified type and sequence of digits.

# initWithCoder: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a new action to play dual-tone multifrequency (DTMF) tones with data in an unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder;
```

## Parameters

- `aDecoder`: An unarchiver object.

## See Also

### Creating New Actions

- [initWithCallUUID:digits:type:](init%28call_digits_type_%29.md): Initializes a new action for a call identified by a given UUID, as well as a specified type and sequence of digits.
