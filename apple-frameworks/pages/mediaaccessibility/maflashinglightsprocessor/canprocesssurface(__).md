> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/maflashinglightsprocessor/canprocesssurface(_:)](https://developer.apple.com/documentation/mediaaccessibility/maflashinglightsprocessor/canprocesssurface(_:))

# canProcessSurface(\_:) (Swift)

**Framework:** Media Accessibility  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the flashing lights processor can process the content in the surface for sequences of flashing lights.

## Declaration

```swift
func canProcessSurface(_ surface: IOSurfaceRef) -> Bool
```

## Parameters

- `surface`: The [IOSurfaceRef](../../iosurface/iosurfaceref.md) to process for flashing lights.

<a id="Return-Value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the processor can process the content in the surface for flashing lights. [false](https://developer.apple.com/documentation/swift/false) if the processor can’t process the surface, which can occur for unsupported hardware or unsupported color spaces.

# canProcessSurface: (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the flashing lights processor can process the content in the surface for sequences of flashing lights.

## Declaration

```objectivec
- (BOOL) canProcessSurface:(IOSurfaceRef) surface;
```

## Parameters

- `surface`: The [IOSurfaceRef](../../iosurface/iosurfaceref.md) to process for flashing lights.

<a id="Return-Value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the processor can process the content in the surface for flashing lights. [false](https://developer.apple.com/documentation/swift/false) if the processor can’t process the surface, which can occur for unsupported hardware or unsupported color spaces.
