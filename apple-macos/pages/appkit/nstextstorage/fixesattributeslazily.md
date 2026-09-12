> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextstorage/fixesattributeslazily](https://developer.apple.com/documentation/appkit/nstextstorage/fixesattributeslazily)

# fixesAttributesLazily (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

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

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A Boolean value that indicates whether the text storage object fixes attributes lazily.

## Declaration

```objectivec
@property (readonly) BOOL fixesAttributesLazily;
```

<a id="Discussion"></a>

## Discussion

When subclassing, the default value of this property is [false](https://developer.apple.com/documentation/swift/false), meaning that your subclass fixes attributes immediately when they change. The system’s concrete subclass overrides this property and sets it to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Fixing the string attributes

- [invalidateAttributesInRange:](invalidateattributes%28in_%29.md): Invalidates attributes in the specified range.
- [ensureAttributesAreFixedInRange:](ensureattributesarefixed%28in_%29.md): Ensures that attribute fixing occurs in the specified range.
