> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamecontroller/gcaxis2dinput/isanalog

# isAnalog (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.3+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value that indicates whether the input provides analog values.

## Declaration

```swift
var isAnalog: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is [true](https://developer.apple.com/documentation/swift/true) for most axis inputs.

## See Also

### Getting the characteristics

- [canWrap](canwrap.md): A Boolean value that indicates whether the value wraps when it reaches the range’s minimum or maximum value.

# analog (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.3+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value that indicates whether the input provides analog values.

## Declaration

```objectivec
@property (readonly, getter=isAnalog) BOOL analog;
```

<a id="Discussion"></a>

## Discussion

This property is [true](https://developer.apple.com/documentation/swift/true) for most axis inputs.

## See Also

### Getting the characteristics

- [canWrap](canwrap.md): A Boolean value that indicates whether the value wraps when it reaches the range’s minimum or maximum value.
