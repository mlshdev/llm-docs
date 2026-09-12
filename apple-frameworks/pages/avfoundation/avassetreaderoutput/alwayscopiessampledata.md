> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreaderoutput/alwayscopiessampledata](https://developer.apple.com/documentation/avfoundation/avassetreaderoutput/alwayscopiessampledata)

# alwaysCopiesSampleData (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.8+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A Boolean value that indicates whether the output vends copied sample data.

> It is not necessary to copy the sample data in order to make it safe to use the vended buffer

## Declaration

```swift
var alwaysCopiesSampleData: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true), which indicates that the output always provides copies of sample data to your app. This is the appropriate property value if you intend to modify the sample data it returns.

You can disable the default behavior by setting the value to [false](https://developer.apple.com/documentation/swift/false), which causes the output to vend buffers that may not be copies. Your app can reference these buffers, but it can’t modify them because the result of modifying a shared buffer isn’t defined. If you don’t need to modify the sample data, disabling copying may lead to performance improvements.

## See Also

### Configuring reading

- [supportsRandomAccess](supportsrandomaccess.md): Deprecated. A Boolean value that indicates whether the output supports reconfiguring the time ranges it reads.
- [reset(forReadingTimeRanges:)](reset%28forreadingtimeranges_%29.md): Deprecated. Restarts reading with a new set of time ranges.
- [markConfigurationAsFinal()](markconfigurationasfinal%28%29.md): Deprecated. Tells the output that it’s finished reconfiguring time ranges, and allows the asset reader to advance to a completed state.

# alwaysCopiesSampleData (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the output vends copied sample data.

## Declaration

```objectivec
@property (nonatomic) BOOL alwaysCopiesSampleData;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true), which indicates that the output always provides copies of sample data to your app. This is the appropriate property value if you intend to modify the sample data it returns.

You can disable the default behavior by setting the value to [false](https://developer.apple.com/documentation/swift/false), which causes the output to vend buffers that may not be copies. Your app can reference these buffers, but it can’t modify them because the result of modifying a shared buffer isn’t defined. If you don’t need to modify the sample data, disabling copying may lead to performance improvements.

## See Also

### Configuring reading

- [supportsRandomAccess](supportsrandomaccess.md): Deprecated. A Boolean value that indicates whether the output supports reconfiguring the time ranges it reads.
- [resetForReadingTimeRanges:](reset%28forreadingtimeranges_%29.md): Deprecated. Restarts reading with a new set of time ranges.
- [markConfigurationAsFinal](markconfigurationasfinal%28%29.md): Deprecated. Tells the output that it’s finished reconfiguring time ranges, and allows the asset reader to advance to a completed state.
