> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidropsessionprogressindicatorstyle](https://developer.apple.com/documentation/uikit/uidropsessionprogressindicatorstyle)

# UIDropSessionProgressIndicatorStyle (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The drop-progress indicator styles for the drop session, used while data is moving from the source to the destination.

## Declaration

```swift
enum UIDropSessionProgressIndicatorStyle
```

## Topics

### Progress indicator styles

- [UIDropSessionProgressIndicatorStyle.default](uidropsessionprogressindicatorstyle/default.md): The indicator style for using the system’s default drop-progress indication.
- [UIDropSessionProgressIndicatorStyle.none](uidropsessionprogressindicatorstyle/none.md): The indicator style for no drop-progress indication.

### Initializers

- [init(rawValue:)](uidropsessionprogressindicatorstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Drop destinations

- [UIDropSession](uidropsession.md): The interface for querying a drop session about its state and associated drag items.
- [UIDropProposal](uidropproposal.md): A configuration for the behavior of a drop interaction, required if a view accepts drop activities.
- [UIDropOperation](uidropoperation.md): Operation types that determine how a drag and drop activity resolves when the user drops a drag item.

# UIDropSessionProgressIndicatorStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The drop-progress indicator styles for the drop session, used while data is moving from the source to the destination.

## Declaration

```objectivec
enum UIDropSessionProgressIndicatorStyle : NSUInteger;
```

## Topics

### Progress indicator styles

- [UIDropSessionProgressIndicatorStyleDefault](uidropsessionprogressindicatorstyle/default.md): The indicator style for using the system’s default drop-progress indication.
- [UIDropSessionProgressIndicatorStyleNone](uidropsessionprogressindicatorstyle/none.md): The indicator style for no drop-progress indication.

## See Also

### Drop destinations

- [UIDropSession](uidropsession.md): The interface for querying a drop session about its state and associated drag items.
- [UIDropProposal](uidropproposal.md): A configuration for the behavior of a drop interaction, required if a view accepts drop activities.
- [UIDropOperation](uidropoperation.md): Operation types that determine how a drag and drop activity resolves when the user drops a drag item.
