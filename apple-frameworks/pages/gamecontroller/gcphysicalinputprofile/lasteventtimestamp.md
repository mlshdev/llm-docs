> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamecontroller/gcphysicalinputprofile/lasteventtimestamp

# lastEventTimestamp (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The time of the most recent change to an element’s value.

## Declaration

```swift
var lastEventTimestamp: TimeInterval { get }
```

## See Also

### Getting change information

- [valueDidChangeHandler](valuedidchangehandler.md): The block that the profile calls when an element’s value changes.

# lastEventTimestamp (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The time of the most recent change to an element’s value.

## Declaration

```objectivec
@property (atomic, readonly) NSTimeInterval lastEventTimestamp;
```

## See Also

### Getting change information

- [valueDidChangeHandler](valuedidchangehandler.md): The block that the profile calls when an element’s value changes.
