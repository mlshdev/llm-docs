> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessibility/axcustomcontentreturnblock

# AXCustomContentReturnBlock (Swift)

**Framework:** Accessibility  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

## Declaration

```swift
typealias AXCustomContentReturnBlock = () -> [AXCustomContent]?
```

## See Also

### Custom accessibility content

- [AXCustomContent](axcustomcontent.md): Objects that define custom content and the timing of its output.
- [AXCustomContentProvider](axcustomcontentprovider.md): The interface for customizing the accessibility content.

# AXCustomContentReturnBlock (Objective-C)

**Framework:** Accessibility  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

## Declaration

```objectivec
typedef NSArray<AXCustomContent *> *(^)(void) AXCustomContentReturnBlock;
```

## See Also

### Custom accessibility content

- [AXCustomContent](axcustomcontent.md): Objects that define custom content and the timing of its output.
- [AXCustomContentProvider](axcustomcontentprovider.md): The interface for customizing the accessibility content.
