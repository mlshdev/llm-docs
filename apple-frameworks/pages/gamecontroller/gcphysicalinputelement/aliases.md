> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamecontroller/gcphysicalinputelement/aliases

# aliases (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The element’s aliases to use when accessing it with the subscript notation.

## Declaration

```swift
var aliases: Set<String> { get }
```

# aliases (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The element’s aliases to use when accessing it with the subscript notation.

## Declaration

```objectivec
@property (copy, readonly) NSSet<NSString *> * aliases;
```

## See Also

### Related Documentation

- [elementForAlias:](../gcphysicalinputelementcollection-c.class/elementforalias_.md): Returns the element in the collection that uses the specified alias.
