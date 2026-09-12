> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssortoptions/stable](https://developer.apple.com/documentation/foundation/nssortoptions/stable)

# stable (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that the sorted results should return compared items having equal value in the order they occurred originally.

## Declaration

```swift
static var stable: NSSortOptions { get }
```

<a id="Discussion"></a>

## Discussion

If this option is unspecified, equal objects may, or may not be returned in their original order.

## See Also

### Constants

- [concurrent](concurrent.md): Specifies that the Block sort operation should be concurrent.

# NSSortStable (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that the sorted results should return compared items having equal value in the order they occurred originally.

## Declaration

```objectivec
NSSortStable
```

<a id="Discussion"></a>

## Discussion

If this option is unspecified, equal objects may, or may not be returned in their original order.

## See Also

### Constants

- [NSSortConcurrent](concurrent.md): Specifies that the Block sort operation should be concurrent.
