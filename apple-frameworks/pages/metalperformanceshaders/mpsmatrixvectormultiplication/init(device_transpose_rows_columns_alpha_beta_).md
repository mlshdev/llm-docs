> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixvectormultiplication/init(device:transpose:rows:columns:alpha:beta:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixvectormultiplication/init(device:transpose:rows:columns:alpha:beta:))

# init(device:transpose:rows:columns:alpha:beta:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
init(device: any MTLDevice, transpose: Bool, rows: Int, columns: Int, alpha: Double, beta: Double)
```

## See Also

### Initializers

- [init(device:rows:columns:)](init%28device_rows_columns_%29.md)

# initWithDevice:transpose:rows:columns:alpha:beta: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device transpose:(BOOL) transpose rows:(NSUInteger) rows columns:(NSUInteger) columns alpha:(double) alpha beta:(double) beta;
```

## See Also

### Initializers

- [initWithDevice:rows:columns:](init%28device_rows_columns_%29.md)
