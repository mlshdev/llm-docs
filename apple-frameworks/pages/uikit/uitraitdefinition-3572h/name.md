> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitraitdefinition-3572h/name](https://developer.apple.com/documentation/uikit/uitraitdefinition-3572h/name)

# name

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

A short human-readable name for the trait, e.g. for printing and debugging output. By default, the trait’s class name is used when not implemented.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSString * name;
```

## Mentioned In

- [Providing data to the view hierarchy with custom traits](../providing-data-to-the-view-hierarchy-with-custom-traits.md)

## See Also

### Type Properties

- [affectsColorAppearance](affectscolorappearance.md): Whether the trait is used to resolve dynamic colors (or images), and changes to the trait should automatically trigger views using dynamic colors/images to update their appearance. Default is NO.
- [identifier](identifier.md): A unique identifier string for the trait (reverse-DNS format recommended). Allows the trait to be encoded/decoded, and to map both a Swift and Objective-C trait to the same data.
