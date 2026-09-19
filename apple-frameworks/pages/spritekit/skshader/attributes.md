> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spritekit/skshader/attributes

# attributes (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The list of attributes associated with the shader.

## Declaration

```swift
var attributes: [SKAttribute] { get set }
```

<a id="Discussion"></a>

## Discussion

This property is not read-only, so you can also use it to provide all of the attributes in a single operation. Each of the attributes should be uniquely named.

# attributes (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The list of attributes associated with the shader.

## Declaration

```objectivec
@property (nonatomic, copy, nonnull) NSArray<SKAttribute *> * attributes;
```

<a id="Discussion"></a>

## Discussion

This property is not read-only, so you can also use it to provide all of the attributes in a single operation. Each of the attributes should be uniquely named.
