> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/accessibilityexpandedstatusblock](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityexpandedstatusblock)

# accessibilityExpandedStatusBlock (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```swift
@MainActor var accessibilityExpandedStatusBlock: (@MainActor @Sendable () -> UIAccessibility.ExpandedStatus)? { get set }
```

# accessibilityExpandedStatusBlock (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```objectivec
@property (nonatomic, copy, nullable) enum UIAccessibilityExpandedStatus (^)(void) accessibilityExpandedStatusBlock;
```
