> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsndarray/writebytes(_:stridebytes:)

# writeBytes(\_:strideBytes:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func writeBytes(_ buffer: UnsafeMutableRawPointer, strideBytes strideBytesPerDimension: UnsafeMutablePointer<Int>?)
```

# writeBytes:strideBytes: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) writeBytes:(void *) buffer strideBytes:(NSInteger *) strideBytesPerDimension;
```
