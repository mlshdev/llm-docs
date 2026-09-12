> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcontrol/setenabled(_:forsegment:)](https://developer.apple.com/documentation/appkit/nssegmentedcontrol/setenabled(_:forsegment:))

# setEnabled(\_:forSegment:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the enabled state of the specified segment

## Declaration

```swift
func setEnabled(_ enabled: Bool, forSegment segment: Int)
```

## Parameters

- `enabled`: [true](https://developer.apple.com/documentation/swift/true) to enable the segment; otherwise, [false](https://developer.apple.com/documentation/swift/false) to disable it.
- `segment`: The index of the segment you want to enable or disable. This method raises an exception ([rangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

## See Also

### Enabling and disabling segments

- [isEnabled(forSegment:)](isenabled%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is enabled.

# setEnabled:forSegment: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the enabled state of the specified segment

## Declaration

```objectivec
- (void) setEnabled:(BOOL) enabled forSegment:(NSInteger) segment;
```

## Parameters

- `enabled`: [true](https://developer.apple.com/documentation/swift/true) to enable the segment; otherwise, [false](https://developer.apple.com/documentation/swift/false) to disable it.
- `segment`: The index of the segment you want to enable or disable. This method raises an exception ([NSRangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

## See Also

### Enabling and disabling segments

- [isEnabledForSegment:](isenabled%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is enabled.
