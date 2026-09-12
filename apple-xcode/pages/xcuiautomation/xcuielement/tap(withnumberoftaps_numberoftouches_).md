> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/tap(withnumberoftaps:numberoftouches:)](https://developer.apple.com/documentation/xcuiautomation/xcuielement/tap(withnumberoftaps:numberoftouches:))

# tap(withNumberOfTaps:numberOfTouches:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · watchOS · Xcode 16.3+

Sends one or more taps with one or more touch points.

## Declaration

```swift
func tap(withNumberOfTaps numberOfTaps: Int, numberOfTouches: Int)
```

## Parameters

- `numberOfTaps`: The number of taps.
- `numberOfTouches`: The number of touch points.

## See Also

### Tapping multiple times

- [twoFingerTap()](twofingertap%28%29.md): Sends a two-finger tap event to a hittable point the system computes for the element.

# tapWithNumberOfTaps:numberOfTouches: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · watchOS · Xcode 16.3+

Sends one or more taps with one or more touch points.

## Declaration

```objectivec
- (void) tapWithNumberOfTaps:(NSUInteger) numberOfTaps numberOfTouches:(NSUInteger) numberOfTouches;
```

## Parameters

- `numberOfTaps`: The number of taps.
- `numberOfTouches`: The number of touch points.

## See Also

### Tapping multiple times

- [twoFingerTap](twofingertap%28%29.md): Sends a two-finger tap event to a hittable point the system computes for the element.
