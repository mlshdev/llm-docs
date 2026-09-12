> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcontrol/isenabled(forsegment:)](https://developer.apple.com/documentation/appkit/nssegmentedcontrol/isenabled(forsegment:))

# isEnabled(forSegment:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value indicating whether the specified segment is enabled.

## Declaration

```swift
func isEnabled(forSegment segment: Int) -> Bool
```

## Parameters

- `segment`: The index of the segment whose enabled state you want to get. This method raises an exception ([rangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the segment is enabled; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Enabling and disabling segments

- [setEnabled(\_:forSegment:)](setenabled%28__forsegment_%29.md): Sets the enabled state of the specified segment

# isEnabledForSegment: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value indicating whether the specified segment is enabled.

## Declaration

```objectivec
- (BOOL) isEnabledForSegment:(NSInteger) segment;
```

## Parameters

- `segment`: The index of the segment whose enabled state you want to get. This method raises an exception ([NSRangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the segment is enabled; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Enabling and disabling segments

- [setEnabled:forSegment:](setenabled%28__forsegment_%29.md): Sets the enabled state of the specified segment
