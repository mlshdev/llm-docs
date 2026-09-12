> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/selfsizinginvalidation-swift.enum](https://developer.apple.com/documentation/uikit/uitableview/selfsizinginvalidation-swift.enum)

# UITableView.SelfSizingInvalidation (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Constants that describe modes for invalidating the size of self-sizing table view cells.

## Declaration

```swift
enum SelfSizingInvalidation
```

<a id="overview"></a>

## Overview

Use these constants with the [selfSizingInvalidation](selfsizinginvalidation-swift.property.md) property.

## Topics

### Constants

- [UITableView.SelfSizingInvalidation.disabled](selfsizinginvalidation-swift.enum/disabled.md): A mode that disables self-sizing invalidation.
- [UITableView.SelfSizingInvalidation.enabled](selfsizinginvalidation-swift.enum/enabled.md): A mode that enables manual self-sizing invalidation.
- [UITableView.SelfSizingInvalidation.enabledIncludingConstraints](selfsizinginvalidation-swift.enum/enabledincludingconstraints.md): A mode that enables automatic self-sizing invalidation after Auto Layout changes.

### Initializers

- [init(rawValue:)](selfsizinginvalidation-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Resizing self-sizing cells

- [selfSizingInvalidation](selfsizinginvalidation-swift.property.md): The mode that the table view uses for invalidating the size of self-sizing cells.

# UITableViewSelfSizingInvalidation (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Constants that describe modes for invalidating the size of self-sizing table view cells.

## Declaration

```objectivec
enum UITableViewSelfSizingInvalidation : NSInteger;
```

<a id="overview"></a>

## Overview

Use these constants with the [selfSizingInvalidation](selfsizinginvalidation-swift.property.md) property.

## Topics

### Constants

- [UITableViewSelfSizingInvalidationDisabled](selfsizinginvalidation-swift.enum/disabled.md): A mode that disables self-sizing invalidation.
- [UITableViewSelfSizingInvalidationEnabled](selfsizinginvalidation-swift.enum/enabled.md): A mode that enables manual self-sizing invalidation.
- [UITableViewSelfSizingInvalidationEnabledIncludingConstraints](selfsizinginvalidation-swift.enum/enabledincludingconstraints.md): A mode that enables automatic self-sizing invalidation after Auto Layout changes.

## See Also

### Resizing self-sizing cells

- [selfSizingInvalidation](selfsizinginvalidation-swift.property.md): The mode that the table view uses for invalidating the size of self-sizing cells.
