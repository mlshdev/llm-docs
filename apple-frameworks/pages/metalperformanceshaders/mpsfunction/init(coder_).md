> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsfunction/init(coder:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsfunction/init(coder:))

# init(coder:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
init?(coder aDecoder: NSCoder)
```

<a id="discussion"></a>

## Discussion

Called by NSCoder to decode MPSKernels

This standard method doesn’t allow for control over which device the object targets. By default this will be the Metal system default device. If you want another device, use the MPSKeyedUnarchiver or other  to decode the function.

# initWithCoder: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder;
```

<a id="discussion"></a>

## Discussion

Called by NSCoder to decode MPSKernels

This standard method doesn’t allow for control over which device the object targets. By default this will be the Metal system default device. If you want another device, use the MPSKeyedUnarchiver or other  to decode the function.
