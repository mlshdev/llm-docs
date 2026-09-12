> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/dropoperation](https://developer.apple.com/documentation/appkit/nsbrowser/dropoperation)

# NSBrowser.DropOperation (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.5+

The type used to specify the drop type of a drag-and-drop operation. See [browser(\_:validateDrop:proposedRow:column:dropOperation:)](../nsbrowserdelegate/browser%28__validatedrop_proposedrow_column_dropoperation_%29.md) for more information.

## Declaration

```swift
enum DropOperation
```

## Topics

### Constants

- [NSBrowser.DropOperation.on](dropoperation/on.md)
- [NSBrowser.DropOperation.above](dropoperation/above.md)

### Initializers

- [init(rawValue:)](dropoperation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [NSBrowser.ColumnResizingType](columnresizingtype-swift.enum.md): Types of browser column resizing.
- [Application Kit Versions for NSBrowser Functionality](../application-kit-versions-for-nsbrowser-functionality.md): The version of the AppKit.framework containing a specific bug fix or capability.

# NSBrowserDropOperation (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.5+

The type used to specify the drop type of a drag-and-drop operation. See [browser:validateDrop:proposedRow:column:dropOperation:](../nsbrowserdelegate/browser%28__validatedrop_proposedrow_column_dropoperation_%29.md) for more information.

## Declaration

```objectivec
enum NSBrowserDropOperation : NSUInteger;
```

## Topics

### Constants

- [NSBrowserDropOn](dropoperation/on.md)
- [NSBrowserDropAbove](dropoperation/above.md)

## See Also

### Constants

- [NSBrowserColumnResizingType](columnresizingtype-swift.enum.md): Types of browser column resizing.
- [Application Kit Versions for NSBrowser Functionality](../application-kit-versions-for-nsbrowser-functionality.md): The version of the AppKit.framework containing a specific bug fix or capability.
