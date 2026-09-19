> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicollectionviewplaceholder/cellupdatehandler

# cellUpdateHandler (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The block that updates the contents of the placeholder cell.

## Declaration

```swift
var cellUpdateHandler: ((UICollectionViewCell) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

Specify a block that configures or updates the appearance of your placeholder cell. The collection view calls this block when the placeholder cell becomes visible, and at other appropriate times.

# cellUpdateHandler (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The block that updates the contents of the placeholder cell.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^cellUpdateHandler)(UICollectionViewCell *);
```

<a id="Discussion"></a>

## Discussion

Specify a block that configures or updates the appearance of your placeholder cell. The collection view calls this block when the placeholder cell becomes visible, and at other appropriate times.
