> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextstorage/fixesattributeslazily](https://developer.apple.com/documentation/uikit/nstextstorage/fixesattributeslazily)

# fixesAttributesLazily (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the text storage object fixes attributes lazily.

## Declaration

```swift
var fixesAttributesLazily: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When subclassing, the default value of this property is [false](https://developer.apple.com/documentation/swift/false), meaning that your subclass fixes attributes immediately when they change. The system’s concrete subclass overrides this property and sets it to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Fixing the string attributes

- [invalidateAttributes(in:)](invalidateattributes%28in_%29.md): Invalidates attributes in the specified range.
- [ensureAttributesAreFixed(in:)](ensureattributesarefixed%28in_%29.md): Ensures that attribute fixing occurs in the specified range.

# fixesAttributesLazily (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the text storage object fixes attributes lazily.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL fixesAttributesLazily;
```

<a id="Discussion"></a>

## Discussion

When subclassing, the default value of this property is [false](https://developer.apple.com/documentation/swift/false), meaning that your subclass fixes attributes immediately when they change. The system’s concrete subclass overrides this property and sets it to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Fixing the string attributes

- [invalidateAttributesInRange:](invalidateattributes%28in_%29.md): Invalidates attributes in the specified range.
- [ensureAttributesAreFixedInRange:](ensureattributesarefixed%28in_%29.md): Ensures that attribute fixing occurs in the specified range.
