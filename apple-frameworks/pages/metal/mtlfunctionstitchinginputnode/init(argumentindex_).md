> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionstitchinginputnode/init(argumentindex:)](https://developer.apple.com/documentation/metal/mtlfunctionstitchinginputnode/init(argumentindex:))

# init(argumentIndex:) (Swift)

**Framework:** Metal  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a new input node.

## Declaration

```swift
init(argumentIndex argument: Int)
```

## Parameters

- `argument`: The index of the parameter in the  stitched function’s parameter list. The first parameter is `0`, the second is `1`, and so on.

# initWithArgumentIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a new input node.

## Declaration

```objectivec
- (instancetype) initWithArgumentIndex:(NSUInteger) argument;
```

## Parameters

- `argument`: The index of the parameter in the  stitched function’s parameter list. The first parameter is `0`, the second is `1`, and so on.
