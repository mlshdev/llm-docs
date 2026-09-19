> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/vimagechanneldescription/max

# max (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The maximum encoded value.

## Declaration

```swift
var max: CGFloat
```

<a id="Discussion"></a>

## Discussion

The vImage library clamps values greater than the maximum to the maximum.

## See Also

### Instance properties

- [min](min.md): The minimum encoded value.
- [zero](zero.md): The encoding for the value zero.
- [full](full.md): The encoding for the value one.

# max (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The maximum encoded value.

## Declaration

```objectivec
CGFloat max;
```

<a id="Discussion"></a>

## Discussion

The vImage library clamps values greater than the maximum to the maximum.

## See Also

### Instance properties

- [min](min.md): The minimum encoded value.
- [zero](zero.md): The encoding for the value zero.
- [full](full.md): The encoding for the value one.
