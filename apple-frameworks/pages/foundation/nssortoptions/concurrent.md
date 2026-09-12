> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssortoptions/concurrent](https://developer.apple.com/documentation/foundation/nssortoptions/concurrent)

# concurrent (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that the Block sort operation should be concurrent.

## Declaration

```swift
static var concurrent: NSSortOptions { get }
```

<a id="Discussion"></a>

## Discussion

This option is a hint and may be ignored by the implementation under some circumstances; the code of the Block must be safe against concurrent invocation.

## See Also

### Constants

- [stable](stable.md): Specifies that the sorted results should return compared items having equal value in the order they occurred originally.

# NSSortConcurrent (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that the Block sort operation should be concurrent.

## Declaration

```objectivec
NSSortConcurrent
```

<a id="Discussion"></a>

## Discussion

This option is a hint and may be ignored by the implementation under some circumstances; the code of the Block must be safe against concurrent invocation.

## See Also

### Constants

- [NSSortStable](stable.md): Specifies that the sorted results should return compared items having equal value in the order they occurred originally.
