> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcyololossdescriptor/init(anchorboxes:anchorboxcount:)](https://developer.apple.com/documentation/mlcompute/mlcyololossdescriptor/init(anchorboxes:anchorboxcount:))

# init(anchorBoxes:anchorBoxCount:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a YOLO loss filter descriptor with the anchor box data and number of anchor boxes you specify.

## Declaration

```swift
convenience init(anchorBoxes: Data, anchorBoxCount: Int)
```

## Parameters

- `anchorBoxes`: The anchor box data.
- `anchorBoxCount`: The number of anchor boxes.

# descriptorWithAnchorBoxes:anchorBoxCount: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a YOLO loss filter descriptor with the anchor box data and number of anchor boxes you specify.

## Declaration

```objectivec
+ (instancetype) descriptorWithAnchorBoxes:(NSData *) anchorBoxes anchorBoxCount:(NSUInteger) anchorBoxCount;
```

## Parameters

- `anchorBoxes`: The anchor box data.
- `anchorBoxCount`: The number of anchor boxes.
