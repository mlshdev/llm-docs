> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcaxis2dinput/canwrap](https://developer.apple.com/documentation/gamecontroller/gcaxis2dinput/canwrap)

# canWrap (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.3+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value that indicates whether the value wraps when it reaches the range’s minimum or maximum value.

## Declaration

```swift
var canWrap: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is [false](https://developer.apple.com/documentation/swift/false) for most axis inputs.

## See Also

### Getting the characteristics

- [isAnalog](isanalog.md): A Boolean value that indicates whether the input provides analog values.

# canWrap (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.3+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value that indicates whether the value wraps when it reaches the range’s minimum or maximum value.

## Declaration

```objectivec
@property (readonly) BOOL canWrap;
```

<a id="Discussion"></a>

## Discussion

This property is [false](https://developer.apple.com/documentation/swift/false) for most axis inputs.

## See Also

### Getting the characteristics

- [analog](isanalog.md): A Boolean value that indicates whether the input provides analog values.
